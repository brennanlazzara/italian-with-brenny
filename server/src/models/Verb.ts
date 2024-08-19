import mongoose, { Document, Schema } from "mongoose";

export interface IVerb extends Document {
  infinitive: string;
  type: "are" | "ere" | "ire";
  conjugations: {
    io: string;
    tu: string;
    lui_lei: string;
    noi: string;
    voi: string;
    loro: string;
  };
}

const VerbSchema = new mongoose.Schema({
  infinitive: { type: String, required: true },
  type: { type: String, required: true },
  definition: { type: String, required: true },
  auxiliaryVerb: { type: String, enum: ["avere", "essere"], required: true },
  regularPresenteIndicativo: { type: Boolean, required: true },
  regularPassatoProssimo: { type: Boolean, required: true },
});

export default mongoose.model<IVerb>("Verb", VerbSchema);
