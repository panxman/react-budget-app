# react-budget-app
A Budget application using React.

### Heroku Link: https://panxman-react-budget-app.herokuapp.com/
Login using your Google account and track your monthly expenses!

### Installation

Run **yarn/npm install** to add all dependencies

### Start the server
To start the production server locally, you need to:
1) first run **npm/yarn run build:prod** to build the project
2) start the server by running **npm run start / yarn start**
3) Navigate to *localhost:3000*

To start the development server, just run:
1) **npm/yarn run dev-server**, this will start Webpack, build the project and start the server at (default): *localhost:8080*

### Environmental Variables
This project uses **Firebase** for data storage, so you will need to have a Google account, and create a Firebase project and a Realtime Database within it.

For the development purposes, we are using two databases, therefor you must create **two** files at the root of the project:
* .env.development
* .env.test

Inside these files, you need to add the following key=value pairs, with the credentials of your two databases.
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID= here use the measurement id if you use Google metrics, or "null" (without the quotes).
```
