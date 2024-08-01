let h1hour = document.getElementById("h1hour")
let h1min = document.getElementById("h1min")
let h1sec = document.getElementById("h1sec")
let cornoment = document.getElementById("button")

let houp = document.getElementById("houp")
let hodawn = document.getElementById("hodawn")
let minup = document.getElementById("minup")
let mindawn = document.getElementById("mindawn")
let secup = document.getElementById("secup")
let secdawn = document.getElementById("secdawn")





let intelval = setInterval(() => {


    const date = new Date();
    h1hour.innerText = date.getHours();
    h1min.innerHTML = `<span class="leftspan">:</span>${date.getMinutes()}<span class="rightspan">:</span>`;
    h1sec.innerText = date.getSeconds();


}, 500)


function alertresulat() {



    minnumber = 1

    houp.addEventListener("click", () => {
        h1hour.innerText++
        h1hour = document.getElementById("h1hour")
        console.log((h1hour.innerText));
    })
    hodawn.addEventListener("click", () => {
        h1hour.innerText--
        h1hour = document.getElementById("h1hour")
        console.log(h1hour.innerText);
    })
    minup.addEventListener("click", () => {
        h1min.innerHTML = `<span class="leftspan">:</span>${minnumber++}<span class="rightspan">:</span>`
        h1min = document.getElementById("h1min")
        console.log(minnumber);
    })
    mindawn.addEventListener("click", () => {
        h1min.innerHTML = `<span class="leftspan">:</span>${minnumber--}<span class="rightspan">:</span>`
        h1min = document.getElementById("h1min")
        console.log(minnumber);
    })
    secup.addEventListener("click", () => {
        h1sec.innerText++
        h1sec = document.getElementById("h1sec")
        console.log(h1sec.innerText);
    })
    secdawn.addEventListener("click", () => {
        h1sec.innerText--
        h1sec = document.getElementById("h1sec")
        console.log(h1sec.innerText);
    })

    return `${h1hour.innerText}${minnumber}${h1sec.innerText}`
}

let alarm = setInterval(alertresulat(), 500);



cornoment.addEventListener("click", () => {

    


    




    houp.style.opacity = ("1")
    hodawn.style.opacity = ("1")
    minup.style.opacity = ("1")
    mindawn.style.opacity = ("1")
    secup.style.opacity = ("1")
    secdawn.style.opacity = ("1")

    houp.style.top = ("calc(50% - 85px)")
    hodawn.style.top = ("calc(50% + 25px)")
    minup.style.top = ("calc(50% - 85px)")
    mindawn.style.top = ("calc(50% + 25px)")
    secup.style.top = ("calc(50% - 85px)")
    secdawn.style.top = ("calc(50% + 25px)")

    houp.style.zIndex = ("3")
    hodawn.style.zIndex = ("3")
    minup.style.zIndex = ("3")
    mindawn.style.zIndex = ("3")
    secup.style.zIndex = ("3")
    secdawn.style.zIndex = ("3")


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

    

    houp.style.opacity = ("0")
    hodawn.style.opacity = ("0")
    minup.style.opacity = ("0")
    mindawn.style.opacity = ("0")
    secup.style.opacity = ("0")
    secdawn.style.opacity = ("0")

    houp.style.top = ("calc(50% - 5px)")
    hodawn.style.top = ("calc(50% - 50px)")
    minup.style.top = ("calc(50% - 5px)")
    mindawn.style.top = ("calc(50% - 50px)")
    secup.style.top = ("calc(50% - 5px)")
    secdawn.style.top = ("calc(50% - 50px)")

    houp.style.zIndex = ("-2")
    hodawn.style.zIndex = ("-2")
    minup.style.zIndex = ("-2")
    mindawn.style.zIndex = ("-2")
    secup.style.zIndex = ("-2")
    secdawn.style.zIndex = ("-2")


    intelval = setInterval(() => {

        const date = new Date();
        h1hour.innerText = date.getHours();
        h1min.innerHTML = `<span class="leftspan">:</span>${date.getMinutes()}<span class="rightspan">:</span>`;
        h1sec.innerText = date.getSeconds();

    }, 500);


    clearInterval(alarm)

},)

