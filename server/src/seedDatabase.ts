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
      isRegular: true,
    },
    {
      infinitive: "mangiare",
      definition: "to eat",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "lavorare",
      definition: "to work",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "guardare",
      definition: "to watch",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "pensare",
      definition: "to think",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "trovare",
      definition: "to find",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "aspettare",
      definition: "to wait",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "comprare",
      definition: "to buy",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "chiamare",
      definition: "to call",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "studiare",
      definition: "to study",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "amare",
      definition: "to love",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "portare",
      definition: "to bring",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "arrivare",
      definition: "to arrive",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "entrare",
      definition: "to enter",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "lasciare",
      definition: "to leave",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "giocare",
      definition: "to play",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "ascoltare",
      definition: "to listen",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "camminare",
      definition: "to walk",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "aiutare",
      definition: "to help",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "usare",
      definition: "to use",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "cantare",
      definition: "to sing",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "pagare",
      definition: "to pay",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "preparare",
      definition: "to prepare",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "cercare",
      definition: "to search",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "incontrare",
      definition: "to meet",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "tornare",
      definition: "to return",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "mandare",
      definition: "to send",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "passare",
      definition: "to pass",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "viaggiare",
      definition: "to travel",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "cominciare",
      definition: "to begin",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "abitare",
      definition: "to live",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "suonare",
      definition: "to play (an instrument)",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "imparare",
      definition: "to learn",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "insegnare",
      definition: "to teach",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "ricordare",
      definition: "to remember",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "dimenticare",
      definition: "to forget",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "cambiare",
      definition: "to change",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "provare",
      definition: "to try",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "ordinare",
      definition: "to order",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "cucinare",
      definition: "to cook",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
  ],
  ereVerbs: [
    {
      infinitive: "credere",
      definition: "to believe",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "scrivere",
      definition: "to write",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "leggere",
      definition: "to read",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "mettere",
      definition: "to put",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "prendere",
      definition: "to take",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "chiedere",
      definition: "to ask",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "vivere",
      definition: "to live",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "ricevere",
      definition: "to receive",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "perdere",
      definition: "to lose",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "vendere",
      definition: "to sell",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "rispondere",
      definition: "to answer",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "decidere",
      definition: "to decide",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "conoscere",
      definition: "to know (a person)",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "crescere",
      definition: "to grow",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "correre",
      definition: "to run",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
  ],
  ireVerbs: [
    {
      infinitive: "partire",
      definition: "to leave",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "dormire",
      definition: "to sleep",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "sentire",
      definition: "to hear/feel",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "aprire",
      definition: "to open",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "seguire",
      definition: "to follow",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "offrire",
      definition: "to offer",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "servire",
      definition: "to serve",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "coprire",
      definition: "to cover",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "scoprire",
      definition: "to discover",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "soffrire",
      definition: "to suffer",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "bollire",
      definition: "to boil",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "fuggire",
      definition: "to flee",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "mentire",
      definition: "to lie",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "nutrire",
      definition: "to nourish/feed",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "restituire",
      definition: "to return",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "salire",
      definition: "to go up",
      auxiliaryVerb: "essere",
      isRegular: true,
    },
    {
      infinitive: "vestire",
      definition: "to dress",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "assalire",
      definition: "to attack/assail",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "conseguire",
      definition: "to achieve",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "convertire",
      definition: "to convert",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "inseguire",
      definition: "to chase/pursue",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "inserire",
      definition: "to insert",
      auxiliaryVerb: "avere",
      isRegular: true,
    },
    {
      infinitive: "costituire",
      definition: "to constitute",
      auxiliaryVerb: "avere",
      isRegular: true,
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
        isRegular: verb.isRegular,
      })),
      ...verbData.ereVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ere",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        isRegular: verb.isRegular,
      })),
      ...verbData.ireVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ire",
        definition: verb.definition,
        auxiliaryVerb: verb.auxiliaryVerb,
        isRegular: verb.isRegular,
      })),
    ];

    // Construct the pronouns array for seeding
    const pronouns = [
      { type: "subject", pronouns: pronounData.subjectPronouns },
      { type: "directObject", pronouns: pronounData.directObjectPronouns },
      { type: "indirectObject", pronouns: pronounData.indirectObjectPronouns },
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
