// Validation middleware
const validateProduct = (req, res, next) => {
  const { name, price, category } = req.body;
  const errors = [];
  
  if (!name || name.trim().length === 0) {
    errors.push('Tên sản phẩm là bắt buộc');
  }
  
  if (!price || isNaN(price) || parseFloat(price) <= 0) {
    errors.push('Giá sản phẩm phải là số dương');
  }
  
  if (!category || category.trim().length === 0) {
    errors.push('Danh mục là bắt buộc');
  }
  
  if (req.body.quantity !== undefined && (isNaN(req.body.quantity) || parseInt(req.body.quantity) < 0)) {
    errors.push('Số lượng phải là số không âm');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }
  
  next();
};

module.exports = { validateProduct };