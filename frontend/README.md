# Frontend React Assignment – Authentication System

This project implements a complete **user authentication system** in React, including:

- Client-side validation  
- Server-side validation  
- User registration  
- Saving data into a database  
- Login authentication  
- Token generation  
- Protected dashboard page  
- Logout functionality  

This README outlines all features and guides you on how to test them.

---

## 🚀 Features Implemented

### **1. Client-Side Validation (Registration Form)**
The registration form validates user input before sending it to the backend.  
Validation includes:

- Name validation  
- Email format check  
- Password length & match check  
- Required field checks  

---

### **2. Server-Side Validation (Registration Form)**
After receiving data, the server validates:

- Required fields  
- Unique email  
- Secure password format  

If validation fails → server returns errors.

---

### **3. Saving Registration Data Into the Database**
Once validated:

- User data is saved into the database  
- Server returns a success message  
- User is redirected to the **Login page**  

---

### **4. Login Page (UI + Logic)**
User logs in using the **same email and password** saved during registration.

---

### **5. Client-Side Validation (Login Page)**

- Email format validation  
- Empty field validation  

---

### **6. Server-Side Validation (Login Route)**

Backend checks:

- Whether the email exists  
- Whether the password matches the stored password  

If incorrect:

> **"Incorrect email and password combination."**

If correct:

1. A **token is generated**  
2. User data is fetched from the database  
3. Server sends both token + user data  

Frontend:

- Stores token in **LocalStorage**  
- Redirects user to the **Dashboard page**

---

## 📊 Dashboard Page Functionalities

### ✔ **1. Token Verification**
On page load:

- If token exists → show dashboard with user data  
- If token is missing → redirect to login  

---

### ✔ **2. Protected Route Behavior**
If someone copies the dashboard URL and opens it in a new browser:

- No token exists there → automatic redirect to login  
- Prevents unauthorized access  

---

### ✔ **3. Display User Data**
User details received from the server are displayed on the dashboard.

---

## 🔐 Logout Functionality

The Dashboard includes a **Logout** button.

On click:

1. Token is removed from LocalStorage  
2. User is redirected back to the Login page  

This ensures the dashboard cannot be accessed without proper login.

---

## 🧪 How to Test the Complete Flow

### **1. Register a new user**
- Fill the registration form  
- Submit  
- Confirm the data is saved in the database  

### **2. Login**
- Enter the registered email + password  
- Dashboard should load successfully  

### **3. Test Route Protection**
Copy dashboard URL → open in:

- Incognito mode  
- Another browser  

It must redirect to login (no token exists).

### **4. Test Logout**
- Click logout  
- Token is deleted  
- Refresh dashboard: It should redirect to login  
- 

## ✅ Status

This project now includes a fully functional **authentication system** with both frontend and backend validation, token handling, and protected routing.

