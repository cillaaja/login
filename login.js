const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginContainer = document.getElementById("login-container");
const dashboard = document.getElementById("dashboard");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userNameDisplay = document.getElementById("user-name");

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Username dan Password wajib diisi!");
    return;
  }

  // Tampilkan dashboard
  loginContainer.style.display = "none";
  dashboard.style.display = "flex";
  userNameDisplay.innerText = username;
});

logoutBtn.addEventListener("click", () => {
  // Kembali ke halaman login
  dashboard.style.display = "none";
  loginContainer.style.display = "block";
  usernameInput.value = "";
  passwordInput.value = "";
});
