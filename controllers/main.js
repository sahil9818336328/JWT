const login = async (req, res) => {
  res.send('Fake login/Register')
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello john doe`,
    secret: `You are now authorized and your lucky number is ${luckyNumber}.`,
  })
}

module.exports = { login, dashboard }
