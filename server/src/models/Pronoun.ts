// models/Pronoun.js
import mongoose, {Document, Schema } from "mongoose";

export interface IPronoun extends Document {
  infinitive: string;
  type: 'subject' | 'directObject' | 'indirectObject';
  conjugations: {
    io: string;
    tu: string;
    lui_lei: string;
    noi: string;
    voi: string;
    loro: string;
  };
}

const pronounSchema = new mongoose.Schema({
  type: { type: String, required: true },
  pronouns: { type: [String], required: true },
});

const Pronoun = mongoose.model("Pronoun", pronounSchema);
export default Pronoun;
