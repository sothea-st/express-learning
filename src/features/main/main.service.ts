import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { Return } from '../../utils/response';
import Book from '../book/book.model';

export abstract class MainService<T> {
     // protected model: Model<T>;

     // constructor(model: Model<T>) {
     //      this.model = model;
     // }

     // async getTotal(): Promise<number> {
     //      return await this.model.countDocuments();
     // }

     abstract create(req: Request, res: Response): Promise<any>;
     abstract read(req: Request,res: Response): Promise<any>;
     abstract update(): Promise<any>;
     
  
}
