# 👩‍💻 React Profile Card Project

This is a simple React project that displays multiple professional profile cards using props. The UI is designed with a modern dark theme.

---

## 🚀 Features

* Reusable **ProfileCard component**
* Props used to pass dynamic data
* Props Destructuring for cleaner code
* Conditional rendering (Available / Not Available)
* Dark theme UI
* Hover animations
* Online/Offline status indicator

---

## 🛠️ Technologies Used

* React JS
* HTML
* CSS

---

## 📸 Project Overview

Displays 10 team members with:

* Name
* Age
* Role
* Bio
* Status
* Profile Image

---

## 📂 Project Structure

src/
├── components/
│    ├── ProfileCard.jsx
│    └── ProfileCard.css
├── App.jsx
├── App.css
└── main.jsx

---

## 💡 Concepts Used

* Props
* Props Destructuring
* Conditional Rendering
* Component Reusability

---

## 🧠 Props Destructuring

Props destructuring is used to directly extract values from props instead of using `props.name`, `props.age`, etc.

### Example:

```jsx
function ProfileCard({ name, age, src, ispresent }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

This makes the code cleaner, shorter, and easier to read.

---

## ▶️ How to Run

1. Clone the repository
2. Install dependencies
   npm install
3. Run the project
   npm run dev

---

## 👩‍🎓 Author

**Samruddhi Shetty**

---

✨ This project is built to understand React basics and component-based UI design.
