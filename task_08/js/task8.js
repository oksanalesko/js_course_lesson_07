"use strict"
// Введення даних, позначення величин

const image = 'img/image-ban.jpg'
const link = 'https://lezhepekova.com/'
const headline = 'Заходьте на сайт!'

// Обчислення результатів

let banner = (img, lk, hd) => document.write(`<a href="${lk}"><img class="image-ban" src="${img}" alt="">${hd}</a>`)

// Виведення результатів

document.write(`<div class="container" style="text-align:center">`)

banner(image, link, headline)

document.write(`</div>`)
