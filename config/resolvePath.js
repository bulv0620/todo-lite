const path = require('path')

const appDir = process.cwd()

const resolvePath = (relativePath) => {
    return path.resolve(appDir, relativePath)
}

module.exports = resolvePath