let h1hour = document.getElementById("h1hour")
let h1min = document.getElementById("h1min")
let h1sec = document.getElementById("h1sec")
let cornoment = document.getElementById("button")




let intelval = setInterval(() => {


    const date = new Date();
    h1hour.innerText = date.getHours();
    h1min.innerHTML = `<span class="leftspan">:</span>${date.getMinutes()}<span class="rightspan">:</span>`;
    h1sec.innerText = date.getSeconds();


}, 500)




cornoment.addEventListener("click", () => {

    cornoment.style.zIndex = ("-1")
    cornoment.style.left = ("calc(50% + 8%)")



    h1hour.innerText = "00";
    h1min.innerHTML = `<span class="leftspan">:</span>${"00"}<span class="rightspan">:</span>`;
    h1sec.innerText = "00";

    clearInterval(intelval)

    setTimeout(() => {
        cornoment.style.zIndex = ("2")
        cornoment.style.left = ("calc(50% + 8.5%)")
        
        
    }, 40);

})





cornoment.addEventListener("dblclick", () => {

    
    
    intelval = setInterval(() => {

        const date = new Date();
        h1hour.innerText = date.getHours();
        h1min.innerHTML = `<span class="leftspan">:</span>${date.getMinutes()}<span class="rightspan">:</span>`;
        h1sec.innerText = date.getSeconds();

    }, 500);

},)

