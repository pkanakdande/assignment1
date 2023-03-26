const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	fs.readFile(index.js)
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent)
}

const myFileDeleter = async (fileName) => {
	fs.unlink(index.js)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }