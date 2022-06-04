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
let Playing = true;

const SwitchPlayer = function() {
    document.getElementById(`current--${ActivePlayer}`).textContent = 0;
    CurrentScore = 0;
    ActivePlayer = ActivePlayer === 0 ? 1 : 0;
    Player0Ele.classList.toggle('player--active');
    Player1Ele.classList.toggle('player--active');
}

// Rolling dice functionality
BtnRoll.addEventListener('click', function() {
    if (Playing) {
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
            SwitchPlayer();
        }
    }
})

// Hold btn functionality
BtnHold.addEventListener('click', function() {
    if (Playing) {
        // 1. Add current score to active player's score
        Scores[ActivePlayer] += CurrentScore;
        document.getElementById(`score--${ActivePlayer}`).textContent = Scores[ActivePlayer];
        
        // 2. Check if active player's score is >= 100 : FINISH GAME
        if (Scores[ActivePlayer] >= 20) {
            Playing = false;
            DiceEle.classList.add('hidden');
            document.querySelector(`.player--${ActivePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${ActivePlayer}`).classList.remove('player--active');
        }
        else {
            // 3. Switch to next player
            SwitchPlayer();
        }
    }
})