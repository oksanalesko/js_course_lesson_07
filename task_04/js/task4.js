"use strict"
// Введення даних, позначення величин

const n1 = parseInt(prompt('Введіть перше число'))
const n2 = parseInt(prompt('Введіть друге число'))
const n3 = parseInt(prompt('Введіть третє число'))

// Обчислення результатів
// функції робила окремі для кожного результату

function getCountEvenNum(a, b, c) {
	let count = 0
	if (a % 2 === 0) count++
	if (b % 2 === 0) count++
	if (c % 2 === 0) count++
	return count
}

function getCountPositiveNum(a, b, c) {
	let count = 0
	if (a > 0) count++
	if (b > 0) count++
	if (c > 0) count++
	return count
}

function getCountGreater100Num(a, b, c) {
	let count = 0
	if (a > 100) count++
	if (b > 100) count++
	if (c > 100) count++
	return count
}

// Виведення результатів

let evenNum = getCountEvenNum(n1, n2, n3)
let positiveNum = getCountPositiveNum(n1, n2, n3)
let greater100Num = getCountGreater100Num(n1, n2, n3)

document.write(`<div class="container" style="text-align:center">`)

document.write(`<p>Кількість парних чисел ${evenNum}</p>`)
document.write(`<p>Кількість додатних чисел ${positiveNum}</p>`)
document.write(`<p>Кількість більших за 100 чисел ${greater100Num}</p>`)

document.write(`</div>`)