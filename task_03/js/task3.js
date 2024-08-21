"use strict"
// Введення даних, позначення величин

const n1 = parseInt(prompt('Введіть перше число'))
const n2 = parseInt(prompt('Введіть друге число'))
const n3 = parseInt(prompt('Введіть третє число'))
const n4 = parseInt(prompt('Введіть четверте число'))

// Обчислення результатів

let sum = (a, b, c, d) => a + b + c + d
let product = (a, b, c, d) => a * b * c * d
let average = (a, b, c, d) => (a + b + c + d) / 4
let minNum = (a, b, c, d) => {
   let min = a 
   if (b < min) min = b 
   if (c < min) min = c 
   if (d < min) min = d 
   return min
}

// Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

document.write(`<p>Сума чисел складає ${sum(n1, n2, n3, n4)}</p>`)
document.write(`<p>Добуток чисел складає ${product(n1, n2, n3, n4)}</p>`)
document.write(`<p>Середнє арифметичне складає ${average(n1, n2, n3, n4)}</p>`)
document.write(`<p>Мінімальне значення серед чисел складає ${minNum(n1, n2, n3, n4)}</p>`)

document.write(`</div>`)
