/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    if (isNaN(inputEl.value)) {
        alert("Please enter a valid number");
        return;
    } 
    convertLength();
    convertVolume();
    convertMass();
});

function convertLength() {
    const inputValue = parseFloat(inputEl.value);
    let feetConversion = (inputValue * 3.281).toFixed(3);
    let meterConversion = (inputValue / 3.281).toFixed(3);
    lengthEl.textContent = `${inputValue} meters = ${feetConversion} feet | ${inputValue} feet = ${meterConversion} meters`
};

function convertVolume() {
    const inputValue = parseFloat(inputEl.value);
    let gallonConversion = (inputValue * 0.264).toFixed(3);
    let literConversion = (inputValue / 0.264).toFixed(3);
    volumeEl.textContent = `${inputValue} liters = ${gallonConversion} gallons | ${inputValue} gallons = ${literConversion} liters`
};

function convertMass() {
    const inputValue = parseFloat(inputEl.value);
    let poundConversion = (inputValue * 0.264).toFixed(3);
    let kiloConversion = (inputValue / 0.264).toFixed(3);
    massEl.textContent = `${inputValue} kilos = ${poundConversion} pounds | ${inputValue} pounds = ${kiloConversion} kilos`
};