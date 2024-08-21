"use strict"
// Введення даних, позначення величин

let tempIndCount = 10

// Обчислення результатів

function getNegTemps() {
   let negTempInd = 0
   for (let i = 1; i <= tempIndCount; i++) {
      let userTempInd = parseInt(prompt('Введіть показник температури за ${i} день'))
      if (userTempInd < 0) negTempInd++
   }
   return negTempInd
}

// Виведення результатів

let negTempNum = getNegTemps()

document.write(`<div class="container" style="text-align:center">`)

document.write(`<p>Від'ємних показів температури було ${negTempNum}</p>`)

document.write(`</div>`)
