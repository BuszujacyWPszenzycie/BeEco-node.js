const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'trashes.json')

const getTrashesFromFile = cb => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([])
		} else {
			cb(JSON.parse(fileContent))
		}
	})
}

module.exports = class TrashItem {
	constructor(n, t, d) {
		this.name = n
		this.type = t
		this.description = d
	}

	save() {
		getTrashesFromFile(trashes => {
			trashes.push(this)
			fs.writeFile(p, JSON.stringify(trashes), err => {
				console.log(err)
			})
		})
	}

	static fetchAll(cb) {
		getTrashesFromFile(cb)
	}
}
