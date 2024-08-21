"use strict"

// Крок 0. Введення даних, позначення величин

let season = getSeason()

// Крок 1. Обчислення результатів

function getSeason() {
	let monthNum
	let season
	let isValid = false

	while (!isValid) {
		monthNum = parseFloat(prompt("Введіть номер місяця (від 1 до 12):"))
		switch (monthNum) {
			case 1:
			case 2:
			case 12:
				season = "Зима"
				isValid = true
				break
			case 3:
			case 4:
			case 5:
				season = "Весна"
				isValid = true
				break
			case 6:
			case 7:
			case 8:
				season = "Літо"
				isValid = true
				break
			case 9:
			case 10:
			case 11:
				season = "Осінь"
				isValid = true
				break
			default:
				alert("Введено некоректний номер місяця. Будь ласка, спробуйте ще раз.")
		}
	}

	return season
}

// крок 2. Виведення результатів
document.write(`<div class="container" style="text-align:center">`)
document.write(`<p>Пора року - ${season}</p>`)
document.write(`</div>`)
