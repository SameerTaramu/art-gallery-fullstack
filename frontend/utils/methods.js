function setUserInLocalStorage(user) {
  console.log("storing user ", user);
  localStorage.setItem("user", JSON.stringify(user));
}

function getUserFromLocalStorage() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function removeUserFromLocalStorage() {
  localStorage.removeItem("user");
}
