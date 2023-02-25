// signup input
let sname = document.getElementById("name")
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signup-btn")

//sign-up

signup.addEventListener("click", (e) => {
    e.preventDefault()
    let payload = {
      name: sname.value,
      email: email.value,
      password: password.value
    }
    fetch("http://localhost:2015/user/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then((res) => {
        if (res.msg === "email is alredy present in database") {
          alert("email alredy exist");
        } else {
          alert(`Signup Successful !`);
          window.location.href="./login.html"
        }
        console.log(res)
      })
      .catch(err => console.log(err))
  })