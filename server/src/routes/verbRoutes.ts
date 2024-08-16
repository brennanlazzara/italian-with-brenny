import express, { Router } from 'express';
import { getVerbs, getVerbsByType, getRandomVerb, getRandomVerbByType } from '../controllers/verbController';

const router: Router = express.Router();

router.get('/', getVerbs);
router.get('/type/:type', getVerbsByType);
router.get('/random', getRandomVerb);
router.get('/random/:type', getRandomVerbByType);

export default router;