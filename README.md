# mstore - Premium E-Commerce Platform

## 🛍️ Overview

mstore is a modern, production-ready e-commerce platform designed for premium tech and lifestyle products. Built with Next.js, React, and Tailwind CSS, it features a luxurious minimalist design inspired by Apple, Tesla, and Nothing.

## ✨ Features

### Core Features
- 🏠 **Homepage** with hero section, featured products, testimonials, and newsletter signup
- 🛒 **Product Catalog** with advanced filtering, sorting, and search
- 📄 **Product Details** with high-quality images, specs, reviews, and related products
- 🛍️ **Shopping Cart** with persistent storage via localStorage
- ❤️ **Wishlist** functionality
- 💳 **Secure Checkout** with multi-step form
- 📦 **Order Tracking** page
- 👤 **User Account** management
- 📧 **Newsletter** subscription
- 💬 **Customer Testimonials**
- 🏷️ **Trust Badges** (Free Shipping, Secure Checkout, etc.)

### Additional Pages
- About Us
- Contact Us
- FAQ
- Shipping Policy
- Returns Policy
- Privacy Policy
- Terms & Conditions

### Design Features
- Minimalist black and white color scheme with blue accent (#3B82F6)
- Glassmorphism effects and smooth animations
- Fully responsive (mobile, tablet, desktop)
- SEO optimized with metadata and structured data
- Fast loading with image optimization and lazy loading
- Accessibility-friendly

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Muaaz008/mstore.git
cd mstore
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
mstore/
├── public/              # Static files (images, icons)
├── src/
│   ├── components/      # React components
│   ├── context/         # State management (Cart context)
│   ├── data/           # Product data
│   ├── pages/          # Next.js pages
│   └── styles/         # Global CSS
├── package.json        # Dependencies
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # Documentation
```

## 🎨 Customization

### Colors
Modify `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: '#3B82F6',  // Blue accent
  dark: '#0F172A',     // Dark background
  light: '#F8FAFC',    // Light background
}
```

### Products
Edit `src/data/products.js` to add or modify products

### Content
Edit individual page files in `src/pages/` to customize content

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Click "Deploy"

## 💰 Payment Integration

The checkout page is ready for payment gateway integration. Supported options:
- Stripe
- PayPal
- Apple Pay
- Google Pay

## 📊 SEO

- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Structured data ready
- ✅ Clean URLs
- ✅ Mobile-friendly

## 🔒 Security

- SSL/TLS ready
- Secure form validation
- Environment variables for sensitive data
- CSRF protection ready

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

MIT License - feel free to use this for your projects

## 🤝 Support

For support, email support@mstore.com or create an issue on GitHub.

## 🎯 Roadmap

- [ ] Admin panel
- [ ] Real payment processing
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Email notifications
- [ ] Analytics dashboard
- [ ] Inventory management
- [ ] Multi-currency support
- [ ] Dark mode
- [ ] AI product recommendations

---

**Made with ❤️ for premium e-commerce experiences**
