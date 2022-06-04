'use strict';

// Selecting elements
const Score0Ele = document.querySelector('#score--0');
const Score1Ele = document.getElementById('score--1');
const DiceEle = document.querySelector('.dice');

// Starting conditions
Score0Ele.textContent = 0;
Score1Ele.textContent = 0;
DiceEle.classList.add('hidden');