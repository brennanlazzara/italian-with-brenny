import mongoose from "mongoose";
import dotenv from "dotenv";
import Verb from "./models/Verb";
import Pronoun from "./models/Pronoun";

dotenv.config();

const verbData = {
  areVerbs: [
    {
      infinitive: "parlare",
      definition: "to speak",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mangiare",
      definition: "to eat",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "lavorare",
      definition: "to work",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "guardare",
      definition: "to watch",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "pensare",
      definition: "to think",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "trovare",
      definition: "to find",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aspettare",
      definition: "to wait",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "comprare",
      definition: "to buy",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "chiamare",
      definition: "to call",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "studiare",
      definition: "to study",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "amare",
      definition: "to love",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "portare",
      definition: "to bring",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "arrivare",
      definition: "to arrive",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "entrare",
      definition: "to enter",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "lasciare",
      definition: "to leave",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "giocare",
      definition: "to play",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ascoltare",
      definition: "to listen",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "camminare",
      definition: "to walk",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aiutare",
      definition: "to help",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "usare",
      definition: "to use",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cantare",
      definition: "to sing",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "pagare",
      definition: "to pay",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "preparare",
      definition: "to prepare",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cercare",
      definition: "to search",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "incontrare",
      definition: "to meet",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "tornare",
      definition: "to return",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mandare",
      definition: "to send",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "passare",
      definition: "to pass",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "viaggiare",
      definition: "to travel",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cominciare",
      definition: "to begin",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "abitare",
      definition: "to live",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "suonare",
      definition: "to play (an instrument)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "imparare",
      definition: "to learn",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "insegnare",
      definition: "to teach",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ricordare",
      definition: "to remember",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dimenticare",
      definition: "to forget",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cambiare",
      definition: "to change",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "provare",
      definition: "to try",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "ordinare",
      definition: "to order",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "cucinare",
      definition: "to cook",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "andare",
      definition: "to go",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dare",
      definition: "to give",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "stare",
      definition: "to stay",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
  ],
  ereVerbs: [
    {
      infinitive: "credere",
      definition: "to believe",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "scrivere",
      definition: "to write",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "leggere",
      definition: "to read",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "mettere",
      definition: "to put",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "prendere",
      definition: "to take",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "chiedere",
      definition: "to ask",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "vivere",
      definition: "to live",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "ricevere",
      definition: "to receive",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "perdere",
      definition: "to lose",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "vendere",
      definition: "to sell",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "rispondere",
      definition: "to answer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "decidere",
      definition: "to decide",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "conoscere",
      definition: "to know (a person)",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "crescere",
      definition: "to grow",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "correre",
      definition: "to run",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "sapere",
      definition: "to know",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "rimanere",
      definition: "to stay/remain",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: false,
    },
  ],
  ireVerbs: [
    {
      infinitive: "partire",
      definition: "to leave",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dormire",
      definition: "to sleep",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "sentire",
      definition: "to hear/feel",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "aprire",
      definition: "to open",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "seguire",
      definition: "to follow",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "offrire",
      definition: "to offer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "servire",
      definition: "to serve",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "coprire",
      definition: "to cover",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "scoprire",
      definition: "to discover",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "soffrire",
      definition: "to suffer",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: false,
    },
    {
      infinitive: "bollire",
      definition: "to boil",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "fuggire",
      definition: "to flee",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "mentire",
      definition: "to lie",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "nutrire",
      definition: "to nourish/feed",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "restituire",
      definition: "to return",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "salire",
      definition: "to go up",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "vestire",
      definition: "to dress",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "assalire",
      definition: "to attack/assail",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "conseguire",
      definition: "to achieve",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "convertire",
      definition: "to convert",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "inseguire",
      definition: "to chase/pursue",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "inserire",
      definition: "to insert",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "costituire",
      definition: "to constitute",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: true,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "venire",
      definition: "to come",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "uscire",
      definition: "to go out",
      auxiliaryVerb: "essere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
    {
      infinitive: "dire",
      definition: "to say/tell",
      auxiliaryVerb: "avere",
      regularPresenteIndicativo: false,
      regularPassatoProssimo: true,
    },
  ],
};

const pronounData = {
  subjectPronouns: ["Io", "Tu", "Lui/Lei", "Noi", "Voi", "Loro"],
  directObjectPronouns: ["Mi", "Ti", "Lo/La", "Ci", "Vi", "Li/Le"],
  indirectObjectPronouns: ["Mi", "Ti", "Gli/Lei", "Ci", "Vi", "Gli/Le"],
};

const seedDatabase = async () => {
  try {
    // Connect to the database
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/mydatabase"
    );
    console.log("Connected to MongoDB");

    // Clear existing data
    await Verb.deleteMany({});
    await Pronoun.deleteMany({});
    console.log("Cleared existing data");

    // Construct the verbs array for seeding
    const verbs = [
      ...verbData.areVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "are",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
      })),
      ...verbData.ereVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ere",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
      })),
      ...verbData.ireVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ire",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        regularPresenteIndicativo: verb.regularPresenteIndicativo,
        regularPassatoProssimo: verb.regularPassatoProssimo,
      })),
    ];

    // Construct the pronouns array for seeding
    const pronouns = [
      { type: "subject", pronouns: pronounData.subjectPronouns },
      { type: "directObject", pronouns: pronounData.directObjectPronouns },
      {
        type: "indirectObject",
        pronouns: pronounData.indirectObjectPronouns,
      },
    ];

    // Log the data to be seeded
    console.log("Verbs to be inserted:", verbs);
    console.log("Pronouns to be inserted:", pronouns);

    // Insert pronouns first
    console.log("Inserting pronouns...");
    const pronounResult = await Pronoun.insertMany(pronouns);
    console.log("Pronouns inserted successfully:", pronounResult);

    // Insert verbs
    console.log("Inserting verbs...");
    const verbResult = await Verb.insertMany(verbs);
    console.log("Verbs inserted successfully:", verbResult);

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seeding script
seedDatabase();
