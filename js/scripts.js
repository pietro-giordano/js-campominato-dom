/*
1. Creare funzione che generi 16 numeri casuali in base al livello e li conservi solo se nn già generati
2. Al click se numero cella è uguale a numero bomba casella diventa rossa sennò verde
3. Se casella diventa rossa gioco finisce altrimenti finisce dopo aver cliccato tutte le verdi
4. Generare punteggio (numero di click prima della fine del gioco) man mano e a fine partita
*/
const gridGame = document.getElementById('grid-game');
const play = document.getElementById('play');

const bombs = [];
const wOrL = document.querySelector('.w-or-l');
const finalPoints = document.querySelector('.final-points');

play.addEventListener('click',

      function() {

            gridGame.innerHTML = '';

            const level = parseInt(document.getElementById('level').value);

            genBombs(level);
            console.log(bombs);

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

                  // console.log(bombs);

                  newCell.addEventListener('click',
                  
                        function () {

                              if (bombs.includes(i)) {

                                    this.classList.add('bomb');
                                    wOrL.innerHTML = 'Hai perso!';

                              } else {

                                    this.classList.add('point');

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

// function clickCheck(cell) {

//       if(bombs.includes(i)) {

//             cell.classList.add('clickbomb');

//       } else {

//             cell.classList.add('clickpoint');

//       }

// }