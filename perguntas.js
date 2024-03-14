fetch('https://gist.githubusercontent.com/Telmittto/b863ce9dd977d0b7e86112c5f8ef16c5/raw/87d575979bae185acf3870b57abf90043941ca7e/gistfile1.txt')
  .then(response => response.text())
  .then(text => {
    const perguntas = text.split('\n');
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    console.log(perguntaAleatoria);
  });