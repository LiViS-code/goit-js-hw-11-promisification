const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map(((use)r) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
};

const logger = ((updatedUser)s) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, "Mango", logger);
toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
