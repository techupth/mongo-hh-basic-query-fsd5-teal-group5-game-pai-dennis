// ex 1
db.pizzaOrders.find({
  $and: [{ quantity: { $lt: 5 } }, { credit_card_type: "mastercard" }],
});

// ex 2
db.pizzaOrders.find({
  $and: [
    { size: "small" },
    { quantity: { $gte: 1 } },
    { quantity: { $lte: 5 } },
  ],
});

// ex 3
db.pizzaOrders.find({
  $and: [
    { quantity: { $gt: 10 } },
    { credit_card_type: { $ne: "Credit Card" } },
  ],
});
