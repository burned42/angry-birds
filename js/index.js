let canvas = document.getElementById('canvas');
let sound = document.getElementById('mainAudio');

let angryBirds = new Game(canvas);

sound.play();

// angryBirds.startGame(canvas);

angryBirds.showStartScreen();

window.addEventListener('click', () => { angryBirds.startGame(canvas) });
