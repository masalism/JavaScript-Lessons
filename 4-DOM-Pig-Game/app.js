/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//variables
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; //changing css

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. randon number
    var dice = Math.floor(Math.random() * 6) + 1; //random number 1-6

    // 2. display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; // dice- = nerasant iki galo pavadinimo parenka pats


    // 3. Update round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else { //dice = 1
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //tas paats kas virsuj
        /*
        if (activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
       roundScore = 0;

       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       

       //removing and adding classes in html
       //document.querySelector('.player-0-panel').classList.remove('active');
       //document.querySelector('.player-1-panel').classList.add('active');

       document.querySelector('.dice').style.display = 'none';
    }

});







//document.querySelector('#current-' + activePlayer).textContent = dice; //can only select text
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //selects html

//var x = document.querySelector('#score-0').textContent; //reads content