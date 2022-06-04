'use strict';

// Selecting elements
const Player0Ele = document.querySelector('.player--0');
const Player1Ele = document.querySelector('.player--1');
const Score0Ele = document.querySelector('#score--0');
const Score1Ele = document.getElementById('score--1');
const Current0Ele = document.getElementById('current--0');
const Current1Ele = document.getElementById('current--1');
const DiceEle = document.querySelector('.dice');
const BtnNew = document.querySelector('.btn--new');
const BtnRoll = document.querySelector('.btn--roll');
const BtnHold = document.querySelector('.btn--hold');

// Starting conditions
Score0Ele.textContent = 0;
Score1Ele.textContent = 0;
DiceEle.classList.add('hidden');

const Scores = [0,0];
let CurrentScore = 0;
let ActivePlayer = 0;

// Rolling dice functionality
BtnRoll.addEventListener('click', function() {
    // 1. Generate random dice roll
    const Dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    DiceEle.classList.remove('hidden');
    DiceEle.src = `dice-${Dice}.png`;

    // 3. Check roll
    if (Dice !== 1) {
        // Add dice to current score
        CurrentScore += Dice;
        document.getElementById(`current--${ActivePlayer}`).textContent = CurrentScore;
    }
    else {
        // Switch to next player
        document.getElementById(`current--${ActivePlayer}`).textContent = 0;
        CurrentScore = 0;
        ActivePlayer = ActivePlayer === 0 ? 1 : 0;
        Player0Ele.classList.toggle('player--active');
        Player1Ele.classList.toggle('player--active');
    }
})