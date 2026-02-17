const express = require('express')
const router = express.Router()

const {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controllers')

router.get('/users',fetchUsers, )

router.post('/users', createUser)

router.patch('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router
