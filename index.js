





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