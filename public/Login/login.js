
  // login----------------------------------
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", async function handleLogin(e) {
    try {
      console.log("control comes to me")
      e.preventDefault();
      const userData = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await fetch("http://3.110.169.84:4000/user/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      console.log(response);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        localStorage.setItem("authToken", result.token);
        window.alert("successfully login")
        window.location.href = '../Expense/expense.html';
      } else {
        const result = await response.json();
        // console.log(result);
        document.getElementById("message").innerHTML = result.message;
      }
    } catch (error) {
      console.log(error);
    }
  
  }
 )
 
  // forget password

  const forgetBtn = document.getElementById("forget-btn");

  forgetBtn.addEventListener("click", ()=>{
    window.location.href = "forgetPsw.html"
  })