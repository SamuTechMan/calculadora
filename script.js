var resultado = document.getElementById("resultado");

function insect(num) {
  if (resultado.textContent.length < 30) {
    if (resultado.textContent == "0") {
      resultado.textContent = num;
    } else {
      resultado.textContent += num;
    }
  }
}

function clean() {
  resultado.textContent = "0";
}

function calcular() {
  if (resultado.textContent) {
    resultado.textContent = eval(resultado.textContent);
  }
}

function trocaSinal() {
  var troca = eval(resultado.textContent) * -1;
  resultado.textContent = troca;
}

function porcentagem() {
  var porcentagem = resultado.textContent / 100;
  resultado.textContent = porcentagem;
}
