import { Request, Response } from "express";
import Book, { IBook } from "./book.model";
import { MainService } from "../main/main.service";
import { Return } from "../../utils/response";

class BookService extends MainService<IBook> {

  async read(req: Request, res: Response): Promise<any> {

     const { page , limit , search } = req.query;
     const project =  {
          name: 1,
          price: 1,
     };
     const books = await Book.aggregate([
          {
               $match: {
                    status: true,
                    name: {
                         $regex: search || "" , $options: "i"
                    }
               },
          },
          {
               $project:project,
          },
          {
               $sort: {
                    _id: -1,
               },
          },
          {
               $skip: (Number(page) - 1)*Number(limit),
          },
          {
               $limit: Number(limit),
          },
    ]);


    const count = await Book.countDocuments();

    res.json(Return.success(books,count));
  }

  update(): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async create(req: Request, res: Response): Promise<any> {
    const book = await Book.create(req.body);
    res.json(Return.success(book));
  }
}

export default new BookService();
