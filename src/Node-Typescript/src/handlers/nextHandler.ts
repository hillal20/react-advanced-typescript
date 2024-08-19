import express,  { Request, Response, NextFunction } from 'express'
const router = express.Router()

router.use("*",(req: Request, res: Response , next: NextFunction)=> {
    console.log("=== next handler ====")
    const { name } = req.query
   if(name !== "hilal"){
      //  return res.status(400).json({ error : {
      //    message: `name${name} never found!!!`
      //  }})

       return next(new Error(`name  "${name}" never found!!!`))
    }
   else return next();
})


export default router





