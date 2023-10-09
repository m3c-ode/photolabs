# Photolabs
Photolabs is an app that fetches pictures and enables user to filter through the database's pictures rendered, and also to like them and to create a personalized list.
We created a client-side application using React view-layer library. 
This app fetches pictures from an API (defined in the `backend`), and renders the pictures on our client side application. We can like

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. This project combines the power of React with an Express.js backend and a PostgreSQL database to provide a seamless user experience for interacting with photos.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Frontend](#running-the-frontend)
  - [Running the Backend](#running-the-backend)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Acknowledgement](#acknowledgement)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/your-username/photolabs.git
   ```

2. Install dependencies for both the frontend and backend:
    ```sh
    cd photolabs/frontend
    npm install
    cd ../backend
    npm install
    ```

## Usage

### Running the Frontend
To start the client-side Webpack development server:

```sh
cd frontend
npm start
```
    

### Running the Backend
Refer to the backend/readme file for detailed setup instructions for the API server. After setting up the backend, you can start it with:
```sh
  cd backend
  npm start
```

## Features
- View photos from the homepage fetched from the API.
- Navigate to different photo categories (topics).
- Revert back to all pictures by clicking on the logo in the navigation bar.
- Click on a photo to view a larger version and related photos.
- Like a photo from anywhere within the application.
- View a heart icon with a notification in the navigation for liked photos.
- Clicking this icon will show all the user's favorite selection.
- Client-side application makes API requests to load and persist data.

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## Technologies used
- React: A JavaScript library for building user interfaces.
- Express.js: A web application framework for Node.js used for building the API server.
- PostgreSQL: A powerful, open-source relational database system.
- Babel: A JavaScript compiler used for transpiling modern JavaScript and JSX.
- Webpack: A module bundler used for development server and bundling assets.

## Acknowledgement
Thanks to Lighthouse Labs for the inspiration and education.
