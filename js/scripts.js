/*
1. Creare funzione che generi 16 numeri casuali in base al livello e li conservi solo se nn già generati
2. Al click se numero cella è uguale a numero bomba casella diventa rossa sennò verde
3. Se casella diventa rossa gioco finisce altrimenti finisce dopo aver cliccato tutte le verdi
4. Generare punteggio (numero di click prima della fine del gioco) man mano e a fine partita
*/
const gridGame = document.getElementById('grid-game');
const play = document.getElementById('play');

const bombs = [];

play.addEventListener('click',

      function() {

            gridGame.innerHTML = '';

            const level = document.getElementById('level').value;

            genBombs();
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

                  newCell.addEventListener('click',
                  
                        function() {

                              if (this.classList.contains('clicked')) {
                                    this.classList.remove('clicked');
                              }
                              else {
                                    this.classList.add('clicked');
                              }

                              console.log('Hai cliccato la cella numero ' + i);

                        }

                  )

                  gridGame.append(newCell);

            }

      }

)

//-----------------------------------------------------------------------------------------------------------------------------

function genBombs() {

      for(let i = 0; i < bombs.length; i++) {

            bombs.splice(i);

      }

      for(let i = 0; i < 16; i++) {

            const numRandom = Math.floor(Math.random() * (16 + 1));

            if(numRandom != bombs[i]) {

                  bombs.push(numRandom);

            }

      }

}