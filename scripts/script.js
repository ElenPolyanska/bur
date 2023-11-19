// MAIN-BTN SMOOTH
const mainBtn = document.getElementById('main-action-btn')
mainBtn.addEventListener('click', mainBtnHandler)

function mainBtnHandler() {
    document.getElementById('products').scrollIntoView({ behavior: "smooth" })
}

// NAV SMOOTH
const navList = document.querySelectorAll('.nav-item>a')

navList.forEach(item => {
    item.addEventListener('click', navHandler)

    function navHandler() {
        const sectionName = item.getAttribute('data-link')
        document.getElementById(sectionName).scrollIntoView({ behavior: "smooth" })
    }
})

// ORDER SMOOTH

const productsList = document.querySelector('.products-list')
productsList.addEventListener('click', btnHandler)

function btnHandler(e) {
    if (e.target.nodeName === "BUTTON") {
        document.getElementById('order').scrollIntoView({ behavior: "smooth" })
    }
}

// ORDER MODAL
const backdrop = document.querySelector('.backdrop')
const closeBtn = document.querySelector('.close-btn')
const okBtn = document.querySelector('.ok')

function openModal() {
    backdrop.classList.add('active')
}

window.addEventListener('click', modalCloseHandler)
function modalCloseHandler(e) {
    if ([backdrop, closeBtn, okBtn].includes(e.target)) {
        backdrop.classList.remove('active')
    }
}

// VALIDATION FORM

const burger = document.getElementById('burger')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const checkout = document.getElementById('order-action')
checkout.addEventListener('click', () => {
    let hasError = false
    const arr = [burger, name, phone]

    arr.forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red'
            hasError = true
        } else {
            item.parentElement.style.background = ''
        }
    })
    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = ''
        })
        openModal()
    }
})

// CURRENCY

const prices = document.querySelectorAll('.products-price')
const changeCurrency = document.getElementById('change-currency')

changeCurrency.addEventListener('click', currencyHandler)

function currencyHandler(e) {
    let currentCurrency = e.target.innerText
    let newCurrency = '$'
    let coefficient = 1

    if (currentCurrency === "$") {
        newCurrency = '#'
        coefficient = 0.7
    } else if (currentCurrency === '#') {
        newCurrency = '*'
        coefficient = 20
    } else if (currentCurrency === '*') {
        newCurrency = '~'
        coefficient = 13
    } else if (currentCurrency === '~') {
        newCurrency = '&'
        coefficient = 2
    } else if (currentCurrency === '&') {
        newCurrency = '@'
        coefficient = 120
    }
    e.target.innerText = newCurrency
    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i]
            .getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency
    }
}