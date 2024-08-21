"use strict"

// Крок 0. Введення даних, позначення величин

let isWorkDay = getWorkDay()

// Крок 1. Обчислення результатів

function getWorkDay() {
	let dayNum
	let isWorkDay
	let isValid = false

	while (!isValid) {
		dayNum = parseFloat(prompt("Введіть номер дня тижня (від 1 до 7):"))
		switch (dayNum) {
			case 1:
			case 2:
         case 3:
         case 4:
			case 5:
				isWorkDay = "робочий день"
				isValid = true
				break
			case 6:
			case 7:
				isWorkDay = "не робочий день"
				isValid = true
				break
			default:
				alert("Введено некоректний номер дня тижня. Будь ласка, спробуйте ще раз.")
		}
	}

	return isWorkDay
}

// крок 2. Виведення результатів
document.write(`<div class="container" style="text-align:center">`)
document.write(`<p>Введений день тижня - ${isWorkDay}</p>`)
document.write(`</div>`)
