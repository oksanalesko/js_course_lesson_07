"use strict"
// Введення даних, позначення величин

const img1Path = "img/img1.jpg"
const img2Path = "img/img2.jpg"
const img3Path = "img/img3.jpg"
const img4Path = "img/img4.jpg"

// Обчислення результатів

function outputImage(a, b, c, d) {
	const randomImage = Math.floor(1 + Math.random() * 4)
	let pathImage
	switch (randomImage) {
		case 1:
			pathImage = a
			break
		case 2:
			pathImage = b
			break
		case 3:
			pathImage = c
			break
		case 4:
			pathImage = d
			break
   }
   return document.write(`<img src="${pathImage}" alt="#">`)
}

// Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

let image = outputImage(img1Path, img2Path, img3Path, img4Path)

document.write(`</div>`)
