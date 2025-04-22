 
import MainRoute from '../route.custom';
import bookService from './book.service';

MainRoute.router.post('/books',bookService.create);
MainRoute.router.get("/books",bookService.read);

export default MainRoute.router;

 