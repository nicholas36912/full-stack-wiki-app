Wikipedia App
This is a simple web application that leverages the Wikipedia API to provide random articles, search for specific articles, and save favorite articles to a MongoDB database. The application is built using Node.js with Express for the backend, MongoDB for data storage, and React for the frontend.

Table of Contents
Getting Started
Backend
Dependencies
Connecting to MongoDB
API Endpoints
Frontend



Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB
Getting Started
Clone the repository:
git clone https://github.com/your-username/wikipedia-app.git
cd wikipedia-app
Install dependencies:

npm install

npm start
The application will be accessible at http://localhost:3001.

Backend
Dependencies
The backend is built with Node.js and Express. It also uses mongoose for MongoDB integration, axios for making HTTP requests.

Connecting to MongoDB
The application connects to a local MongoDB database named wikipedia_app.

API Endpoints
GET /api/random-article: Fetches a random article from Wikipedia.
GET /api/search: Searches for an article based on the provided query.
POST /api/save-article: Saves a user-selected article to the MongoDB database.
GET /api/favorite-articles: Retrieves all saved articles from the MongoDB database.
Frontend
Dependencies
The frontend is built using React. It relies on the react-router-dom library for handling navigation and axios for making HTTP requests.

Components
App: The main component that sets up the application routes.
Home: Displays random articles and allows users to add them to favorites.
Search: Enables users to search for specific articles.
Favorites: Shows a list of saved favorite articles.
Explore random articles on the Home page.
Use the Search page to find articles based on specific queries.
Save interesting articles to the Favorites page.






