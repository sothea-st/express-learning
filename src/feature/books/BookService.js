
const Book = require('./BookModel')

class BookService {
  create = async (bookData) => {
    const book = await Book.create(bookData);
    return book;
  };
}

module.exports = new BookService();
