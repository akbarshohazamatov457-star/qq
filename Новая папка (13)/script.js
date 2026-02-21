let hoursEL = document.getElementById("hours")
let minutesEL = document.getElementById("minutes")
let secondsEL = document.getElementById("seconds")

setInterval(() => {
    let day = new Date()

    let h = day.getHours()
    let m = day.getMinutes()
    let s = day.getSeconds()

    hoursEL.innerHTML = h
    minutesEL.innerHTML = m
    secondsEL.innerHTML = s
}, 1000)
