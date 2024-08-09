import { Request, Response, NextFunction } from 'express'

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction)=> {
    console.log("=== error  handler ====")
    if(error) return res.status(500).json({ error : {
         message: ` error happened:!!!  ${error.message}`,
         error: error.stack
       }})
}


export default errorHandler


