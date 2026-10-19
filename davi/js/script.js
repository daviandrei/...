const caixaPerguntas =
document.querySelector(".caixa-perguntas");
const caixaAlternativas =
document.querySelector(".caixa-alternativas");
const caixaResultado =
document.querySelector(".caixa-resultado");
const textoResultado =
document.querySelector(".texto-resultado");
const botaoIniciar =
document.querySelector(".iniciar-btn");
const botaoNovamente =
document.querySelector(".novamente-btn");
const telaInicial =
document.querySelector(".tela-inicial");

let atual = 0;

// INICIAR JOGO
botaoIniciar.addEventListener("click", function () {
atual = 0;
telaInicial.style.display = "none";
caixaPerguntas.classList.add("mostrar");
caixaAlternativas.classList.add("mostrar");
caixaResultado.classList.remove("mostrar");
mostrarPergunta();
});

// MOSTRAR PERGUNTA
function mostrarPergunta() {
const pergunta = perguntas[atual];

caixaPerguntas.textContent =
pergunta.enunciado;
caixaAlternativas.innerHTML = "";

for (const alternativa of pergunta.alternativas) {
const botao =
document.createElement("button");
botao.textContent =
alternativa.texto;

botao.addEventListener("click", function () {
if (alternativa.proxima !== undefined) {
atual = alternativa.proxima;
mostrarPergunta();
}
else {
mostrarFinal(
alternativa.final
);
}
});

caixaAlternativas.appendChild(botao);
}
}

// MOSTRAR FINAL
function mostrarFinal(final) {
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.add("mostrar");
textoResultado.textContent =

final;
}

// JOGAR NOVAMENTE
botaoNovamente.addEventListener("click", function () {
atual = 0;
caixaResultado.classList.remove("mostrar");
telaInicial.style.display = "block";
});