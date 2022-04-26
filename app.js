'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

let summ = 0

const Target = document.querySelectorAll(".featuredItem");
const numberOfProduct = document.querySelector(".cartIconWrap").querySelector("span");
const bukket = document.querySelector(".bukett");
const bukketResult = document.querySelector(".summ");
const afterParametr = document.querySelector(".hr");
const icons = document.querySelector(".cartIcon");
let buketResultCost = 0;

let data = {};

Target.forEach(elemet => elemet.addEventListener("click", (event) => {
    if (event.target.nodeName === 'BUTTON') {
        summ += 1;
        numberOfProduct.textContent = summ;

        let targetData = elemet.querySelector(".featuredData")

        let nameClass = targetData.querySelector(".featuredName")
            .textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ');

        if (data[nameClass] === undefined) {
            data[nameClass] = {};
        }

        let id = targetData.querySelector(".id")
            .textContent.trim();

        data[nameClass].id = id;

        data[nameClass].name = nameClass;

        data[nameClass].cost = Number(targetData.querySelector(".featuredPrice")
            .textContent.replace(/[^0-9,.]/g, ''));
        data[nameClass].quality = data[nameClass].quality === undefined ?
            1 :
            data[nameClass].quality + 1


        data[nameClass].result = data[nameClass].quality * data[nameClass].cost;
        data[nameClass].result = ceils(data[nameClass].result);

        if (data[nameClass].quality === 1){
        let string = `
            <div class = "${data[nameClass].id} values">
                <div class="value nameProduct">${data[nameClass].name}</div>
                <div class="value quality">${data[nameClass].quality}</div>
                <div class="value porductCost">$${data[nameClass].cost}</div>
                <div class="value summProductCost">$${data[nameClass].result}</div>
            </div>`
            afterParametr.insertAdjacentHTML("afterend", string);
        }
        else{
        document.querySelector(`.${data[nameClass].id}`)
            .querySelector(".quality").textContent = `${data[nameClass].quality}`;
        document.querySelector(`.${data[nameClass].id}`)
            .querySelector(".summProductCost").textContent = `$${data[nameClass].result}`;
        }
        for (let key in data){
            buketResultCost += data[key].result
        }
        buketResultCost = ceils(buketResultCost);
        bukketResult.textContent = `Товаров в корзине на сумму: $${buketResultCost}`
    }

    
}))

icons.addEventListener("click", (event) => {
    if (bukket.style.display == "none"){
        bukket.style.display = "block";
    }
    else{
        bukket.style.display = "none"
    }
    console.dir(event);
})

function ceils (number){
    number = number * 100;
    number = Math.ceil(number);
    number = number / 100;
    return number
}