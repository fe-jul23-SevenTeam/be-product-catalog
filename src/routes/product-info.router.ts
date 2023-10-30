import express from 'express';
import { productsInfoController } from '../controllers';

export const router = express.Router();

router.get('/:id', productsInfoController.getOneById);
