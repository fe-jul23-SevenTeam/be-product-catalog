import express from 'express';
import { productsController } from '../controllers';

export const router = express.Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getOneById);
