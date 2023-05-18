const User = require('../model/User')

const userRegisteer = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    res.status(200).json({ user })
  } catch (error) {
    res.send({ msg: error.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  //   const token = jwt.sign({ userId: user._id }, 'secret-key')
  res.status(200).json({ user, msg: 'successfully login' })
}
module.exports = { userRegisteer, login }
