const noFount = (req, res) => {
  res.status(404).json({
    eror: 'not fount'
  })
}

module.exports = noFount
