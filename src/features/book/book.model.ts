// import library mongoose
import mongoose,{Schema,Document} from "mongoose";
        
// create schema
const bookSchema = new Schema(
    {
        name: { 
            type: String ,
            required:true,
            minLength: [3, 'Name must be at least 3 characters long'],
            maxlength: [50, 'Name must be at most 50 characters long']
         },
        price: { 
            type: Number ,
            required:true ,
            min: [ 0.01 , 'Price must be greater than 0' ],
            validate: {
                validator: function (v: number) {
                  return /^\d+(\.\d{1,2})?$/.test(v.toString());
                },
                message: 'Price must contain only digits and at most two decimal places'
              }
        },
        status: { type: Boolean , default: true }
    },
    {
        timestamps: true
    }
);

export interface IBook extends Document {
    name:String,
    price:Number
}

// create model
const Book = mongoose.model<IBook>("Book",bookSchema);

export default Book;




