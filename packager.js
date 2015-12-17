'use strict'

let packager = require('songdown-packager')
let path = require('path')

const source = path.join(__dirname, 'songs')
const destination = __dirname

console.log('Packaging Songdown songs')
packager.run(source, destination)
console.log('Done')
