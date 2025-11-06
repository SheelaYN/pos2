// =============================
// 🌟 Original Code (unchanged)
// =============================
const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const signupBtn = document.getElementById("signupBtn");
const otpInput = document.getElementById("otp");
const emailInput = document.getElementById("email");
const passwordInput = document.querySelector('input[name="password"]');
const statusMsg = document.getElementById("statusMsg");
const nameInput = document.querySelector('input[name="name"]');
const phoneInput = document.querySelector('input[name="phone"]');




    // const nameVal = nameInput.value.trim();
    // const phoneVal = phoneInput.value.trim();
    // const emailVal = emailInput.value.trim();
    // const passwordVal = passwordInput.value.trim();

    // // Clear previous errors
    // signupErrorMsg.textContent = "";
    // nameError.textContent = "";
    // phoneError.textContent = "";
    // emailError.textContent = "";
    // passwordError.textContent = "";

   

function validateSignUp() {
  console.log("bye1")
  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();
  const emailVal = emailInput.value.trim();
  const passwordVal = passwordInput.value.trim();

  if (!nameVal && !phoneVal && !emailVal && !passwordVal) {
    // ✅ Show error below logo
    statusMsg.textContent = "❌ Please fill all the input fields!";
    statusMsg.style.color = "red";
    return false; // Stop form submission
  }

  return true; // All fields not empty
}





// 📩 Send OTP
// sendOtpBtn.onclick = function () {
//   const email = emailInput.value.trim();
//   if (!email) {
//     statusMsg.textContent = "⚠️ Please enter your email first!";
//     statusMsg.style.color = "orange";
//     return;
//   }

//   statusMsg.textContent = "Sending OTP...";
//   statusMsg.style.color = "white";

//   fetch("/send_otp", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: email }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       statusMsg.textContent = data.message;
//       if (data.success) {
//         otpInput.disabled = false;
//         verifyOtpBtn.disabled = false;
//         statusMsg.style.color = "lightgreen";
//       } else {
//         statusMsg.style.color = "red";
//       }
//     })
//     .catch(() => {
//       statusMsg.textContent = "❌ Error sending OTP!";
//       statusMsg.style.color = "red";
//     });
// };

// ✅ Verify OTP

// verifyOtpBtn.onclick = function () {
//   const email = emailInput.value.trim();
//   const otp = otpInput.value.trim();

//   if (!otp) {
//     statusMsg.textContent = "⚠️ Enter OTP to verify!";
//     statusMsg.style.color = "orange";
//     return;
//   }

//   statusMsg.textContent = "Verifying OTP...";
//   statusMsg.style.color = "white";

//   fetch("/verify_otp", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email: email, otp: otp }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       statusMsg.textContent = data.message;
//       if (data.success) {
//         verifyOtpBtn.disabled = true;
//         otpInput.disabled = true;
//         passwordInput.disabled = false;
//         signupBtn.disabled = false;
//         statusMsg.style.color = "lightgreen";
//       } else {
//         statusMsg.style.color = "red";
//       }
//     })
//     .catch(() => {
//       statusMsg.textContent = "❌ Verification failed!";
//       statusMsg.style.color = "red";
//     });
// };





// 📩 Send OTP
sendOtpBtn.onclick = function () {
  const email = emailInput.value.trim();
  if (!email) {
    statusMsg.textContent = "⚠️ Please enter your email first!";
    statusMsg.style.color = "orange";
    return;
  }

  statusMsg.textContent = "Sending OTP...";
  statusMsg.style.color = "white";

  fetch("/send_otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  })
    .then((res) => res.json())
    .then((data) => {
      statusMsg.textContent = data.message;
      if (data.success) {
        otpInput.disabled = false;
        verifyOtpBtn.disabled = false;
        statusMsg.style.color = "lightgreen";
      } else {
        statusMsg.style.color = "red";
      }
    })
    .catch(() => {
      statusMsg.textContent = "❌ Error sending OTP!";
      statusMsg.style.color = "red";
    });
};

// ✅ Verify OTP
verifyOtpBtn.onclick = function () {
  const email = emailInput.value.trim();
  const otp = otpInput.value.trim();

  if (!otp) {
    statusMsg.textContent = "⚠️ Enter OTP to verify!";
    statusMsg.style.color = "orange";
    return;
  }

  statusMsg.textContent = "Verifying OTP...";
  statusMsg.style.color = "white";

  fetch("/verify_otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, otp: otp }),
  })
    .then((res) => res.json())
    .then((data) => {
      statusMsg.textContent = data.message;
      if (data.success) {
        verifyOtpBtn.disabled = true;
        otpInput.disabled = true;
        passwordInput.disabled = false;
        signupBtn.disabled = false;
        statusMsg.style.color = "lightgreen";
      } else {
        statusMsg.style.color = "red";
      }
    })
    .catch(() => {
      statusMsg.textContent = "❌ Verification failed!";
      statusMsg.style.color = "red";
    });
};

// 🧾 Dummy Signup Submit
document.getElementById("signupForm").onsubmit = function (e) {
  e.preventDefault();
  alert("✅ OTP verified! You can now save user data to the database.");
};






// =============================
// 🌟 Validation + Error Handling
// =============================
const nameRegex = /^[A-Za-z\s]{3,}$/;
const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

