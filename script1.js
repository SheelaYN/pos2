document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginErrorMsg = document.getElementById("loginErrorMsg");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const validEmail = "test@example.com";
  const validPassword = "123456";

  // Real-time input clearing errors
  emailInput.addEventListener("input", () => {
    emailError.textContent = "";
    loginErrorMsg.textContent = "";
  });

  passwordInput.addEventListener("input", () => {
    passwordError.textContent = "";
    loginErrorMsg.textContent = "";
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value.trim();

    let hasError = false;

    if (!emailVal) {
      emailError.textContent = "Email is required";
      hasError = true;
    } else {
      emailError.textContent = "";
    }

    if (!passwordVal) {
      passwordError.textContent = "Password is required";
      hasError = true;
    } else {
      passwordError.textContent = "";
    }

    if (hasError) {
      loginErrorMsg.textContent = "";
      return;
    }

    if (emailVal === validEmail && passwordVal === validPassword) {
      loginErrorMsg.style.color = "green";
      loginErrorMsg.textContent = "✅ Login successful!";
      alert("Logged in successfully!");
    } else {
      loginErrorMsg.style.color = "red";
      loginErrorMsg.textContent = "Invalid email or password ❌";
      emailInput.value = "";
      passwordInput.value = "";
    }
  });

  // Optional: add click for Sign Up and Forgot Password
//   document.getElementById("signupLink").addEventListener("click", () => {
//     alert("Redirect to Sign Up page");
//   });

  document.getElementById("forgotPassword").addEventListener("click", () => {
    alert("Redirect to Forgot Password page");
          

  });
});




if (emailVal === validEmail && passwordVal === validPassword) {
  loginErrorMsg.style.color = "green";
  loginErrorMsg.textContent = "✅ Login successful!";
  alert("Logged in successfully!");
} else {
  loginErrorMsg.style.color = "red";
  loginErrorMsg.textContent = "❌ Invalid email or password";
  emailInput.value = "";
  passwordInput.value = "";
}
