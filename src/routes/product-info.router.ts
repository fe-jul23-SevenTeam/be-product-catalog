import express from 'express';
import { tabletsController } from '../controllers';

export const router = express.Router();

router.get('/:category', tabletsController.getByCategory);
router.get('/find/:id', tabletsController.getOneById);
