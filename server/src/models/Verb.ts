import mongoose, { Document, Schema } from 'mongoose';

export interface IVerb extends Document {
  infinitive: string;
  type: 'are' | 'ere' | 'ire';
  conjugations: {
    io: string;
    tu: string;
    lui_lei: string;
    noi: string;
    voi: string;
    loro: string;
  };
}

const VerbSchema: Schema = new Schema({
  infinitive: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['are', 'ere', 'ire'],
    required: true
  },
});

export default mongoose.model<IVerb>('Verb', VerbSchema);