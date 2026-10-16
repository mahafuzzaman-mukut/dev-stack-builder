# Dev Stack Builder

**Live Website:** https://dev-stack-builder-lake-seven.vercel.app/

**GitHub Repository:** https://github.com/mahafuzzaman-mukut/dev-stack-builder

## Project Description

Dev Stack Builder is a responsive web application that helps developers explore popular web technologies and build their own personalized technology stack. Users can browse technologies, search by name, filter by category, and manage their selected stack.

## Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- JSON
- React-Toastify
- Lucide React
- Git and GitHub
- Vercel

## Key Features

1. **Explore Technologies:** Browse technology cards containing names, descriptions, categories, ratings, difficulty levels, and badges.
2. **Search and Filter:** Search technologies by name and filter them by category.
3. **Personalized Stack:** Add technologies to a custom stack, prevent duplicate selections, remove individual items, or clear the entire stack.
4. **Responsive Design:** Use the website on desktop, tablet, and mobile devices.
5. **Notifications and Loading State:** Get toast notifications for stack actions and see a loading indicator while technology data is fetched.
6. **JSON Data Source:** Load technology information from a separate JSON file.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript. It makes React components easier to read and helps describe the user interface.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State stores data managed by a component that can change over time. When state changes, React can update the user interface.

### 3. What does the useState hook do, and where did you use it in this project?

The `useState` hook lets functional components store and update state. In this project, it manages the technology data, selected stack, loading status, search query, active category, and mobile menu visibility.

### 4. What does the useEffect hook do, and why did you need it to load JSON data?

The `useEffect` hook runs side effects in React components. It is used in this project to fetch technology data from `public/data/technologies.json` when the component loads and to manage the loading state.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify which list items have changed, been added, or been removed. This allows React to update lists efficiently and correctly.

### 6. What is conditional rendering? Give an example from this project.

Conditional rendering means displaying content based on a condition. In this project, an empty-state message is displayed when the user has not added any technology to the stack. A loading indicator is also shown while the data is being fetched.

### 7. How do you pass data from a parent component to a child component, and how can a child communicate back to the parent?

A parent component passes data to a child through props. To communicate back, the parent can pass a callback function as a prop, and the child can call that function to notify the parent about an action.

## Project Setup

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/mahafuzzaman-mukut/dev-stack-builder.git
   ```

2. Open the project folder:

   ```bash
   cd dev-stack-builder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build the project for production:

   ```bash
   npm run build
   ```

## Author

**Mukut**

GitHub: https://github.com/mahafuzzaman-mukut

## Live Demo

Visit the deployed application: https://dev-stack-builder-lake-seven.vercel.app/