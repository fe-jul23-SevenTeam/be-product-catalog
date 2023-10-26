import express from 'express';
import { tabletsController } from '../controllers';

export const router = express.Router();

router.get('/', tabletsController.getAll);
router.get('/:id', tabletsController.getOneById);
