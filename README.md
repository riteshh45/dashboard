# Responsive Portfolio Dashboard

A responsive and modern portfolio dashboard built using **React.js**, **Redux Toolkit**, and **Tailwind CSS**.  
It includes a collapsible sidebar, theme toggle, and multiple mock content sections.

---

## 🚀 Features

- 📱 Fully responsive layout
- 🌓 Light/Dark mode toggle
- 📂 Collapsible sidebar using Redux state
- 🔄 Page routing with React Router
- ♻️ Reusable components (Button, Card)
- 🧠 State management using Redux Toolkit

---

## 🛠️ Technologies Used

- **React.js**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**

---

## 📁 Folder Structure

src/
├── app/ # Redux store setup
│ └── store.js
├── components/ # Reusable components
│ ├── Button.jsx
│ └── Card.jsx
├── features/ # Redux slices
│ └── ui/
│ └── uiSlice.js
├── layout/ # Sidebar and Navbar components
│ ├── Sidebar.jsx
│ └── Navbar.jsx
├── pages/ # Page views (Overview, Projects, Contact)
│ ├── Overview.jsx
│ ├── Projects.jsx
│ └── Contact.jsx
├── App.js # Main layout
├── index.js # Entry point with Redux + Router
└── index.css # Tailwind base styles


---

## 🧑‍💻 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio-dashboard.git
cd portfolio-dashboard
```

## 2. Install dependencies

npx create-react-app dashboard
cd dashboard

npm install -D tailwindcss@3
npx tailwindcss init

npm install @reduxjs/toolkit react-redux react-router-dom clsx

npm run start

📸 Screenshots
![Screenshot 2025-05-28 115232](https://github.com/user-attachments/assets/67378441-8cf1-422e-97a5-45d5a77642b7)


