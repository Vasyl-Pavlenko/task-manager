# Task Manager App 

This is a simple Task Manager application built using Next.js. The application allows users to create new job positions, each represented by a draggable card with editable fields. The project adheres to best practices in web development, utilizing Next.js for development, Tailwind CSS/SCSS for styling, and incorporating drag-and-drop functionality.

## Getting Started

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Vasyl-Pavlenko/task-manager.git
cd task-manager
npm install
npm run dev
```

2. The application will be accessible at http://localhost:3000 in your browser.

## Features
- Create New Position:
  - Clicking the "Create New Position" button adds a new card to the list above it.
  - Each card represents a job position and is draggable using the Drag & Drop method.

- Tab Navigation:
  - The top tabs of the application switch between different views.
  - The "Positions" tab is designed according to the provided layout.

- Position Card:
  - The "Name" block includes an input field to enter the name of the job position.
  - The "Responsibilities" block contains a list of checkboxes for editing duties.


## Technologies Used
## Frontend:
- Next.js: The application leverages Next.js (v14.0.3), a powerful React framework, providing server-side rendering and other performance benefits.
- React: The UI is built using React (v18) and ReactDOM (v18), offering a declarative and efficient way to create user interfaces.
- React Redux: The state management is handled by React Redux (v8.1.3), a predictable state container for JavaScript applications, using the @reduxjs/toolkit.
- Next Redux Wrapper: Next Redux Wrapper (v8.1.0) is employed for integrating Redux with Next.js, simplifying the process of setting up Redux in the application.
- Formik: Formik (v2.4.5) is utilized for form management, providing a simple and consistent way to handle forms in React applications.
- Yup: Yup (v1.3.2) is used for form validation, ensuring that the entered data conforms to specified rules.
- React Icons: The application utilizes React Icons (v4.12.0) for easily incorporating SVG icons into the UI.
- React Loader Spinner: React Loader Spinner (v5.4.5) is employed for displaying loading spinners, enhancing the user experience during data fetching.
- React Toastify: React Toastify (v9.1.3) is used for displaying notifications (toasts) in the application.
- UUID: UUID (v9.0.1) is employed for generating universally unique identifiers.

## Styling:
- Sass: Sass (v1.69.5) is used for styling the application, providing a more structured and feature-rich syntax compared to traditional CSS.
- Tailwind CSS: Tailwind CSS is not explicitly mentioned in the dependencies, but it's assumed to be part of the project for utility-first styling.

## State Persistence:
- Redux Persist: Redux Persist (v6.0.0) is integrated to persist and rehydrate the Redux store, ensuring that state data is retained across page reloads.

## Type Definitions:
- TypeScript: TypeScript (v5) is included in the development dependencies, providing static typing and improved code quality.

## Code Organization
- The codebase follows best practices in web development, ensuring cleanliness, organization, and thorough commenting for better readability and maintainability.

## Contributing
- Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request. Please ensure your code follows best practices and includes appropriate tests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
