import { Router } from 'express';
import movieController from '../controllers/movieController';
const router = Router();

router.get('/', (req, res) => movieController.getAllMovies(req, res));


export default router