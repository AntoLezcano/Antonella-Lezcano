import { hash, genSalt, compare } from "bcrypt";
import crypto from "crypto";

const usersCollection = [];

//* POST
export const createUser = async (user) => {
  const { username, email, password } = user;
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const newUser = {
    // Generate a random id
    id: crypto.randomUUID().toString(),
    username,
    email,
    password: hashedPassword,
  };
  usersCollection.push(newUser);

  return newUser;
};

//* GET BY ID
export const getUserById = async (id) => {
  const findedUser = usersCollection.find((user) => user.id === id) || null;
  return Promise.resolve(findedUser);
};

//* GET BY CREDENTIALS
export const getUserByCredentials = async (email, password) => {
  const findedUser = usersCollection.find((user) => user.email === email);

  if (!findedUser) {
    return null;
  }

  const isPasswordMatch = await compare(password, findedUser.password);

  if (isPasswordMatch) {
    return findedUser;
  }

  return null;
};
