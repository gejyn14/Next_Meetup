import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://gejyn14:EYU7EPIi0CIMlJAD@cluster0.bsucc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = await db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
