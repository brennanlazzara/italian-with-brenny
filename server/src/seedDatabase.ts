import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Verb from './models/Verb';
import Pronoun from './models/Pronoun';

dotenv.config();

const verbData = {
  presenteAreVerbs: [
    "parlare", "mangiare", "lavorare", "guardare", "pensare",
    "trovare", "aspettare", "comprare", "chiamare", "studiare",
    "amare", "portare", "arrivare", "entrare", "lasciare",
    "giocare", "ascoltare", "camminare", "aiutare", "usare",
    "cantare", "pagare", "preparare", "cercare", "incontrare",
    "tornare", "mandare", "passare", "viaggiare", "cominciare",
    "abitare", "suonare", "imparare", "insegnare", "ricordare",
    "dimenticare", "cambiare", "provare", "ordinare", "cucinare"
  ],
  presenteEreVerbs: [
    "credere", "scrivere", "leggere", "mettere", "prendere",
    "chiedere", "vivere", "ricevere", "perdere", "vendere",
    "rispondere", "decidere", "conoscere", "crescere", "correre"
  ],
  presenteIreVerbs: [
    "partire", "dormire", "sentire", "aprire", "capire",
    "finire", "seguire", "offrire", "preferire", "servire",
    "pulire", "costruire", "spedire", "unire", "gestire"
  ]
};

const pronounData = {
  subjectPronouns: [
    'Io', 'Tu', 'Lui/Lei', 'Noi', 'Voi', 'Loro'
  ],
  directObjectPronouns: [
    'Mi', 'Ti', 'Lo/La', 'Ci', 'Vi', 'Li/Le'
  ],
  indirectObjectPronouns: [
    'Mi', 'Ti', 'Gli/Lei', 'Ci', 'Vi', 'Gli/Le'
  ]
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mydatabase');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Verb.deleteMany({});
    await Pronoun.deleteMany({});
    console.log('Cleared existing data');

    const verbs = [
      ...verbData.presenteAreVerbs.map(verb => ({ infinitive: verb, type: 'are' })),
      ...verbData.presenteEreVerbs.map(verb => ({ infinitive: verb, type: 'ere' })),
      ...verbData.presenteIreVerbs.map(verb => ({ infinitive: verb, type: 'ire' }))
    ];

    const pronouns = [
      { type: 'subject', pronouns: pronounData.subjectPronouns },
      { type: 'directObject', pronouns: pronounData.directObjectPronouns },
      { type: 'indirectObject', pronouns: pronounData.indirectObjectPronouns }
    ];

    await Verb.insertMany(verbs);
    await Pronoun.insertMany(pronouns);
    console.log('Database seeded successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
