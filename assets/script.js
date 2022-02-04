// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Delano Richards" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let tt = 0 // Total

// selecting the element with an id of credit
let credit = document.querySelector('#credit')

// selecting the element id's
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let gbTol  = document.querySelector('#qty-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let ccTol = document.querySelector('#qty-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let sugarTol = document.querySelector('#qty-sugar')
let Tol = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Gingerbread Events
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbTol.textContent = gb
    tt++
    Tol.textContent = tt
})

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
        gb--
        gbTol.textContent = gb
        tt--
        Tol.textContent = tt
    } else {null}
})

// Chocolate Chip Events
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccTol.textContent = cc
    tt++
    Tol.textContent = tt
})

ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc--
        ccTol.textContent = cc
        tt--
        Tol.textContent = tt
    } else {null}
})

// Sugar Sprinkle Events
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarTol.textContent = sugar
    tt++
    Tol.textContent = tt 
})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
        sugarTol.textContent = sugar
        tt--
        Tol.textContent = tt
    } else {null}
})

