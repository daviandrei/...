const perguntas = [
// 0 - PERGUNTA PRINCIPAL
{
enunciado: "sonegar impostos",
alternativas: [
{
texto: "sim",
proxima: 1
},
{
texto: "não",
proxima: 2
}
]
},

// 1 - PRÓXIMA SITUAÇÃO - CAMINHO A
{
enunciado: "voce sobrevive o brasil",
alternativas: [
{
texto: "CONTINUAR",
proxima: 3
}
]
},

// 2 - PRÓXIMA SITUAÇÃO - CAMINHO B
{

enunciado: "voce se torna mais pobre",
alternativas: [
{
texto: "CONTINUAR",
proxima: 4
}
]
},

// 3 - FINAL 1 - CAMINHO A
{
enunciado: "FINAL 1 - CAMINHO da sonegação",
alternativas: [
{
texto: "FINALIZAR",
final: "FINAL 1 - CAMINHO sonegação"
}
]
},

// 4 - FINAL 2 - CAMINHO B
{
enunciado: "FINAL 2 - rota da pobresa",
alternativas: [
{
texto: "FINALIZAR",
final: "FINAL 2 - rota da pobresa"
}
]
}
];