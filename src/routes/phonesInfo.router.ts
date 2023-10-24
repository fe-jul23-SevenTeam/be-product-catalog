import express from 'express';
import phonesInfoController from '../controllers/phonesInfo.controller';

export const router = express.Router();

router.get('/', phonesInfoController.getAll);
router.get('/:id', phonesInfoController.getOneById);
