const form = document.getElementById("LoginForm");

async function loginUser(event) {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(formData.get("email"), formData.get("password"));

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });
  const responseData = await response.json();

  console.log(responseData);
}

form.addEventListener("submit", loginUser);
