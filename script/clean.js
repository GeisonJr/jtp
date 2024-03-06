const { rmSync } = require('fs')

rmSync('./lib', {
	recursive: true,
	force: true,
})
