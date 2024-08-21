"use strict"
// Крок 0. Введення даних, позначення величин

let monthName = getMonthName()

// Крок 1. Обчислення результатів

function getMonthName() {
	let monthNum
	let monthName
	let isValid = false

	while (!isValid) {
		monthNum = parseFloat(prompt("Введіть номер місяця (від 1 до 12):"))
		switch (monthNum) {
			case 1:
				monthName = "Січень"
				isValid = true
				break
			case 2:
				monthName = "Лютий"
				isValid = true
				break
			case 3:
				monthName = "Березень"
				isValid = true
				break
			case 4:
				monthName = "Квітень"
				isValid = true
				break
			case 5:
				season = "Травень"
				isValid = true
				break
			case 6:
				monthName = "Червень"
				isValid = true
				break
			case 7:
				monthName = "Липень"
				isValid = true
				break
			case 8:
				season = "Серпень"
				isValid = true
				break
			case 9:
				monthName = "Вересень"
				isValid = true
				break
			case 10:
				monthName = "Жовтень"
				isValid = true
				break
			case 11:
				monthName = "Листопад"
				isValid = true
				break
			case 12:
				monthName = "Грудень"
				isValid = true
				break
			default:
				alert("Введено некоректний номер місяця. Будь ласка, спробуйте ще раз.")
		}
	}

	return monthName
}

// крок 2. Виведення результатів

document.write(`<div class="container" style="text-align:center">`)
document.write(`<p>Назва місяця - ${monthName}</p>`)
document.write(`</div>`)