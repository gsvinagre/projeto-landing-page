const Leoanardo = window.document.getElementById("leonardo")
const Samantha = window.document.getElementById("samantha")
const Bruna = window.document.getElementById("bruna")

const setaDireita = window.document.getElementById("seta-direita")
const setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leoanardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:60px"
}


function RolarParaEsquerda() {
    Leoanardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}