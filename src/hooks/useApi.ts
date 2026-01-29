import { useState, useEffect, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

/**
 * Custom hook for API calls with loading, error, and data states
 */
export const useApi = <T>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: UseApiOptions = {}
) => {
  const { immediate = true, onSuccess, onError } = options;
  
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: immediate,
    error: null
  });

  const execute = useCallback(async (...args: any[]) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const result = await apiFunction(...args);
      setState({ data: result, loading: false, error: null });
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      setState({ data: null, loading: false, error: errorMessage });
      
      if (onError) {
        onError(errorMessage);
      }
      
      throw error;
    }
  }, [apiFunction, onSuccess, onError]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
    reset
  };
};

/**
 * Custom hook for paginated API calls
 */
export const usePaginatedApi = <T>(
  apiFunction: (page: number, limit: number, ...args: any[]) => Promise<{
    data: T[];
    total: number;
    page: number;
    limit: number;
  }>,
  initialLimit: number = 10
) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);
  const [allData, setAllData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const {
    data: currentData,
    loading,
    error,
    execute
  } = useApi(
    (currentPage: number, currentLimit: number, ...args: any[]) =>
      apiFunction(currentPage, currentLimit, ...args),
    { immediate: false }
  );

  const loadPage = useCallback(async (pageNum: number, ...args: any[]) => {
    const result = await execute(pageNum, limit, ...args);
    
    if (result) {
      setTotal(result.total);
      setHasMore(pageNum * limit < result.total);
      
      if (pageNum === 1) {
        setAllData(result.data);
      } else {
        setAllData(prev => [...prev, ...result.data]);
      }
    }
  }, [execute, limit]);

  const loadMore = useCallback((...args: any[]) => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadPage(nextPage, ...args);
    }
  }, [loading, hasMore, page, loadPage]);

  const refresh = useCallback((...args: any[]) => {
    setPage(1);
    setAllData([]);
    loadPage(1, ...args);
  }, [loadPage]);

  const changeLimit = useCallback((newLimit: number, ...args: any[]) => {
    setLimit(newLimit);
    setPage(1);
    setAllData([]);
    loadPage(1, ...args);
  }, [loadPage]);

  return {
    data: allData,
    currentPageData: currentData?.data || [],
    loading,
    error,
    page,
    limit,
    total,
    hasMore,
    loadMore,
    refresh,
    changeLimit,
    loadPage
  };
};