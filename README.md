# cogo_coding_challenge

## How to Run
1. Clone repo
2. Run `npm install` to install dependencies
3. Run `npm run` start the server
4. Navigate to [local_host](http://localhost:3000)
5. Enjoy!

## How I Built It
* Created a backend with node/express to avoid CORS error when fetching this/that API
* Create a `/api` route that would return JSON from the this/that API
* Used axios for the HTTP request
* Used webpack to bundle files and used babel to transpile JS
* Used React for front-end
* In `componentDidMount` I make a request to `/api` to get the this/that pairing
* When a user clicks refresh button, `updateThisThat` will be called, which will make another request to the backend, just like `componentDidMount`
