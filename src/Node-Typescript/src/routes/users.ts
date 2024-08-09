import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('User list');
});

router.get('/:id', (req: Request, res: Response) => {
  res.send(`User details for user with ID ${req.params.id}`);
});

export default router;
