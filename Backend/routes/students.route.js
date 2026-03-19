import express from 'express';
import { getAll, createStudent } from '../models/student.model.js';

const route = express.Router();

route.get('/student', getAll);
route.post('/student', createStudent);

export default route;
