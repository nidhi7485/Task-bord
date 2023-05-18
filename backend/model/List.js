const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,

  tasks: [{ name: String, completed: Boolean }],
})

module.exports = mongoose.model('List', listSchema)
