export interface ISuccess{
     status:Number,
     msg:String,
     total:Number,
     data: any
}

 

export class Return {
     public static success = (data: any, total=0 ,status = 200, msg = "Success"): ISuccess => ({
          status,
          msg,
          total,
          data,
        });
}