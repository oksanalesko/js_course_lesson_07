"use strict"
// Введення даних, позначення величин

const userSm = parseInt(prompt('Введіть кількість сантиметрів'))
const userKg = parseInt(prompt('Введіть кількість кілограмів'))
const userKm = parseInt(prompt('Введіть кількість кілометрів'))

// Обчислення результатів

let inches = num => num / 2.54
let pounds = num => num / 0.453592
let miles = num => num / 1.60934

// Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

document.write(`<p>${userSm} см дорівнює ${inches(userSm).toFixed(2)} дюймів</p>`)
document.write(`<p>${userKg} кг дорівнює ${pounds(userKg).toFixed(2)} фунтів</p>`)
document.write(`<p>${userKm} км дорівнює ${miles(userKm).toFixed(2)} миль</p>`)

document.write(`</div>`)
