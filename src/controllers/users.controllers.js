const User = require('../models/users.models')

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json({
            status: 'SUCCESS',
            data: users
        })
    } catch(error) {
        res.status(500).json({
            status: 'FAILED',
            message: 'Something went wrong'
        })
    }
}

const createUser = async (req, res) => {
    try {
        const { username, email, fullName, bio } = req.body

        await User.create({
            username, 
            email, 
            fullName, 
            bio
        })

        res.json({
            status: 'SUCCESS',
            message: 'User created successfully!'
        })
    } catch(error) {
        res.status(500).json({
            status: 'FAILED',
            error
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { fullName, bio } = req.body

        await User.findByIdAndUpdate( id, { fullName,bio })

        res.json({
            status:'SUCCESS',
            message: 'User updated successfully!'
        })

    } catch(error) {
        res.status(500).json({
            status: 'FAILED',
            error
        })
    }
}

const deleteUser = async (req, res) => {
    try{
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.json({
            status: 'SUCCESS',
            message: 'User deleted successfully!'
        })
    } catch(error) {
        res.status(500).json({
            status: 'FAILED',
            error
        })
    }
}

module.exports = {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
}