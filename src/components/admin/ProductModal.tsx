import React, { useState, useEffect } from 'react';
import { X, Save, Upload, Image as ImageIcon, AlertCircle, Eye, EyeOff, Package, Tag, DollarSign, Hash, FileText } from 'lucide-react';
import { Product, Category, ProductFormData } from '../../types';

interface ProductModalProps {
  product: Product | null;
  categories: Category[];
  onSave: (data: Partial<Product>) => void;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, categories, onSave, onClose }) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'details' | 'media'>('basic');
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: '',
    description: '',
    image: '',
    quantity: '',
    category: '',
    status: 'active'
  });
  const [errors, setErrors] = useState<Partial<ProductFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
        description: product.description,
        image: product.image,
        quantity: product.quantity.toString(),
        category: product.category,
        status: product.status
      });
      setImagePreview(product.image);
    } else {
      // Reset form for new product
      setFormData({
        name: '',
        price: '',
        description: '',
        image: '',
        quantity: '',
        category: categories.length > 0 ? categories[0].name : '',
        status: 'active'
      });
      setImagePreview('');
    }
    setErrors({});
  }, [product, categories]);

  const validateForm = (): boolean => {
    const newErrors: Partial<ProductFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Tên sản phẩm là bắt buộc';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Tên sản phẩm phải có ít nhất 3 ký tự';
    }

    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Giá phải là số dương';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Mô tả là bắt buộc';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Mô tả phải có ít nhất 10 ký tự';
    }

    if (!formData.image.trim()) {
      newErrors.image = 'URL ảnh là bắt buộc';
    } else if (!isValidUrl(formData.image)) {
      newErrors.image = 'URL ảnh không hợp lệ';
    }

    if (!formData.quantity || isNaN(Number(formData.quantity)) || Number(formData.quantity) < 0) {
      newErrors.quantity = 'Số lượng phải là số không âm';
    }

    if (!formData.category) {
      newErrors.category = 'Danh mục là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setActiveTab('basic'); // Switch to basic tab if there are errors
      return;
    }

    setIsSubmitting(true);
    try {
      const productData = {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity)
      };
      await onSave(productData);
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ProductFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
    
    // Update image preview
    if (field === 'image') {
      setImagePreview(value);
    }
  };

  const handleImageUrlTest = () => {
    if (formData.image && isValidUrl(formData.image)) {
      setShowPreview(!showPreview);
    }
  };

  const tabs = [
    { id: 'basic', name: 'Thông tin cơ bản', icon: Package },
    { id: 'details', name: 'Chi tiết', icon: FileText },
    { id: 'media', name: 'Hình ảnh', icon: ImageIcon }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {product ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
                </h3>
                <p className="text-sm text-blue-100">
                  {product ? 'Cập nhật thông tin sản phẩm' : 'Tạo sản phẩm mới trong hệ thống'}
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

          {/* Tabs */}
          <div className="border-b border-gray-200 bg-gray-50">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Basic Information Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Tên sản phẩm *
                    </label>
                    <div className="relative">
                      <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Nhập tên sản phẩm"
                      />
                    </div>
                    {errors.name && (
                      <div className="flex items-center mt-1 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Danh mục *
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="category"
                        value={formData.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.category ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Chọn danh mục</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.category && (
                      <div className="flex items-center mt-1 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.category}
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                      Giá bán (VNĐ) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="price"
                        type="number"
                        min="0"
                        step="1000"
                        value={formData.price}
                        onChange={(e) => handleChange('price', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.price ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="0"
                      />
                    </div>
                    {errors.price && (
                      <div className="flex items-center mt-1 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.price}
                      </div>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                      Số lượng trong kho *
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="quantity"
                        type="number"
                        min="0"
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.quantity ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="0"
                      />
                    </div>
                    {errors.quantity && (
                      <div className="flex items-center mt-1 text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.quantity}
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Trạng thái sản phẩm
                  </label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'active', label: 'Hoạt động', color: 'green' },
                      { value: 'inactive', label: 'Tạm ngưng', color: 'yellow' },
                      { value: 'discontinued', label: 'Ngừng bán', color: 'red' }
                    ].map((status) => (
                      <label key={status.value} className="flex items-center">
                        <input
                          type="radio"
                          value={status.value}
                          checked={formData.status === status.value}
                          onChange={(e) => handleChange('status', e.target.value)}
                          className={`mr-2 text-${status.color}-600 focus:ring-${status.color}-500`}
                        />
                        <span className={`text-sm font-medium text-${status.color}-700`}>
                          {status.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả sản phẩm *
                  </label>
                  <textarea
                    id="description"
                    rows={6}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Nhập mô tả chi tiết về sản phẩm, tính năng, ưu điểm..."
                  />
                  <div className="flex items-center justify-between mt-2">
                    {errors.description && (
                      <div className="flex items-center text-sm text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.description}
                      </div>
                    )}
                    <span className="text-sm text-gray-500">
                      {formData.description.length} ký tự
                    </span>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Thông tin bổ sung</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        SKU (Mã sản phẩm)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tự động tạo nếu để trống"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Trọng lượng (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kích thước (L x W x H cm)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0 x 0 x 0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Xuất xứ
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Việt Nam"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Media Tab */}
            {activeTab === 'media' && (
              <div className="space-y-6">
                {/* Image URL */}
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                    URL hình ảnh sản phẩm *
                  </label>
                  <div className="relative">
                    <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="image"
                      type="url"
                      value={formData.image}
                      onChange={(e) => handleChange('image', e.target.value)}
                      className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.image ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="https://example.com/image.jpg"
                    />
                    <button
                      type="button"
                      onClick={handleImageUrlTest}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.image && (
                    <div className="flex items-center mt-1 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.image}
                    </div>
                  )}
                </div>

                {/* Image Preview */}
                {(showPreview || imagePreview) && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Xem trước hình ảnh</h4>
                    <div className="flex justify-center">
                      <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={() => setImagePreview('')}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <div className="text-center">
                              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Không thể tải hình ảnh</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Upload Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Upload className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-blue-900">Hướng dẫn tải ảnh</h4>
                      <ul className="mt-2 text-sm text-blue-700 space-y-1">
                        <li>• Định dạng được hỗ trợ: JPG, PNG, WEBP</li>
                        <li>• Kích thước khuyến nghị: 800x600px trở lên</li>
                        <li>• Dung lượng tối đa: 5MB</li>
                        <li>• Sử dụng URL từ các dịch vụ lưu trữ ảnh như Imgur, Cloudinary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? 'Đang lưu...' : 'Lưu sản phẩm'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;