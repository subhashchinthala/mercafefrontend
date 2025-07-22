# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# ☕ MERN Cafe Frontend

A modern and responsive web application built using **React + Vite** to manage a cafe’s ordering system. This frontend supports **authentication**, **product management**, **cart functionality**, **order tracking**, and a complete **admin dashboard**.

🌐 **Live Demo**: [https://mercafefrontend-265m.vercel.app/](https://mercafefrontend-265m.vercel.app/)

---

## 🚀 Features

### 🔐 User Authentication
- Register and login
- JWT-based secure authentication
- Role-based access (Admin/User)

### 🛒 Product & Cart Management
- Browse product catalog
- Admin can add, edit, delete products with image upload
- Add/remove items from cart
- Real-time quantity & price updates

### 📦 Order System
- Place and track orders
- View order history
- Order status management

### 🧑‍💼 Admin Panel
- User management (CRUD + Role assignment)
- Product and order control
- Pagination and search

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **State Management**: Context API
- **Routing**: React Router
- **HTTP Client**: Axios
- **Styling**: Modern CSS with responsive design
- **Auth**: JWT token system

---

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subhashchinthala/mercafefrontend.git
   cd mercafefrontend
2 . Install dependencies
       npm install
3 .Configure environment variables
      Create a .env file in the root with:
        VITE_API_URL=https://your-backend-url.com
4.     Run development server
       npm run dev
