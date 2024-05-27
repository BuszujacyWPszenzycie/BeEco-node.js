const express = require('express')

const router = express.Router()

const trashesControllers = require('../controllers/trashes')

router.get('/add-trash', trashesControllers.getAddTrash)

router.post('/add-trash', trashesControllers.postAddTrash)

module.exports = router

// Before MVC

// exports.listOfTrash = listOfTrash

// const listOfTrash = []

// router.get('/add-trash', (req, res, next) => {
// 	res.status(200).render('add-trash', { pageTitle: 'Add Trash', path: '/add-trash' })
// })

// router.post('/add-trash', (req, res, next) => {
// 	listOfTrash.push({ name: req.body.name, type: req.body.type, description: req.body.description })
// 	console.log(listOfTrash)
// 	res.redirect('/')
// })
