# ABR Fish Nutrition App

Welcome to the ABR Fish Nutrition App! This project is a modern, mobile-friendly React web app that helps users explore nutritional information about fish by region. It's designed for clarity, speed, and a little bit of fun (check out the deep sea color theme!).

## Features

- Browse fish by NOAA Fisheries region
- See average calories and fat per serving for each region
- View detailed nutrition and images for each fish
- Fast, responsive, and mobile-first design
- Clean, maintainable code and modular CSS

## Tech Stack

- **React** (with functional components and hooks)
- **Vite** (for lightning-fast development)
- **React Router** (for navigation)
- **Custom API integration** (fetches fish data from a local server)
- **CSS Modules & Variables** (for modular, themeable styles)

## Getting Started

1. **Install dependencies:**
   
   npm install
   
2. **Start the development server:**
   
   npm run dev
  
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port Vite shows) to use the app.

> **Note:** The app expects a local API running at `http://localhost:5001/gofish?apikey=abrradiology`.

    That repository is located at: 'https://github.com/theabr-org/coding-challenge-server'.

## Project Structure

- `src/` — Main source code
  - `components/` — Reusable UI components (NavBar, RegionList, etc.)
  - `pages/` — Main pages (Home, Region)
  - `assets/` — Images and SVGs
  - `api.js` — API utility for fetching fish data
  - `App.jsx` — App layout and routing
  - `main.jsx` — App entry point

## Why Vite + React?

Vite makes development fast and fun, with instant hot reloads and a simple config. React is the industry standard for building interactive UIs. Together, they make for a smooth developer and user experience.


