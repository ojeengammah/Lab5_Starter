// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.getElementById('explore').getElementsByTagName('img')[0];
  const voice = document.getElementById('voice-select');
  const text = document.getElementById('text-to-speak')
  const button = document.getElementById('explore').getElementsByTagName('button')[0];
  const synth = window.speechSynthesis;
  let voices = [];

  synth.onvoiceschanged = () =>{
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
  button.addEventListener('click', (event) =>{
    
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voice.selectedIndex-1;
    
    if (selectedOption >= 0) {
      utterThis.voice = voices[selectedOption];
      text.blur();
      synth.speak(utterThis);
     image.setAttribute("src", "./assets/images/smiling-open.png");
     
     // image.setAttribute("src", "./assets/images/smiling.png");
    
    }
    if (!synth.speaking){
      image.setAttribute("src", "./assets/images/smiling-open.png");
      }
  });
}

  

