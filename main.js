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
let alarmdiv =document.getElementById("alarm")

let newaudio = document.createElement("audio")
newaudio.innerHTML = ""




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

    
    return result = [Number(h1hour.innerText), Number(h1min.innerText), Number(h1sec.innerText)]
    
}

let alarm =0
let alarmso = 0



let counter = 4
console.log(counter)


cornoment.addEventListener("click", () => {




    if (counter % 2 == 0) {


        alarm = 0
        alarm = alertresulat()
        console.log(alarm);
        


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
    
    clearInterval(intelval)
    clearInterval(alarmso)
    

    setTimeout(() => {


        cornoment.style.zIndex = ("2")
        cornoment.style.left = ("calc(50% + 8.5%)")


    }, 30);


})





cornoment.addEventListener("dblclick", () => {


    
    console.log(alarm);





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
        h1min.innerHTML = date.getMinutes();
        h1sec.innerText = date.getSeconds();

    }, 500);

    
    alarmso = setInterval(() => {

        if (alarm[0]  == h1hour.innerText && alarm[1]  == h1min.innerText && alarm[2]  == h1sec.innerText) {
            console.log("alrm zadd")
            // document.write(`<h1>ali bidar sho suat ${h1hour.innerText}:${h1min.innerText}:${h1sec.innerText}</h1>`)

            alarmdiv.innerText = `ali bidar sho suat${h1hour.innerText}:${h1min.innerText}:${h1sec.innerText}`
            
            setTimeout(() => {
                clearInterval(alarmso)
                alarmdiv.innerText = ""
            }, 5000);
        } else {
            console.log("alarm nazad");
        }


    }, 450);


    

},)

