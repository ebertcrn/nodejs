# Section 3 Assignment Instructions
1. Spin up a Node.js-driven server (on port 3001)
2. Handle two Routes: "/" and "/users"
    2.1. Return some greeting text on "/"
    2.2. Return a list of dummy users (e.g. <ul><li>user 1</li></ul>)
3. Add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click
4. Add the "/create-user" rout and parse the incoming data (e.g. the username) and simply log it to the console