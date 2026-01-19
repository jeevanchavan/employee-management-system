# Employee Management System (React.js)

I built this project with full understanding to learn React fundamentals,
authentication flow, and state management using Context API and localStorage.

---

## 🚀 Features

- Login system (Employee / Admin)
- Role-based dashboard
  - Employee Dashboard
  - Admin Dashboard
- Data stored in localStorage
- Session persists after page refresh
- Clean and simple UI

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6)
- HTML
- CSS
- React Context API
- localStorage

---

## 📂 Project Flow (Start to End)

### 1️⃣ App Initialization
- React app created using `create-react-app`
- Project structure divided into:
  - components
  - context
  - dashboard
  - auth

---

### 2️⃣ Authentication Flow

- User logs in using email and password
- User role is checked (Admin / Employee)
- Login data is saved in `localStorage`
- Context API stores logged-in user state

---

### 3️⃣ Context API Usage

- `AuthContext` manages:
  - logged-in user
  - login function
  - logout function
- This avoids prop drilling
- Makes state available to all components

---

### 4️⃣ Dashboard Rendering

- If role = **Admin** → Admin Dashboard loads
- If role = **Employee** → Employee Dashboard loads
- Conditional rendering based on user role

---

### 5️⃣ Page Refresh Handling

- On app load:
  - Data is fetched from `localStorage`
  - User stays logged in
- Dashboard does not crash on refresh

---

### 6️⃣ Logout Flow

- Clears data from `localStorage`
- Context state resets
- User is redirected to login page

---

## 📸 Screenshots

---

## 📚 What I Learned

- React component structure
- useState and useEffect
- Context API
- localStorage handling
- Conditional rendering
- Real-world login flow

---

## 🔗 Reference

YouTube Tutorial:
https://youtu.be/TTx7Y3a7EmA

---

## 👤 Author

- Name: Jeevan Chavan
- GitHub: (add your GitHub link here)
