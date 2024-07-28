let h1hour = document.getElementById("h1hour")
let h1min = document.getElementById("h1min")
let h1sec = document.getElementById("h1sec")



const date = new Date();
h1hour.innerText = date.getHours();
h1min.innerText = date.getMinutes();
h1sec.innerText = date.getSeconds();


setInterval(() => {


    const date = new Date();
    h1hour.innerText = date.getHours();
    h1min.innerText = date.getMinutes();
    h1sec.innerText = date.getSeconds();

} ,1000)


