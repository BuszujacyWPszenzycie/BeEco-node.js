const { name } = require('ejs')
const express = require('express')

const router = express.Router()

const listOfTrash = []

router.get('/add-trash', (req, res, next) => {
	res.status(200).render('add-trash', { pageTitle: 'Add Trash', path: '/add-trash' })
})

router.post('/add-trash', (req, res, next) => {
	listOfTrash.push({ name: req.body.name, type: req.body.type, description: req.body.description })
	console.log(listOfTrash)
	res.redirect('/')
})

exports.routes = router
exports.listOfTrash = listOfTrash
