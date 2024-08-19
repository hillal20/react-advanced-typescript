import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.
  status(200).
  json({
    data: [
      {name: "ali", age:30, company:'infosys'},
      {name: "kumar", age:33, company:'flexion'}
    
    ]});
});

router.get('/:id', (req: Request, res: Response) => {
  res.send(`User details for user with ID ${req.params.id}`);
});

export default router;
