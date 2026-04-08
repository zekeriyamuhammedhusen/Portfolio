# My Portfolio

A personal portfolio website built with React. It presents my profile, skills, projects, and contact details in a clean, responsive layout.

## Features

- Hero section with profile introduction
- About section with education, location, contact, and developer mindset
- Projects section with clickable project cards
- Skills and contact sections
- Responsive design for desktop and mobile

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production in the `build` folder.

### `npm run eject`

Removes the single build dependency and copies configuration files into the project.

## Project Structure

- `src/components` contains the page sections and shared UI pieces.
- `src/data/portfolioData.js` controls the portfolio content.
- `src/App.css` contains most of the layout and visual styling.

## Notes

- Project cards open the live demo link first. If no live link is set, they fall back to the GitHub repository.
- Update `src/data/portfolioData.js` when adding new projects, social links, skills, or personal details.
- If you add a new project later, set its `demo` field to the deployed live URL.
- The layout and styling are centralized, so most visual changes can be made in `src/App.css`.
- The app uses React Router for navigation between sections and pages.

## Learn More

You can learn more about React at [https://react.dev](https://react.dev).
