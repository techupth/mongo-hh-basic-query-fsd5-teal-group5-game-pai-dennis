import { MongoClient } from "mongodb";

async function connectToMongoDB(queryFn) {
  const url = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
  const dbName = "practice-mongo"; // Replace with your database name

  try {
    const client = await MongoClient.connect(url);
    console.log("Connected to MongoDB successfully.");
    const db = client.db(dbName);
    const collection = db.collection("pizzaOrders"); // Replace with the name of your collection
    const result = await queryFn(collection);
    client.close();
    return result;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
export default connectToMongoDB;
