import express, { Router } from "express";
import {
  getPronouns,
  getPronounsByType,
  getRandomPronoun,
  getRandomPronounByType,
} from "../controllers/pronounController";

const router: Router = express.Router();

router.get("/", getPronouns);
router.get("/type/:type", getPronounsByType);
router.get("/random", getRandomPronoun);
router.get('/random/:type', getRandomPronounByType);

export default router;
