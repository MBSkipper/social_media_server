const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//Set up routes here
//Set up routes here
//Set up routes here

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Route connections here
//Route connections here
//Route connections here

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Social Media API',
        now: new Date()
    })
})

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {   
        console.log('MongoDB connected successfully!')
        app.listen(process.env.PORT, () => {
        console.log(`Server is running on ${process.env.PORT}!`)
    })
})
    .catch((error) => {
        console.log('MongoDB connection error', error)
    })




/**
 NOTES TO CODE
 Line 1 - imports the express library.  Express is a function that creates a server application
 Line 2 - imports mongoose
 Line 3 - imports dotenv library.  This makes dotenv so it can be used. The   role of dotenv is to load variables from a .env file into process.env, without this node cannot read the .env file (node does not automatically 'understand' .env)
 Line 4 - runs dotenv.config() file this executes dotenv.  It looks for a file in the project root, it reads all key=value pairs and injects them into node's environment object process.env. Because .env is text, then dotenv translates this into real environment variables.  This must run before anything requiring the variables - ie. before mongoose.connect
 Note - in node.js, process is a global object that is automatically available everywhere. So process.env is an object that stores variables and each value is always a string ie process.env = {PORT:3000, MONGODB_URL:codewithuser&passwordetc}.  So process.env enables variables to be provided to your app from outside the code.
 Line 10 - const app = express() calls express to execute the  express function, it creates a new application instance and stores it in the variable named app.  this is important because everything in Express attached to app
 Line 12 - app.use(express.json()) - adds JSON middleware
 Line 13 - the code ..express.urlencoded(..) parses incoming data and converts it into a JavaScript object
 Line 13 - app.use is middleware so it must run before routes so the routes can read req.body
 Line 13 - ({ extended: false })) uses a simple parser typically for simple data rather than nested objects
 Line 19 - '/' is the root URL, (req, res) => { } is the route handler function
 Line 20 - res.json(...) is the response back to the client
 Line 20 - 23 - {message: .., now: ... } is the object sent back to the client to confirm the server is running, that the routing works and JSON responses work
 Line 26 - mongoose.connect(process.env.MONGODB_URL) - mongoose.connect() tries to connect your Node.js app to MongoDB and (process.env.MONGODB_URL) reads the environment variables whist keeping them secret 
 Line 27-28 - .then(() => {...} so .connect returns a promise; .then only runs if connection succeeds so that server only starts when MongoDB is ready, then it logs a success message
 Line 29 - app.listen(process.env.PORT, ...) starts the Express server and listen for incoming requests on this port.  Important - it is placed inside the .then() so the server will not run if the database failed
 Line 33-34 - .catch((error) => {...} runs if the connection fails and logs the error so you know what went wrong.
 Lines 26-35 - Summary - Connect to MongoDB , if successful start server, if failed don't start server and log error message


 */

/* DESIGN NOTES
Social Media App Requirements
- Model
    - User
        - username (String, unique)
        - email (String, unique)
        - fullName (String)
        - bio (String)
        - profilePic (Sting because the image will be a url link)
        - timestamps (createdAt, updatedAt)

    - Post - many:1 relationship ie one user multiple posts
        - author (ObjectId ref - > refers to User model)
        - content (String)
        - postPic (String)
        - likes (Array[ObjectId ref - > User)]) - see comment sect'n below
        - timestamps (Date)

    - Comment many:1 relationship ie one user multiple comments
        - post (ObjectId ref - > refers to Post model) relationship
        - author (ObjectId ref - > refers to User model) relationship
        - content (String)
        - timestamps (Date)

- Routes:
    - users
        - GET/users (READ) - gets complete list of users
        - POST/users (CREATE) 
        - PATCH/users/:id (UPDATE)
        - DELETE/users/:id (DELETE)
        - GET/users/:id (READ) - get a specific user
    - posts 
        - GET/posts ?userId= (READ) - get posts from a specific user
        - POST/posts (CREATE) 
        - PATCH/posts/:id (UPDATE)
        - DELETE/posts/:id (DELETE)
        - GET/posts/:id (READ) - get a specific post
        - POST/posts/:id/like-toggle (CREATE) - enables a like to be added 
    -comment
        - GET/comments?postId= (READ) - get all comments related to a specific post
        - POST/comments (CREATE) 
        - PATCH/comments/:id (UPDATE)
        - DELETE/comments/:id (DELETE)

    - notes about routes
        - to decide if something classifies as a model or not, check does it have:
            - several routes or functionalities?
            - a complete lifecycle?
            - here it is true for users, posts and comments
            - here it is not true for likes (like will be on or off only; adding or removing some data)
       
General notes about databases
    - Database type selection (ie SQL or non-SQL) based on various factors
    - Some websites use a mix of databases - each database has adv & disadv
        - scalability 
        - database suitability for server
        - not sure if data will change - non SQL
        - data will not change (fixed Schema) - SQL
        - transaction support required (ie payment processing) - SQL
        - these are advanced topics in DevOps 
        - none db is not better than another but one may be better than another in specific scenarios





        



 */