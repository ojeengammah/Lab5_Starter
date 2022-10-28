// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  const image = document.getElementById('explore').getElementsByTagName('img')[0];
  const voice = document.getElementById('voice-select');
  const text = document.getElementById('text-to-speak')
  const button = document.getElementById('explore').getElementsByTagName('button')[0];
  const synth = window.speechSynthesis;

  synth.onvoiceschanged = (event) =>{
    let voices = [];

    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voice.appendChild(option);
    }
  };
    

}