// src/routes.ts
import { Router, Request, Response, NextFunction } from 'express';
import Employee, { IEmployee } from '../db/models/Employee';

const router: Router = Router();

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  try {
    const user: IEmployee = new Employee({ name, email, password });
    await user.save();
    res.status(201).send({ message: 'Employee registered successfully' });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

export default router;
