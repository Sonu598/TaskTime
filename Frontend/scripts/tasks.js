let task=document.getElementById("task")
let detail=document.getElementById("task-details")
let creater=document.getElementById("creater")
let create=document.getElementById("create-btn")

create.addEventListener("click",(e)=>{
    e.preventDefault()
    let payload={
        task:task.value,
        detail:detail.value,
        creater:creater.value
    }
    console.log(payload);
    fetch("http://localhost:2015/tasktime/task/create",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization":localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    }).then(res=>res.json())
    .then((res)=>{
        if(res.msg==="Task created"){
            alert("Task created.")
            window.location.href="./userpage.html"
        }else {
            alert("Something went wrong!")
        }
    })
})