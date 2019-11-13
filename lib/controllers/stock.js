module.exports = {
    index: (req, res) => {
      Stocks.find({})
        .then(Stocks => {
          res.json(Stocks)
        })
    },
    showName: (req, res) => {
      Stocks.find({name: req.params.name})
        .then(Stocks => {
          res.render(Stocks)
        })
    },
    create: (req, res) => {
      Stocks.create(req.body)
        .then(Stocks => {
          res.json(Stocks)
        })
    },
    edit: (req, res) => {
      Stocks.findOneAndUpdate({name: req.params.name}, req.body)
        .then(Stocks => {
          res.json(Stocks)
        })
    },
    delete: (req, res) => {
      Stocks.delete({name: req.params.name})
        .then(Stocks => {
          res.json(Stocks)
        })
    }
  }