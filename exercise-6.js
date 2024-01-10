import connectToMongoDB from "./connectToMongoDB.js";

const document1 = async (collection) => {
  return await collection.updateMany(
    { customer_name: "Jack" },
    {
      $set: {
        isAdmin: false,
      },
    },
    {
      upsert: true,
    }
  );
};
const document2 = async (collection) => {
  return await collection.updateMany(
    {},
    { $set: { country: "Thailand" } },
    { upsert: true }
  );
};
const document3 = async (collection) => {
  return await collection.updateOne(
    { customer_name: "M" },
    {
      $set: {
        size: "large",
        total_price: 200000,
        quantity: 20,
        customer_name: "M",
        credit_card_type: "mastercard",
        created_at: "2022-01-01T10:48:40Z",
      },
    },
    { upsert: true }
  );
};
const result6_1 = await connectToMongoDB(document1);
const result6_2 = await connectToMongoDB(document2);
const result6_3 = await connectToMongoDB(document3);
console.log(result6_1);
console.log(result6_2);
console.log(result6_3);
