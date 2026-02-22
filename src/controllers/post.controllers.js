const Post = require('../models/post.models')
const User = require('../models/user.models')

const fetchPosts = async (req, res) => {
    try {
        const { author } = req.query
        const post = await Post.find( { author }) 

        res.json({
            status: 'SUCCESS',
            data: posts
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({
            message: 'Something went wrong',
            status: "FAILED",
            error: error.message
        })
    }
}

const createPost = async (req, res) => {
    try {
        const { author, content } = req.body

        const user = Usesr.findById(author)
        if(!user) {
            return res.status(400).json({
            status: "FAILED",
            message: 'Author not found'
            })
        } 

        await Post.create({
            author,
            content
        })

        res.json({
            status: 'SUCCESS',
            message: 'Post created successfully!'
        })
    
    } catch(error) {
        console.error(error);
        res.status(500).json({
            status: "FAILED, something went wrong",
            error: error.message
        })
    }
}


const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { content } = req.body

        await Post.findByIdAndUpdate( id, { content })

        res.json({
            status:'SUCCESS',
            message: 'Post updated successfully!'
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "FAILED",
            error: error.message
        })
    }
}

const deletePost = async (req, res) => {
    try{
        const { id } = req.params
        await Post.findByIdAndDelete(id)
        res.json({
            status: 'SUCCESS',
            message: 'Post deleted successfully!'
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "FAILED",
            error: error.message
        })
    }
}


module.exports = {
    fetchPosts,
    createPost,
    updatePost,
    deletePost
}
