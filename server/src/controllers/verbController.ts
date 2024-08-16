import { Request, Response } from 'express';
import Verb, { IVerb } from '../models/Verb';

// Get all verbs
export const getVerbs = async (req: Request, res: Response): Promise<void> => {
  try {
    const verbs: IVerb[] = await Verb.find();
    res.json(verbs);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get verbs by type
export const getVerbsByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.params;
    const verbs: IVerb[] = await Verb.find({ type });
    res.json(verbs);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a random verb
export const getRandomVerb = async (req: Request, res: Response): Promise<void> => {
  try {
    const count: number = await Verb.countDocuments();
    const random: number = Math.floor(Math.random() * count);
    const verb: IVerb | null = await Verb.findOne().skip(random);
    res.json(verb);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a random verb by type
export const getRandomVerbByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.params;
    const count: number = await Verb.countDocuments({ type });
    const random: number = Math.floor(Math.random() * count);
    const verb: IVerb | null = await Verb.findOne({ type }).skip(random);
    res.json(verb);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};