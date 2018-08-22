import express from 'express';
import UserService from '../../services/UserService';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ data: await UserService.find() });
});

export default router;
