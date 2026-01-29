import React, { useState, useEffect } from 'react';
import { X, Save, Tag, FileText, AlertCircle, Hash } from 'lucide-react';
import { Category } from '../../types';

interface CategoryModalProps {
  category: Category | null;
  onSave: (data: Partial<Category>) => void;
  onClose: () => void;
}

interface CategoryFormData {
  name: string;
  description: string;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ category, onSave, onClose }) => {
  const [formData, setFormData] = useState<CategoryFormData>({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState<Partial<CategoryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        description: category.description
      });
    } else {
      setFormData({
        name: '',
        description: ''
      });
    }
    setErrors({});
  }, [category]);

  const validateForm = (): boolean => {
    const newErrors: Partial<CategoryFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Tên danh mục là bắt buộc';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Tên danh mục phải có ít nhất 2 ký tự';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Mô tả là bắt buộc';
    } else if (formData.description.length < 5) {
      newErrors.description = 'Mô tả phải có ít nhất 5 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving category:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof CategoryFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {category ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới'}
                </h3>
                <p className="text-sm text-green-100">
                  {category ? 'Cập nhật thông tin danh mục' : 'Tạo danh mục mới để phân loại sản phẩm'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Category Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Tên danh mục *
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Nhập tên danh mục"
                  />
                </div>
                {errors.name && (
                  <div className="flex items-center mt-1 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </div>
                )}
                {formData.name && (
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Slug:</span> {generateSlug(formData.name)}
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Mô tả danh mục *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none ${
                      errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Nhập mô tả chi tiết về danh mục này..."
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  {errors.description && (
                    <div className="flex items-center text-sm text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.description}
                    </div>
                  )}
                  <span className="text-sm text-gray-500 ml-auto">
                    {formData.description.length} ký tự
                  </span>
                </div>
              </div>

              {/* Category Preview */}
              {formData.name && formData.description && (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Xem trước danh mục</h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Tag className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-900 mb-2">
                          {formData.name}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {formData.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-3 text-xs text-gray-500">
                          <span>Slug: {generateSlug(formData.name)}</span>
                          <span>•</span>
                          <span>0 sản phẩm</span>
                          <span>•</span>
                          <span>Mới tạo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category Guidelines */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Hash className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900">Hướng dẫn tạo danh mục</h4>
                    <ul className="mt-2 text-sm text-blue-700 space-y-1">
                      <li>• Tên danh mục nên ngắn gọn, dễ hiểu</li>
                      <li>• Mô tả chi tiết giúp khách hàng dễ tìm kiếm sản phẩm</li>
                      <li>• Tránh tạo quá nhiều danh mục con không cần thiết</li>
                      <li>• Sử dụng từ khóa phổ biến để tối ưu SEO</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Settings */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Cài đặt bổ sung</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Hiển thị trên trang chủ
                      </label>
                      <p className="text-xs text-gray-500">
                        Danh mục sẽ được hiển thị trong danh sách danh mục nổi bật
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Cho phép tìm kiếm
                      </label>
                      <p className="text-xs text-gray-500">
                        Khách hàng có thể tìm kiếm sản phẩm theo danh mục này
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>* Trường bắt buộc</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? 'Đang lưu...' : 'Lưu danh mục'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;