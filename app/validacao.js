function validarChute(chute) {
  const numero = +chute;
  // console.log(numero);

  if (chuteInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
            <h2>Game Over</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += `<div>Valor invalido. Fale um número entre ${menorValor} e ${maiorValor} </div>`;
    }
  }

  if (numeroMaiorMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;

    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    
    <button id = 'jogar-novamente' class = 'btn-jogar'>Jogar novamente</button>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<h3>Boa tentativa, mas tente um número menor<i class="fa-solid fa-down-long"></i></h3>`;
  } else {
    elementoChute.innerHTML += `<h3>Boa tentativa, mas tente um número maior<i class="fa-solid fa-up-long"></i></h3>`;
  }
}
function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorMenorQuePermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
