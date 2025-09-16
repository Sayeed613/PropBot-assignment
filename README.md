# PropBot - Real Estate Platform

A modern, responsive real estate platform built with **React**, **Tailwind CSS**, and **Firebase Authentication**. PropBot allows users to browse, filter, and express interest in properties for sale or rent.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Technologies](#technologies)
* [Installation](#installation)
* [Firebase Setup](#firebase-setup)
* [Running the Project](#running-the-project)
* [Project Structure](#project-structure)
* [Screenshots](#screenshots)
* [Deployment](#deployment)
* [Evaluation Criteria](#evaluation-criteria)

---

## Overview

PropBot is designed to make real estate browsing and transactions seamless. Users can:

* View featured properties
* Browse properties for sale or rent
* Filter by type, city, and price range
* Log in or sign up securely via Firebase
* Express interest in properties with email notifications
* Explore services offered by the platform

The UI is mobile-first, visually appealing, and highly interactive.

---

## Features

* **Homepage** with Hero section, featured properties, and services overview
* **Property Listings** with filters and pagination
* **Compact carousels** for sale and rent properties
* **Property cards** with Buy Now functionality
* **Authentication**: Sign up, login, and session management using Firebase
* **Email notifications** for expressing interest in properties
* **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

---

## Technologies

* **Frontend:** React, Tailwind CSS, React Router, React Icons, React Slick Carousel
* **Backend/Services:** Axios for API requests
* **Authentication:** Firebase Authentication
* **Notifications:** react-toastify
* **Mock API:** [MockAPI](https://mockapi.io/)

---

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/Sayeed613/PropBot-assignment.git>
cd propbot
```

2. Install dependencies:

```bash
npm install
```

---

## Firebase Setup

1. Create a project in [Firebase Console](https://console.firebase.google.com/).
2. Enable **Email/Password Authentication**.
3. Copy your `firebaseConfig` and replace in `services/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/src
  /components
    - Hero.jsx
    - WhatWeDo.jsx
    - SaleAndRentCompactSection.jsx
    - PropertyCard.jsx
    - PropertyCarouselCompact.jsx
    - FeaturedProperty.jsx
    - JourneyComponent.jsx
    - Footer.jsx
  /pages
    - HomePage.jsx
    - ListingPage.jsx
    - LoginPage.jsx
    - SignupPage.jsx
  /services
    - api.js
    - firebase.js
  main.jsx
  App.jsx
```

---

## Screenshots

[Home Page](./src/assets/screenshots/hero.png)
[listing Page](./src/assets/screenshots/listing.png)
[login Page](./src/assets/screenshots/login.png)
[signup Page](./src/assets/screenshots/sign.png)
[featured comp](./src/assets/screenshots/featured.png)
[journey comp](./src/assets/screenshots/journey.png)
[rent&sell comp](./src/assets/screenshots/rent&sell.png)
[whatwedo comp](./src/assets/screenshots/whatwedo.png)
[footer comp](./src/assets/screenshots/footer.png)


---

## Deployment

You can deploy the project on **Vercel**, **Netlify**, or any React-friendly hosting platform:

```bash
npm run build
```

Then follow the platform instructions to deploy the `build` folder.

---

## Evaluation Criteria

* Fully functional property listings with filtering and pagination
* Responsive and mobile-friendly UI
* Firebase authentication integration
* Clear project structure and code readability
* Clean UI/UX design

---

**Author:** Sayeed Ahmed
