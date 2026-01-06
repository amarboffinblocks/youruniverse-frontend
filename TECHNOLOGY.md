# Frontend Technology Stack

This document explains the technologies used in our frontend application and why we chose them.

## Core Framework & Language

### 1. **Next.js**
- **What it is**: The main framework used to build the website. It handles how pages are loaded and how the application runs.
- **Why we use it**: It makes the website extremely fast, SEO-friendly, and helps us build complex features (like the AI chat) easily. It combines the best parts of React with powerful server-side capabilities.

### 2. **TypeScript**
- **What it is**: A version of JavaScript that adds "types" (rules) to our code.
- **Why we use it**: It acts like a spell-checker for code. It catches errors before we run the app, making our code more reliable and easier to maintain as the project grows.

## Styling & Design

### 3. **Tailwind CSS**
- **What it is**: A utility-first CSS framework. Instead of writing separate CSS files, we use pre-defined class names directly in our HTML.
- **Why we use it**: It allows us to style properites rapidly without leaving the HTML. It facilitates a consistent design system and ensures the site looks good on all screen sizes (responsiveness).

### 4. **Radix UI** (via Shadcn UI)
- **What it is**: A library of unstyled, accessible UI components (like dialogs, dropdowns, and sliders).
- **Why we use it**: Building complex interactive components from scratch is hard and error-prone. Radix gives us the "skeleton" of these components with perfect accessibility (screen reader support, keyboard navigation) built-in, allowing us to style them exactly how we want.

## User Interface & Experience

### 5. **Framer Motion**
- **What it is**: A library for creating animations in React.
- **Why we use it**: It makes adding smooth sequences, transitions, and complex animations (like the AI thinking effect or page transitions) simple and performant, making the app feel "alive" and premium.

### 6. **Lucide React**
- **What it is**: A collection of beautiful, consistent SVG icons.
- **Why we use it**: It provides a unified style for all icons used throughout the application, keeping the visual language consistent.

## Forms & User Input

### 7. **Formik**
- **What it is**: A library for building forms.
- **Why we use it**: Handling form state, errors, and validation (checking if an email is real, etc.) can get messy. Formik handles the complicated logic, letting us focus on the form fields themselves.

## AI Integration

### 8. **Vercel AI SDK**
- **What it is**: A toolkit for building AI-powered applications.
- **Why we use it**: It simplifies connecting our frontend to AI models, handling streaming responses (typing effect), and managing the chat state efficiently.
