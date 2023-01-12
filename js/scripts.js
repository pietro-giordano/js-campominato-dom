const gridGame = document.getElementById('grid-game');
const play = document.getElementById('play');

play.addEventListener('click',

      function() {

            gridGame.innerHTML = '';

            const level = document.getElementById('level').value;

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