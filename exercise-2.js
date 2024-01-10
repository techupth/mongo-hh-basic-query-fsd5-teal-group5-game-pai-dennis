db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { total_pirce: 1, customer_name: 1 }
);
