"use strict"
// Введення даних, позначення величин

const userRows = parseFloat(prompt('Введіть кількість рядків таблиці'))
const userCols = parseFloat(prompt('Введіть кількість стовпців таблиці'))
const userContent = prompt('Введіть вміст клітинки таблиці, до 10 символів')

// Обчислення результатів

function createTable(rows, cols, cont) {
   let resTable = ''
   for (let r = 0; r < rows; r++) {
      resTable += `<tr>`
      for (let c = 0; c < cols; c++) {
         resTable += `<td>${cont}</td>`
      }
      resTable += `</tr>`
   }
   return document.write(`<table border="2px"><tbody>${resTable}</tbody></table>`)
}

// Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

let table = createTable(userRows, userCols, userContent)

document.write(`</div>`)
