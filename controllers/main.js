const { BadRequestError } = require('../errors')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password')
  }
  const id = new Date().getTime()
  console.log(id)
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  console.log(token)

  res.status(200).json({ msg: 'User created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `You are now authorized and your lucky number is ${luckyNumber}.`,
  })
}

module.exports = { login, dashboard }
