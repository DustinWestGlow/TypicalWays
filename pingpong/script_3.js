let p1b, p2b, reset;
let player_one = 0;
let player_two = 0;
let winner = 0;
let max = 3;

// google ai generated
function docReady(fn) {
  // If the DOM is already interactive or complete, execute the callback immediately
  if (document.readyState !== "loading") {
      fn();
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

function update() {
  document.querySelector('#score_one').textContent = player_one;
  document.querySelector('#score_two').textContent = player_two;
}

function win() {
  if (winner == 1) {
    document.querySelector('#score_one').style.color = '#3f3';
    document.querySelector('#score_two').style.color = '#f33';
  } else if (winner == 2) {
    document.querySelector('#score_one').style.color = '#f33';
    document.querySelector('#score_two').style.color = '#3f3';
  }
}

docReady(() => {
  p1b = document.querySelector('#player_one');
  p2b = document.querySelector('#player_two');
  reset = document.querySelector('#reset');

  p1b.addEventListener('click', (event) => {
    if (winner != 0) return;
    player_one ++;
    update();
    if (player_one == max) {
      winner = 1;
      win();
    }
  });
  
  p2b.addEventListener('click', (event) => {
    if (winner != 0) return;
    player_two ++;
    update();
    if (player_two == max) {
      winner = 2;
      win();
    }
  });
  
  reset.addEventListener('click', (event) => {
    winner = 0;
    player_one = 0;
    player_two = 0;
    update();
    document.querySelector('#score_one').style.color = '#000';
    document.querySelector('#score_two').style.color = '#000';
  });
  
});
