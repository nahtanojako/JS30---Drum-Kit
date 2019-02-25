(function() {

  // create function that play audio on keydown event

  function playing(e) {

    // get the audio and key element with custom attribute data-key and implement template strings
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // stop the audio if not in the list
    if(!audio) return;

    // rewind the audio from playing
    audio.currentTime = 0;

    // play the audio when key is press
    audio.play();

    // add class to key element
    key.classList.add('playing');

  }


  // create function that remove transition
  function removeTransition(e) {
    
    // look only for the key that has transform property, if it has not skip it
    if( e.propertyName !== "transform") return;

    // remove the class playing
    this.classList.remove('playing');
  }

  // run the function that remove the transition when it ends
  // get all the element that has a class of keys
  const keys = document.querySelectorAll('.key');

  // loop through keys remove transition when done transitioning
  keys.forEach( key => key.addEventListener( 'transitionend', removeTransition ));

  // run the function playing when corresponding key is press on window
  window.addEventListener('keydown', playing)

})()