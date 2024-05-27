const TrashItem = require('../models/trashItem')

exports.getAddTrash = (req, res, next) => {
	res.status(200).render('add-trash', { pageTitle: 'Add Trash', path: '/add-trash' })
}

exports.postAddTrash = (req, res, next) => {
	const trash = new TrashItem({ name: req.body.name, type: req.body.type, description: req.body.description })
	trash.save()
	res.redirect('/')
}

exports.getTrashes = (req, res, next) => {
	TrashItem.fetchAll(fullList => {
		res.status(200).render('list-of-trash', { listOfTrash: fullList, pageTitle: 'List', path: '/' })
		console.log(fullList)
	})
}

// exports.postAddTrash = (req, res, next) => {
// 	listOfTrash.push({ name: req.body.name, type: req.body.type, description: req.body.description })
// 	console.log(listOfTrash)
// 	res.redirect('/')
// }
