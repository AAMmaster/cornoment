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
    h1hour.innerText = String(date.getHours());
    h1min.innerHTML = String(date.getMinutes());
    h1sec.innerText = String(date.getSeconds());


}, 500)

let result = ""
function alertresulat() {

    houp.addEventListener("click", () => {
        h1hour.innerText++
        h1hour = document.getElementById("h1hour")

    })
    hodawn.addEventListener("click", () => {
        h1hour.innerText--
        h1hour = document.getElementById("h1hour")

    })
    minup.addEventListener("click", () => {
        h1min.innerText++
        h1min = document.getElementById("h1min")

    })
    mindawn.addEventListener("click", () => {
        h1min.innerText--
        h1min = document.getElementById("h1min")

    })
    secup.addEventListener("click", () => {
        h1sec.innerText++
        h1sec = document.getElementById("h1sec")

    })
    secdawn.addEventListener("click", () => {
        h1sec.innerText--
        h1sec = document.getElementById("h1sec")

    })

    result = [h1hour.innerText, h1min.innerText, h1sec.innerText]
    console.log(result);
}

let alarm = 0
let alarmso = 0



let counter = 4
console.log(counter)


cornoment.addEventListener("click", () => {




    if (counter % 2 == 0) {

        alertresulat()


    } else {

        console.log("wared if nashod");


    }

    counter = counter + 1
    console.log(counter);






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
    h1min.innerHTML = "00";
    h1sec.innerText = "00";
    clearInterval(alarm)
    clearInterval(intelval)
    CloseEvent

    setTimeout(() => {


        cornoment.style.zIndex = ("2")
        cornoment.style.left = ("calc(50% + 8.5%)")


    }, 30);


})





cornoment.addEventListener("dblclick", () => {


    alarmso = setInterval(() => {

        if (result == h1hour.innerText && h1min.innerText && h1sec.innerText) {
            console.log("alrm zadd")
        } else {
            console.log("alarm nazad")
            clearInterval(alarm)
        }


    }, 500);





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

