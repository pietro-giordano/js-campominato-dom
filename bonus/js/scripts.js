/*
1. Creare funzione che generi 16 numeri casuali in base al livello e li conservi solo se nn già generati
2. Al click se numero cella è uguale a numero bomba casella diventa rossa sennò verde
3. Se casella diventa rossa gioco finisce altrimenti finisce dopo aver cliccato tutte le verdi
4. Generare punteggio (numero di click prima della fine del gioco) man mano e a fine partita
*/
const main = document.querySelector('main');
const gridGame = document.getElementById('grid-game');
const play = document.getElementById('play');

const bombs = [];
const points = [];
const wOrL = document.querySelector('.w-or-l');
const finalPoints = document.querySelector('.final-points');

play.addEventListener('click',

      function() {

            gridGame.innerHTML = '';
            wOrL.innerHTML = '';
            finalPoints.innerHTML = '';

            const level = parseInt(document.getElementById('level').value);

            const over = document.createElement('div');
            gridGame.append(over);
            
            genBombs(level);
            console.log(bombs);
            resetPoints();

            for(let i = 1; i <= level; i++) {

                  const newCell = document.createElement('div');
                  newCell.classList.add('cell');
                  newCell.innerHTML = i;

                  if(level == 100) {
                        newCell.classList.add('easy');
                  } else if (level == 81) {
                        newCell.classList.add('normal');
                  } else if (level == 49) {
                        newCell.classList.add('hard');
                  }

                  newCell.addEventListener('click',
                  
                        function () {

                              if (bombs.includes(i)) {

                                    this.classList.add('bomb');
                                    wOrL.innerHTML = 'You lose! Click play for another game';
                                    finalPoints.innerHTML = 'Your final score is: ' + points.length;

                                    over.classList.add('overlay');

                              } else {

                                    this.classList.add('point');
                                    points.push('+1');
                                    
                                    wOrL.innerHTML = '';
                                    finalPoints.innerHTML = 'Your score is: ' + points.length;

                                    if(points.length == level - 16) {

                                          wOrL.innerHTML = 'You win! Click play for another game';
                                          finalPoints.innerHTML = 'Your final score is: ' + points.length;

                                          over.classList.add('overlay');

                                    }

                              }

                        }

                  );

                  gridGame.append(newCell);

            }

      }

)

//-----------------------------------------------------------------------------------------------------------------------------

function genBombs(num) {

      for(let i = 0; i < bombs.length; i++) {

            bombs.splice(i);

      }

      while(bombs.length < 16) {

            const numRandom = Math.floor(Math.random() * (num + 1));

            if(bombs.includes(numRandom) == false) {

                  bombs.push(numRandom);

            }

      }

}

function resetPoints() {

      for(let i = 0; i < points.length; i++) {

            points.splice(i);

      }

}

function overlay() {

      

}

// function clickCheck(cell) {

//       if(bombs.includes(i)) {

//             cell.classList.add('clickbomb');

//       } else {

//             cell.classList.add('clickpoint');

//       }

// }