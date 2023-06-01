// componenti counter archiviati in variabili
let counter,
  displayCounter,
  number,
  bodyCounter,
  btnPiu,
  btnMeno,
  btnReset,
  currentNumber;

// creazione counter dinamico con una funzione, a seguire tutta la logica
const createCounter = () => {
  // creazione elementi che compongono il counter
  counter = document.createElement("div");
  document.body.appendChild(counter);
  counter.classList.add("counter");

  displayCounter = document.createElement("div");
  counter.appendChild(displayCounter);
  displayCounter.classList.add("display--counter");

  number = document.createElement("span");
  displayCounter.appendChild(number);
  number.textContent = 0;
  number.classList.add("number");

  bodyCounter = document.createElement("div");
  counter.appendChild(bodyCounter);
  bodyCounter.classList.add("body--counter");

  btnPiu = document.createElement("button");
  bodyCounter.appendChild(btnPiu);
  btnPiu.classList.add("button--piu");
  btnPiu.textContent = "+";

  btnMeno = document.createElement("button");
  bodyCounter.appendChild(btnMeno);
  btnMeno.classList.add("button--meno");
  btnMeno.textContent = "-";

  btnReset = document.createElement("button");
  counter.appendChild(btnReset);
  btnReset.classList.add("button--reset");
  btnReset.textContent = "Reset";

  // numero corrente
  currentNumber = 0;

  //logica incremento counter
  btnPiu.addEventListener("click", function () {
    currentNumber += 1;
    number.textContent = currentNumber;
  });

  //logica decremento counter
  btnMeno.addEventListener("click", function () {
    if (currentNumber > 0) {
      currentNumber -= 1;
      number.textContent = currentNumber;
    } else {
      currentNumber = 0;
      number.textContent = currentNumber;
    }
  });

  //logica reset to 0
  btnReset.addEventListener("click", function () {
    currentNumber = 0;
    number.textContent = currentNumber;
  });
};

// window che ascolta il caricamento della pagina ed esegue dinamicamente la creazione del counter con tutta la logica necessaria per il corretto funzionamento
window.addEventListener("DOMContentLoaded", createCounter);
