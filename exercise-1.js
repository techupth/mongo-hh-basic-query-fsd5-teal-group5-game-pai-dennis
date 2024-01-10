// ex 1
db.pizzaOrders.findOne({ customer_name: "Cherlyn" });

// ex 2
db.pizzaOrders.find({ credit_card_type: "mastercard" });

// ex 3
db.pizzaOrders.find({ size: "medium" }).limit(5);
