let h1hour = document.getElementById("h1hour")
let h1min = document.getElementById("h1min")
let h1sec = document.getElementById("h1sec")
let datediv = document.getElementById("date")



setInterval(() => {


    const date = new Date();
    h1hour.innerText = date.getHours();
    h1min.innerHTML = `<span class="leftspan">:</span>25<span class="rightspan">:</span>`;
    h1sec.innerText = date.getSeconds();
    

}, 500)


let cornoment = document.getElementById("button")
cornoment.addEventListener("click", () => {
    cornoment.style.zIndex = ("-1")
    cornoment.style.left = ("calc(50% + 8%)")

    setTimeout(() => {
        cornoment.style.zIndex = ("2")
        cornoment.style.left = ("calc(50% + 8.5%)")
    }, 100);
    

})


