const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
	const fullList = adminData.listOfTrash
	res.status(200).render('list-of-trash', { listOfTrash: fullList, pageTitle: 'List', path: '/' })
	console.log(fullList)
})

module.exports = router
