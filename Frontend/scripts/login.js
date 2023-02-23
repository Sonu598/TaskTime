//signup inputs
let email = document.getElementById("email");
let password = document.getElementById("password");

//sign-in

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let payload = {
    email: email.value,
    password: password.value
  }
  fetch("http://localhost:2015/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(payload)
  }).then(res => res.json())
    .then(res => {
      if(res.msg==="Login successful"){
        localStorage.setItem("token", res.token)
        console.log(res)
        swal("Good job!", "Lognin succesful", "success");
        setTimeout(() => {
          window.open("product.html");
        }, 1000)
      }else if(res.msg==="wrong credentials"){
        swal("Invalid !", "email & password did not match", "warning");
      }
      
    })
    .catch(err => console.log(err))
})    