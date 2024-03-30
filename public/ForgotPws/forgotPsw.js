document
  .getElementById("forgotPsw-form")
  .addEventListener("submit", async function handleForgotPsw(e) {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    const response = await fetch(
      "http://3.110.169.84:4000/password/forgotpassword",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      }
    );
    e.target.email.value = "";
    console.log(response);
  });
