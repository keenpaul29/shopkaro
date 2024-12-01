# ShopKaro E-Commerce Application

A full-stack e-commerce platform built with React.js and Node.js, featuring a modern UI, secure payment processing, and comprehensive product management.

[ShopKaro Demo](https://shopkaro-six.vercel.app/)

## Features

### Customer Features
- 🛍️ Browse products by categories (Men, Women, Kids)
- 🔍 Search and filter products
- 🛒 Shopping cart management
- 👤 User authentication and profile management
- 📦 Order tracking
- 💳 Multiple payment options:
  - Cash on Delivery
  - Stripe
  - Razorpay

### Admin Features
- 📊 Product management
- 📋 Order management
- 📸 Image upload functionality
- 📈 Basic analytics

## Tech Stack

### Frontend
- React.js
- Context API for state management
- Tailwind CSS for styling
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer for file uploads

### Payment Integration
- Stripe
- Razorpay

## Installation

1. Clone the repository
```bash
git clone https://github.com/keenpaul29/shopkaro.git
cd shopkaro
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
```bash
# Backend .env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret

# Frontend .env
VITE_BACKEND_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. Run the application
```bash
# Run backend (from backend directory)
npm start

# Run frontend (from frontend directory)
npm run dev
```

## Project Structure
```
shopkaro/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Context providers
│   │   └── assets/        # Static assets
│   └── package.json
│
├── backend/                # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── package.json
│
└── README.md
```

## API Documentation

### Authentication Endpoints
- POST `/api/user/register` - Register new user
- POST `/api/user/login` - User login

### Product Endpoints
- GET `/api/product/list` - Get all products
- POST `/api/product/add` - Add new product (Admin)
- POST `/api/product/remove` - Remove product (Admin)

### Order Endpoints
- POST `/api/order/place` - Place new order
- GET `/api/order/userorders` - Get user orders
- POST `/api/order/status` - Update order status (Admin)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Puspal - [@paul_puspal](https://twitter.com/paul_puspal)
Project Link: [https://github.com/keenpaul29/shopkaro](https://github.com/keenpaul/shopkaro)

