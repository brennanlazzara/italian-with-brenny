import mongoose from "mongoose";
import dotenv from "dotenv";
import Verb from "./models/Verb";
import Pronoun from "./models/Pronoun";

dotenv.config();

const verbData = {
  presenteAreVerbs: [
    { infinitive: "parlare", definition: "to speak" },
    { infinitive: "mangiare", definition: "to eat" },
    { infinitive: "lavorare", definition: "to work" },
    { infinitive: "guardare", definition: "to watch" },
    { infinitive: "pensare", definition: "to think" },
    { infinitive: "trovare", definition: "to find" },
    { infinitive: "aspettare", definition: "to wait" },
    { infinitive: "comprare", definition: "to buy" },
    { infinitive: "chiamare", definition: "to call" },
    { infinitive: "studiare", definition: "to study" },
    { infinitive: "amare", definition: "to love" },
    { infinitive: "portare", definition: "to bring" },
    { infinitive: "arrivare", definition: "to arrive" },
    { infinitive: "entrare", definition: "to enter" },
    { infinitive: "lasciare", definition: "to leave" },
    { infinitive: "giocare", definition: "to play" },
    { infinitive: "ascoltare", definition: "to listen" },
    { infinitive: "camminare", definition: "to walk" },
    { infinitive: "aiutare", definition: "to help" },
    { infinitive: "usare", definition: "to use" },
    { infinitive: "cantare", definition: "to sing" },
    { infinitive: "pagare", definition: "to pay" },
    { infinitive: "preparare", definition: "to prepare" },
    { infinitive: "cercare", definition: "to search" },
    { infinitive: "incontrare", definition: "to meet" },
    { infinitive: "tornare", definition: "to return" },
    { infinitive: "mandare", definition: "to send" },
    { infinitive: "passare", definition: "to pass" },
    { infinitive: "viaggiare", definition: "to travel" },
    { infinitive: "cominciare", definition: "to begin" },
    { infinitive: "abitare", definition: "to live" },
    { infinitive: "suonare", definition: "to play (an instrument)" },
    { infinitive: "imparare", definition: "to learn" },
    { infinitive: "insegnare", definition: "to teach" },
    { infinitive: "ricordare", definition: "to remember" },
    { infinitive: "dimenticare", definition: "to forget" },
    { infinitive: "cambiare", definition: "to change" },
    { infinitive: "provare", definition: "to try" },
    { infinitive: "ordinare", definition: "to order" },
    { infinitive: "cucinare", definition: "to cook" },
  ],
  presenteEreVerbs: [
    { infinitive: "credere", definition: "to believe" },
    { infinitive: "scrivere", definition: "to write" },
    { infinitive: "leggere", definition: "to read" },
    { infinitive: "mettere", definition: "to put" },
    { infinitive: "prendere", definition: "to take" },
    { infinitive: "chiedere", definition: "to ask" },
    { infinitive: "vivere", definition: "to live" },
    { infinitive: "ricevere", definition: "to receive" },
    { infinitive: "perdere", definition: "to lose" },
    { infinitive: "vendere", definition: "to sell" },
    { infinitive: "rispondere", definition: "to answer" },
    { infinitive: "decidere", definition: "to decide" },
    { infinitive: "conoscere", definition: "to know (a person)" },
    { infinitive: "crescere", definition: "to grow" },
    { infinitive: "correre", definition: "to run" },
  ],
  presenteIreVerbs: [
    { infinitive: "partire", definition: "to leave" },
    { infinitive: "dormire", definition: "to sleep" },
    { infinitive: "sentire", definition: "to hear/feel" },
    { infinitive: "aprire", definition: "to open" },
    { infinitive: "seguire", definition: "to follow" },
    { infinitive: "offrire", definition: "to offer" },
    { infinitive: "servire", definition: "to serve" },
    { infinitive: "coprire", definition: "to cover" },
    { infinitive: "scoprire", definition: "to discover" },
    { infinitive: "soffrire", definition: "to suffer" },
    { infinitive: "bollire", definition: "to boil" },
    { infinitive: "fuggire", definition: "to flee" },
    { infinitive: "mentire", definition: "to lie" },
    { infinitive: "nutrire", definition: "to nourish/feed" },
    { infinitive: "restituire", definition: "to return" },
    { infinitive: "salire", definition: "to go up" },
    { infinitive: "vestire", definition: "to dress" },
    { infinitive: "assalire", definition: "to attack/assail" },
    { infinitive: "conseguire", definition: "to achieve" },
    { infinitive: "convertire", definition: "to convert" },
    { infinitive: "inseguire", definition: "to chase/pursue" },
    { infinitive: "inserire", definition: "to insert" },
    { infinitive: "costituire", definition: "to constitute" },
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
      ...verbData.presenteAreVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "are",
        definition: verb.definition,
      })),
      ...verbData.presenteEreVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ere",
        definition: verb.definition,
      })),
      ...verbData.presenteIreVerbs.map((verb) => ({
        infinitive: verb.infinitive,
        type: "ire",
        definition: verb.definition,
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