function showError(input, message) {
  clearError(input);
  const parentGroup = input.closest(".input-group");
  if (!parentGroup) return;

  let existingError = parentGroup.querySelector(".error-msg");
  if (!existingError) {
    existingError = document.createElement("small");
    existingError.classList.add("error-msg");
    existingError.style.color = "red";
    existingError.style.display = "block";
    existingError.style.marginTop = "4px";
    parentGroup.appendChild(existingError);
  }
  existingError.textContent = message;
  input.style.borderColor = "red";
}

function clearError(input) {
  const parentGroup = input.closest(".input-group");
  if (!parentGroup) return;
  const existingError = parentGroup.querySelector(".error-msg");
  if (existingError) existingError.remove();
  input.style.borderColor = "";
}

function validateName() {
  const val = nameInput.value.trim();
  if (!val) { showError(nameInput, "Name is required"); return false; }
  if (!nameRegex.test(val)) { showError(nameInput, "Only letters allowed (minimum 3 chars)"); return false; }
  clearError(nameInput);
  return true;
}

// function validatePhone() {
//   const val = phoneInput.value.trim();
//   if (!val) { showError(phoneInput, "Phone number is required"); return false; }
//   if (!phoneRegex.test(val)) { showError(phoneInput, "Enter a valid 10-digit number"); return false; }
//   clearError(phoneInput);
//   return true;
// }
// phoneInput.addEventListener("input", () => {
//   let val = phoneInput.value;

//   // Remove non-digit characters
//   const digitsOnly = val.replace(/\D/g, "");

//   // Show error if any non-digit was entered
//   if (val !== digitsOnly) {
//     showError(phoneInput, "Only numbers are allowed");
//   } else {
//     clearError(phoneInput);
//   }

//   // Limit to 10 digits
//   if (digitsOnly.length > 10) {
//     phoneInput.value = digitsOnly.slice(0, 10);
//   } else {
//     phoneInput.value = digitsOnly;
//   }
// });





// phoneInput.addEventListener("input", () => {
//   let val = phoneInput.value;

//   // Remove non-digit characters
//   const digitsOnly = val.replace(/\D/g, "");

//   // Show error if non-digit was typed
//   if (val !== digitsOnly) {
//     showError(phoneInput, "Only numbers are allowed");
//   } 
//   // Show error if less than 10 digits
//   else if (digitsOnly.length < 10) {
//     showError(phoneInput, "Enter a valid 10-digit number");
//   } 
//   // Clear error when exactly 10 digits
//   else {
//     clearError(phoneInput);
//   }

//   // Limit to 10 digits
//   if (digitsOnly.length > 10) {
//     phoneInput.value = digitsOnly.slice(0, 10);
//   } else {
//     phoneInput.value = digitsOnly;
//   }
// });





function validatePhone() {
  const val = phoneInput.value.trim();

  if (!val) {
    showError(phoneInput, "Phone number is required");
    return false;
  }

  if (val.length < 10) {
    showError(phoneInput, "Enter a valid 10-digit number");
    return false;
  }

  if (!/^\d{10}$/.test(val)) {
    showError(phoneInput, "Only numbers are allowed");
    return false;
  }

  clearError(phoneInput);
  return true;
}

phoneInput.addEventListener("input", () => {
  // Remove non-digit characters
  phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 10);

  // Call validatePhone to show live error
  validatePhone();
});




function validateEmail() {
  const val = emailInput.value.trim();
  if (!val) { showError(emailInput, "Email is required"); return false; }
  if (!emailRegex.test(val)) { showError(emailInput, "Enter include @gmail.com"); return false; }
  clearError(emailInput);
  return true;
}

function validatePassword() {
  const val = passwordInput.value.trim();
  if (passwordInput.disabled) return true;
  if (!val) { showError(passwordInput, "Password is required"); return false; }
  if (!passwordRegex.test(val)) { showError(passwordInput, "Min 8 chars, 1 uppercase & 1 special char"); return false; }
  clearError(passwordInput);
  return true;
}

// ✅ Real-time validation
nameInput.addEventListener("input", validateName);
phoneInput.addEventListener("input", validatePhone);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// ✅ Sign Up submit validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  console.log("bye");
  const validName = validateName();
  const validPhone = validatePhone();
  const validEmail = validateEmail();
  const validPass = validatePassword();

  if (!validName || !validPhone || !validEmail || !validPass) {
    e.preventDefault();
    statusMsg.textContent = "❌ Please fill all fields correctly before signing up.";
    statusMsg.style.color = "red";
  } else {
    statusMsg.textContent = "✅ All inputs are valid!";
    statusMsg.style.color = "green";
  }
});

// 👁️ Toggle password visibilit






// 👁️ Toggle password visibility

// const togglePassword = document.getElementById("togglePassword");
// const eyeIcon = document.getElementById("eyeIcon");

// togglePassword.addEventListener("click", () => {
//   const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);

    


  // Toggle eye icon open/closed
//   if (type === "text") {
//     eyeIcon.innerHTML = `
//       <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.79 21.79 0 0 1 5.29-6.71M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.82 21.82 0 0 1-2.23 3.4M12 12a3 3 0 0 0 3 3M3 3l18 18"/>`;
//   } else {
//     eyeIcon.innerHTML = `
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//       <circle cx="12" cy="12" r="3"></circle>`;
//   }
// });






togglePassword.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle eye icon
  if (type === "text") {
    eyeIcon.innerHTML = `
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C5 20 1 12 1 12a21.79 21.79 0 0 1 5.29-6.71M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.82 21.82 0 0 1-2.23 3.4M12 12a3 3 0 0 0 3 3M3 3l18 18"/>`;
  } else {
    eyeIcon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>`;
  }
});




