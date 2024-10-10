# Personal Finance MERN Stack Application

This is a personal finance management web application developed using the MERN stack. The application helps users track their expenses and income with features like user authentication, adding financial records, and viewing financial summaries. The backend uses Express and MongoDB Atlas, while the frontend is developed using React with TypeScript and Clerk for user authentication.

## Table of Contents
1. [Functionality](#functionality)
2. [Technologies Used](#technologies-used)
3. [Project Setup](#project-setup)
4. [Additional Information](#additional-information)

## Functionality

The application allows users to:
- Sign up and log in using Clerk.
- Add/Delete financial records (expenses and income) using a form.
- View a list of all financial records with options to edit.
- Use a dashboard interface for financial management.

### Key Features:
- **User Authentication**: Managed via Clerk, ensuring secure login and registration.
- **Financial Record Management**: Users can add, delete, edit, and track their income and expenses.
- **React Router**: The app includes multiple pages like Authentication and Dashboard.
- **Financial Data Display**: Financial records are shown in a table using the React Table library.

## Technologies Used

### Frontend (Client):
- **React** with **TypeScript** for building the user interface.
- **Vite** for fast development.
- **Clerk** for user management and authentication.
- **React Router Dom** for handling routing between pages.
- **React Table** for displaying financial records.
- **Yarn** as the package manager.

### Backend (Server):
- **Express.js** for building REST APIs.
- **MongoDB Atlas** as the database.
- **Mongoose** for data modeling.
- **TypeScript** for type safety in the backend.
- **Cors** for handling cross-origin requests.

## Project Setup

To set up the project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Ashutosh-Ahirwar/finance-mern
cd finance-mern
```

### 2. Client Setup
- Navigate to the client directory:
  ```bash
  cd client
  ```
- Create the project using Vite:
  ```bash
  yarn create vite
  ```
  Choose the project name as '.' (current directory), React as the library, and TypeScript as the variant.

- Install dependencies:
  ```bash
  yarn
  ```

- Run the client application:
  ```bash
  yarn dev
  ```

- Add the Clerk publishable key to `.env.local`:
  ```bash
  VITE_CLERK_PUBLISHABLE_KEY=<your-publishable-key>
  ```

### 3. Server Setup
- Navigate to the server directory:
  ```bash
  cd server
  ```

- Initialize the project and install dependencies:
  ```bash
  yarn init -y
  yarn add express @types/express mongoose nodemon ts-node typescript cors @types/cors
  ```

- Set up TypeScript:
  ```bash
  yarn tsc --init
  ```

- Update the `tsconfig.json`:
  Uncomment and set:
  ```
  "rootDir": "./src",
  "outDir": "./build",
  "moduleResolution": "node10",
  ```

- Add the following scripts to `package.json`:
  ```json
  "scripts": {
    "start": "node ./build/index.ts",
    "build": "tsc -p .",
    "dev": "nodemon ./src/index.ts"
  }
  ```

- Run the server:
  ```bash
  yarn dev
  ```

### 4. Database Setup
- Create a MongoDB Atlas account and get the connection URI.
- Set the MongoDB connection string in the server's environment variables.

## Additional Information

- **Scalability**: The project is organized for scalability with separate contexts and custom hooks for managing financial records.
- **React Context API**: Used to manage global state, such as financial records, across different components.
- **Express Routes**: Express.js is used for API routes, and routes are modularized for better maintainability.
