"use strict"
// Введення даних, позначення величин

let tempIndCount = 10

// Обчислення результатів

function getAvPosTemps() {
   let posTempInd = 0
   let posTempNum = 0
   let avPosTemp
   for (let i = 1; i <= tempIndCount; i++) {
      let userTempInd = parseInt(prompt('Введіть показник температури за ${i} день, градусів Цельсія', '10'))
      if (userTempInd > 0) {
         posTempInd += userTempInd
         posTempNum++
      }
      avPosTemp = posTempInd / posTempNum
   }
   return avPosTemp
}

// Виведення результатів

let avPosTemp = getAvPosTemps()

document.write(`<div class="container" style="text-align:center">`)

document.write(`<p>Середнє значення додатних показів температури дорівнює ${avPosTemp.toFixed(1)} градусів</p>`)

document.write(`</div>`)
