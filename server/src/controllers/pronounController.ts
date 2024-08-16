import { Request, Response } from "express";
import Pronoun, { IPronoun } from "../models/Pronoun";

// Get all verbs
export const getPronouns = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const pronoun: IPronoun[] = await Pronoun.find();
    res.json(pronoun);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get pronouns by type
export const getPronounsByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const pronouns: IPronoun[] = await Pronoun.find({ type });
    res.json(pronouns);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a random pronouns
export const getRandomPronoun = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const count: number = await Pronoun.countDocuments();
    const random: number = Math.floor(Math.random() * count);
    const pronoun: IPronoun | null = (await Pronoun.findOne().skip(
      random
    )) as IPronoun | null;
    res.json(pronoun);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getRandomPronounByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const pronouns: IPronoun | null = await Pronoun.findOne({ type });
    if (!pronouns) {
      res.status(404).json({ message: `No pronouns found for type: ${type}` });
      return;
    }
    res.json(pronouns);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
