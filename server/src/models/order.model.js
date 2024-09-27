import crypto from "crypto";

let ordersCollection = [];

//* POST
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};

//* GET
export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

//* GET BY ID
export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find((coffee) => coffee.id === id) ||
    ordersCollection.find(
      (coffee) => coffee.id === id && coffee.userId === userId
    ) || null
  );
};

//* DELETE
export const deleteOrderById = (id, userId) => {
  const deletedOrder = ordersCollection.find(
    (coffee) => coffee.id === id && coffee.userId === userId
  );
  ordersCollection = ordersCollection.filter(
    (coffee) => coffee.id !== id && coffee.userId === userId
  );
  ordersCollection.push(deletedOrder);
  return deletedOrder;
};
