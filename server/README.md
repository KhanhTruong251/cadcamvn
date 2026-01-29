# CADCAM API Server

Mock API server cho ứng dụng CADCAM Product Management.

## Cài đặt và chạy

### 1. Cài đặt dependencies:
```bash
cd server
npm install
```

### 2. Chạy server:

**Development mode (với nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server sẽ chạy trên: `http://localhost:3001`

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Lấy danh sách sản phẩm (có pagination và filter) |
| GET | `/api/products/:id` | Lấy chi tiết sản phẩm |
| POST | `/api/products` | Tạo sản phẩm mới |
| PUT | `/api/products/:id` | Cập nhật sản phẩm |
| DELETE | `/api/products/:id` | Xóa sản phẩm |
| GET | `/api/products/categories` | Lấy danh sách danh mục |
| GET | `/api/products/search` | Tìm kiếm sản phẩm |

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Đăng nhập |
| POST | `/api/auth/logout` | Đăng xuất |

### Other

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/api/stats` | Thống kê |
| POST | `/api/upload` | Upload file |

## Query Parameters

### GET /api/products
- `page` - Trang (mặc định: 1)
- `limit` - Số lượng/trang (mặc định: 12)
- `search` - Tìm kiếm theo tên/mô tả
- `category` - Lọc theo danh mục
- `minPrice` - Giá tối thiểu
- `maxPrice` - Giá tối đa

**Ví dụ:**
```
GET /api/products?page=1&limit=10&search=CNC&category=Máy CNC
```

### GET /api/products/search
- `q` - Từ khóa tìm kiếm
- `category` - Danh mục
- `minPrice` - Giá tối thiểu
- `maxPrice` - Giá tối đa

## Request/Response Format

### Success Response:
```json
{
  "success": true,
  "message": "Success",
  "data": { ... }
}
```

### Error Response:
```json
{
  "success": false,
  "message": "Error message",
  "errors": ["Error 1", "Error 2"]
}
```

## Product Schema

```json
{
  "id": "string",
  "name": "string",
  "price": "number",
  "description": "string",
  "image": "string (URL)",
  "quantity": "number",
  "category": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

## Authentication

API sử dụng Bearer Token authentication (mock):

```
Authorization: Bearer <token>
```

Để đăng nhập và lấy token:

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@cadcam.com", "password": "password"}'
```

## Sample Data

Server được cung cấp sẵn 12 sản phẩm mẫu trong file `data/products.json` bao gồm:
- Máy CNC
- Phần mềm CAD/CAM
- Dao cắt
- Thiết bị đo
- Phụ kiện

## CORS

Server được cấu hình CORS cho:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

## Error Handling

Server có middleware xử lý lỗi và validation đầy đủ:
- Validation input
- Error logging
- Graceful error responses

## File Structure

```
server/
├── data/
│   └── products.json          # Dữ liệu sản phẩm
├── routes/
│   └── products.js           # Routes cho products
├── middleware/
│   ├── auth.js              # Authentication middleware
│   └── validation.js        # Validation middleware
├── server.js                # Main server file
├── package.json
└── README.md
```

## Development Notes

- Dữ liệu được lưu trong file JSON (không dùng database)
- Authentication là mock (accept bất kỳ email/password nào)
- File upload trả về placeholder URL
- Có logging requests và errors
- Hỗ trợ hot reload với nodemon