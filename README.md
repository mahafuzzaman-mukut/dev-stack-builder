# Dev Stack Builder 🚀

Dev Stack Builder is a responsive React website that helps developers explore useful web technologies and assemble a personalized toolkit. Browse the collection, filter by category, search by name, and add or remove tools from your stack.

## ✨ Features

- Browse 12 technology cards loaded from a separate JSON file, with category filters and search.
- Build a personal stack with duplicate prevention, individual removal, and a Remove All action.
- Responsive layout with a mobile navigation menu, loading state, and toast notifications for stack actions.

## 🧰 Technologies Used

- React.js and JavaScript (ES6+)
- Vite
- CSS3 (responsive layout, custom properties, gradients, animations)
- JSON data
- React-Toastify
- Lucide React icons

## 🏁 Run Locally

Make sure Node.js (LTS) is installed. In the project directory, run:

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal. To verify a production build:

```bash
npm run build
npm run preview
```

## 📦 Project Structure

```text
dev-stack-builder/
├── public/
│   └── data/
│       └── technologies.json
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like markup inside JavaScript. It makes React interfaces easier to read and build.

### 2. What is the difference between props and state?
Props are values a parent passes to a component. State is data a component manages and can update over time.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` stores changing data in a component. I used it for the technology list, selected stack, loading state, search text, category filter, and mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. I used it to fetch the JSON file when the page loads and update the loading state when the request finishes.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique key helps React identify each item when a list changes, so it can update the right elements efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In this project, the stack shows an empty-state message when no technologies have been selected, and shows stack items after they are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. To send an action back, the parent can pass a callback function as a prop and the child can call it. In this project, the technology cards and stack are currently rendered within the main `App` component.

## 🌐 Deployment

You can deploy this Vite project to Vercel, Netlify, or Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory.

## Project Overview
Dev Stack Builder helps developers explore web technologies and organize a technology stack.

## Technologies Used
React, Vite, JavaScript, CSS, and JSON.

## Features
- Browse technology cards
- Organize a personal stack
- Responsive user interface

## Data Source
Technology information is stored in a JSON data file.

## User Interface
The interface is designed to support desktop and mobile screen sizes.

## Project Status
The project is maintained in Git and hosted in a GitHub repository.
