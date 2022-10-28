// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  const horn = document.getElementById('horn-select');
  const image = document.getElementById('expose').getElementsByTagName('img')[0];
  const audio = document.getElementById('expose').getElementsByTagName('audio')[0];
  const slider = document.getElementById('volume');
  const icon = document.getElementById('volume-controls').getElementsByTagName('img')[0];
  const button = document.getElementById('expose').getElementsByTagName('button')[0];
  const jsConfetti = new JSConfetti();

  horn.addEventListener('change', (event) => {
  if (horn.value == horn.options[0].value){
    image.setAttribute('src', './assets/images/no-image.png');
    audio.setAttribute('src', '');
  }
  else if (horn.value == horn.options[1].value){
    image.setAttribute('src', './assets/images/air-horn.svg');
    audio.setAttribute('src', './assets/audio/air-horn.mp3');
  }
  else if (horn.value == horn.options[2].value){
    image.setAttribute('src', './assets/images/car-horn.svg')
    audio.setAttribute('src', './assets/audio/car-horn.mp3');
  }
  else if (horn.value == horn.options[3].value){
    image.setAttribute('src', './assets/images/party-horn.svg')
    audio.setAttribute('src', './assets/audio/party-horn.mp3');
  }
  });
    slider.addEventListener('change', (event) => {
      let vol = parseInt(slider.value);
      audio.volume = vol / 100.0;
    if (vol == 0){
      icon.setAttribute('src', './assets/icons/volume-level-0.svg');
      icon.setAttribute('alt', 'Volume level 0')
    } else if (vol < 33) {
      icon.setAttribute('src', './assets/icons/volume-level-1.svg')
      icon.setAttribute('alt', 'Volume level 1')
    } else if (vol < 66) {
      icon.setAttribute('src', './assets/icons/volume-level-2.svg')
      icon.setAttribute('alt', 'Volume level 2')
    } else {
      icon.setAttribute('src', './assets/icons/volume-level-3.svg')
      icon.setAttribute('alt', 'Volume level 3')
    }
  });
  button.addEventListener('click', (event) =>{
      audio.play(); 
      if (horn.value == horn.options[3].value){
        jsConfetti.addConfetti();
      }
  });

  

}
