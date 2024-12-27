const loginButton = document.querySelector("#login-section");

const BACKEND_BASE_URL = "http://localhost:3000";
const handleRegister = async (e) => {
  e.preventDefault();

  const loginPayload = {
    password: document.querySelector("#password").value,
    email: document.querySelector("#email").value,
  };

  const res = await axios.post(`${BACKEND_BASE_URL}/api/auth/login`, {
    email: loginPayload.email,
    password: loginPayload.password,
  });

  if (res.status === 200) {
    const userData = res.data;
    setUserInLocalStorage(userData);
    alert("logged in  successfully");
  }
};

loginButton.addEventListener("submit", handleRegister);
