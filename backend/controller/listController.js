const List = require('../model/List')

const listGen = async (req, res) => {
  const { userId, tasks } = req.body
  const newList = new List({ userId, tasks })

  try {
    await newList.save()
    await newList
    return res.json(newList)
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create a list' })
  }
}
const getList = async (req, res) => {
  try {
  } catch (error) {}
}
module.exports = listGen
