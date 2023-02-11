/* 
OBJ 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir o madal com o video do trailer.


Passo 1 - dar um jeito de pegar o elemneto que representa o botão na tela usando js.

Passo 2 - dar um jeito de identificar quando o usuário clicar no botão.

Passo 3 - dar um jeito de pegar o elemento da modal no js.

Passo 4- abrir a modal na tela.


OBJ2 - quando o usuário clicar no X devemos fechar o modal.

Passo 1 - dar um jeito de pegar elemento de fechar modal usando js.

Passo 2 - dar um jeito de identificar quando o usiario clicar no X.

Passo 3- fechar a modal.

*/


const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

// minhas alterações

function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}