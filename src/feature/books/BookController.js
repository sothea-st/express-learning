const BookService = require('./BookService')

class BookController {

    async create(req, res) {
        try {
            res.status(201).json(await BookService.create(req.body));
        } catch (error) {
            res.status(400).json({ message10: error.message });
        }
    }

}

module.exports = new BookController();