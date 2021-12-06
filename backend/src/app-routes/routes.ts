import express from "express";
import {numberToWordController} from '../services/controllers/toWordController';
import {inputValidatorMiddleWare} from './../services/middlewares/inputValidator';

const router = express.Router()

router.post('/convert', inputValidatorMiddleWare, numberToWordController.convert )

export default router;