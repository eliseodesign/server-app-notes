const home = (req, res) => {
  res.json({
    title: 'API NOTES by eliseodesign',
    routes: [
      '/api/notes'
    ]
  })
}

module.exports = home
