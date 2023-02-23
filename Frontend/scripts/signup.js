// signup input
let name = document.getElementById("name")
let email = document.getElementById("email");
let password = document.getElementById("password");

//sign-up

form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let payload = {
      name: name.value,
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
        if (res.msg === "email is alredy presend in database") {
          swal("email alredy exist");
        } else {
          window.location.href="D:\spiky-crook-9700\Frontend\login.html"
        }
        console.log(res)
      })
      .catch(err => console.log(err))
  })