// Agar user login nahi hai to login page pe bhejo
if (!localStorage.getItem("isLoggedIn")) {
  window.location.href = "auth/login.html";
}