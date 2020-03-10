## `Rudimentary app to demo React and Redux/Saga`
The API has a single endpoint `/api/users` that returns a small list of users from a file.

The UI dispatches a plain Object action to the Store. A Saga watches for a `LOAD_USERS_REQUEST` action and triggers an API call to fetch the users.

The Saga is connected to the Redux Store using the redux-saga middleware.

### From project root create a copy of sample.env

     cp sample.env .env

### Install dependencies

     yarn

### Start the API (port 3000)
   
     node server.js
 
 ### Start the UI (port 3001)

     yarn start
