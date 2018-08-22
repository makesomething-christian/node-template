import express from 'express';
import userRouter from './User';

const router = express.Router();

router.use('/Users', userRouter);

export default router;
