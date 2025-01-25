# E-Commerce App

## Overview
An E-Commerce application that allows users to browse products, add them to a shopping cart, and complete purchases. The app includes features for user authentication, product management, and order tracking.

## Features
1. **User Authentication**:
   - Registration and login system.
   - Password encryption for secure accounts.

2. **Product Management**:
   - Product listing with details (name, description, price, image, category).
   - Search and filter functionality.

3. **Shopping Cart**:
   - Add, update, or remove items from the cart.
   - View total price dynamically.

4. **Checkout and Payment**:
   - Order summary before purchase.
   - Integration with payment gateways (e.g., Stripe, PayPal).

5. **Admin Dashboard**:
   - Manage products (add, update, delete).
   - View and manage orders.
   - View user activity.

6. **Order Management**:
   - Track order status (pending, shipped, delivered).
   - View order history.

## Tech Stack
- **Frontend**:
  - React.js 
  - HTML and CSS

- **Backend**:
  - Node.js with Express.js
  - RESTful API development

- **Database**:
  - MongoDB

- **Authentication**:
  - JWT (JSON Web Tokens) for secure login sessions

- **Payment Gateway**:
  - Stripe or PayPal integration

- **Deployment**:
  - Hosting:Vercel
  - Version control: Git/GitHub


# Milestone 2 Progress

Pushed the code to a GitHub repository (which is created in the first milestone).

The repository is publicly accessible and includes the following:

1. **Separate folders for frontend and backend**

   - `Frontend/` for the frontend code.
   - `Backend/` for the backend code.

2. **Creating a Login Page in the frontend:**

   - Created a file login.jsx.

3. **Installation of files in Backend:**

   - Setting up backend folder.

   - installed the Express framework, Mongoose for MongoDB, and Nodemon.

   - created a index.js file.


# Milestone-3

## Overview

In Milestone-3, the following tasks were completed to enhance both the backend and frontend functionalities of the application:

### Backend

The backend structure was expanded and organized with the following directories and files:

1. **Controls**

2. **Config**

3. **Models**

4. **Node\_modules**

5. **Routes**

### Frontend

The frontend development included the creation of a **Login Page** with the following features:

1. **Fields**:

   - **Name**
   - **Email**
   - **Password**

2. **Functionality**:

   - Input fields are controlled components, ensuring the state is managed properly.
   - A "Login" button to submit the form data.
   - Password visibility toggle functionality for better user experience.

3. **Styling**:

   - Custom CSS file (`login.css`) is used to style the login page for an intuitive and responsive design.


# Milestone-4

## Backend Folder

### Features Implemented:

1. **Setting up Multer for File Uploads**

   - Configured Multer for handling file uploads efficiently.

2. **Created the Following Files:**

   - `db.js`
   - `multer.js`
   - `UserControllers.js`
   - `UserModels.js`
   - `Router.js`

3. **Regex Validation for User Data:**

   - Implemented validation logic to verify user data:
     - **Name:** Ensures it meets specified character requirements.
     - **Email:** Validates format for correct email structure.
     - **Password:** Ensures strong passwords by matching predefined regex criteria.

---

## Frontend Folder

### Features Implemented:

1. **Created ********************************`signup.jsx`********************************:**

2. **Added Routes in ********************************`app.jsx`********************************:**

   - Configured routes to include the new Signup page.
   - Ensured seamless navigation between pages.

---

# Milestone-5

# Sign Up Page

In milestone 5 I created Sign Up page with an image upload feature. It allows users to input their name, email, and password, and also upload an image. The uploaded image is displayed as a small preview on the form.

---

## Features

- **Input Fields**: Fields for name, email, and password.
- **Image Upload**: Users can upload an image from their device.
- **Image Preview**: Displays a small thumbnail of the uploaded image.
- **Responsive Design**: The form is styled with CSS for a clean and user-friendly layout.

---




---

# Milestone-6

---

# User Signup with Password Hashing Using bcrypt

In this milestone we securely hash a user's password during the signup process and save the hashed password in the database instead of storing it in plain text. It uses bcrypt,
a widely-used library for password hashing.


**Installation of files in Backend:**
- bcryptjs
- jsonwebtoken


---


# Milestone 7: Login Endpoint

---

## Main Concepts

### 1. **Create Login Endpoint**
   - Accept user credentials (email and password).
   - Retrieve the corresponding user from the database using the provided credentials.

### 2. **Validate Password**
   - Hash the entered password using `bcrypt`.
   - Compare the hashed password with the one stored in the database for authentication.




## Milestone-8


# Card Component and Homepage Layout with Normal CSS

## Overview
In this milestone we will create a reusable *Card Component* to showcase products and display them on a *Homepage* using normal CSS. It focuses on building a clean, visually appealing, and responsive layout without relying on CSS frameworks.

---

## Features

### 1. *Card Component*
- Displays individual product details such as:
  - Product name
  - Product image
  - Product price
- Designed as a reusable component.
- Styled using normal CSS for simplicity and flexibility.

### 2. *Homepage Layout*
- Organizes multiple product cards in a grid layout.
- Fully responsive design using CSS Grid.
- Clean and structured presentation for better user experience.

---