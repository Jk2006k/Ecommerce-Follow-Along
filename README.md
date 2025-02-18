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





# Milestone 9: Create the Form for Products with Multiple Image Inputs
---

## Description


This milestone involves creating a form that allows users to submit product details, including multiple product images. The form will be user-friendly and capable of handling various types of product data and images efficiently.

## Features

- **Product Name**: Field to input the product's name.

- **Product Description**: Field for entering a description of the product.

- **Product Price**: Field for entering the product’s price.

- **Product Category**: Dropdown or selector to categorize the product.

- **Product Images**: Field for uploading multiple images of the product.

---


# Milestone-10


---

## Overview  
This milestone involves creating a product schema, building a POST endpoint to manage product data, and implementing navigation from the signup page to the login page using Axios.

---

## Features  

### 1. Product Schema  
- Designed the product data structure using **Mongoose**.  
- Key fields include:  
  - `name`: String (required)  
  - `description`: String (required)
  - `price`: Number (required)  
  - `stock`: Number (required)  
  - `image URL`: String (required)

### 2. Endpoint Creation  
- Developed a **POST endpoint** to handle product data:  
  - Receives product details via the request body.  
  - Validates incoming data.  
  - Saves validated product data to the MongoDB database.  

### 3. Axios Integration  
- Installed **Axios** for making HTTP requests.  
- Created a POST request to navigate from the signup page to the login page after successful form submission.  

### 4. Middleware Integration  
- Used **Body-Parser** in `index.js` to parse incoming request bodies.  

---

## Project Structure  

### Key Files:  
- **`formcontrollers.js`**  

- **`formmodels.js`**    

- **`formroutes.js`**  

---

## Dependencies  
- **Mongoose** 
- **Axios** 
- **Body-Parser** 

---


# Milestone 11: Fetch and Display Product Data

## Overview
This milestone involves creating an API endpoint to fetch product data from MongoDB, retrieving the data in the React frontend, and displaying it dynamically using a product card component.

## Features Implemented
- **Backend:** API endpoint to retrieve product data.
- **Frontend:** Fetching data from the backend and dynamically displaying it.
- **Component:** ProductCard component to render each product.

---


# Milestone 12:Display the data in cards

---

The(MongoDB, Express, React, Node.js) application that allows users to fetch and display product data dynamically based on their email.

## Features
- Backend API to fetch products based on user email
- Frontend function to fetch data and display it using a Product Card component
- Uses MongoDB for data storage



# Milestone-13: Updating Existing Data in MongoDB & Auto-filling Forms for Editing

## Introduction
This document provides guidelines on how to write an endpoint to update existing data in MongoDB and how to auto-fill a form with previous data to allow editing.if the edit button in my product section is clicked it navigate to the form where all the data's already entered will be shown and if you save the changes it will get updated to the homepage as well as to the my product page.



## Conclusion
- The Express.js `PUT` endpoint allows updating MongoDB data.
- The React form auto-fills with existing data when a product is edited.
- Users can modify fields and submit the updated details back to MongoDB.

# Milestone-14 : Delete the product

## Introduction 

You can see a delete button in myproduct page if i click on that button the  alert will be shown as do you want to delete aure about deletion if you press ok the product will get removed from both homepage as well as the my product page .

## Conclution

- Users can delete their own product  



# Milestone 15 - Navbar Component Development 



### 1. Created a New Navbar Component

- Developed a separate `Nav` component to handle site navigation.
- Include links to all essential pages:
  - **Home**
  - **My Products**
  - **Add Product**
  - **Cart**

### 2.  Responsive Design

- Implement **CSS media queries** to adjust styling for various screen sizes.
- Use **flexbox or grid** for proper alignment and spacing.

### 3. Integration with React Router

- Use `react-router-dom` to enable navigation without page refresh.
- Apply `NavLink` to highlight the active page dynamically.

## Expected Outcome 

- A fully responsive and functional Navbar component.
- Easy navigation across all application pages.



# Milestone 16: Create a New Page to Display Each Product Data


### Introduction 

created a page were users can open and veiw the details of an product by clicking anywhere in the card it that Product view page their will be a add to cart button and a quantity which contain's plus and minus buttons the min value is 1 and the maximum value can reach till the number of stock's present for that particular product.


## Conclution

- Users can veiw the product details in good manner
- Quantity increase and decrease and can use add to cart button.



# Milestone 17 - Cart API Creation

## Overview

In this milestone I have done implementing a simple cart functionality where users can add products to their cart . The cart stores only the product's name, price, quantity, and image.

## Features

- Users can add products to their cart.
- If a product already exists in the cart, its quantity will be updated.
- The cart stores only `name`, `price`, `quantity`, and `image` for each item.

##


# Milestone 18 - Cart API

## Overview

This milestone I have done implementing a backend API for handling the cart page. The API includes an endpoint to retrieve products inside a user's cart.

## Features

- Retrieve all cart items for a specific user.

##


# Milestone 19-Cart page Creation

- created a cart frontend page which display's the products
- For each product added an option to increase and decrease quantity using + and - buttons.
- Created an Backend endpoint for increase and decrease quantity
- Added remove button which deletes the product from cart


---

# Milestone 20-Profile Page

- Created a profile page which display's your image,name,email and a add address button.
- created backend endpoint for adding the address and also removing .
- User can add multiple address which will be visible in profile page. 

---

# Milestone 21-Profile Page Frontend

- created an address form frontend page
- Created an state that will store input address
- when we click on add address in profile it will navigate to this form page.
- Remove button by which we can remove the unwanted address.
