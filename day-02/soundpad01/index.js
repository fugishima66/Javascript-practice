const sounds = [
  'bass',
  'snare',
  'trombone',
  'floor',
  'violin',
  'sticks',
  'hihat',
  'sus',
  'china',
];


function stopSongs() {
  sounds.forEach((sound) => {_
    const song = document.getElementById(sound);
    song.currentTime = 0;
    song.pause();
  });
}
sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    // stopSongs();
    document.getElementById(sound).play();
  });
  btn.addEventListener('keydown', function(event) {
    if (event.key === "a" , sound === 'bass') {
      document.getElementById(sound).play()
    }
  })

  document.getElementById('buttons').appendChild(btn);

});
