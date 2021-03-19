function cor() {
    var bgcolor = document.getElementById("color").value;
    document.body.style.backgroundColor = bgcolor;
  }
  
function img(){
    var caixa = document.getElementById("imagens");
    var imagem = document.getElementById("image");
    var link = document.getElementById("link");

    if (caixa.value.match("1")){
        imagem.src = "../img/Urso.jpg";
        link.href = "../img/Urso.jpg";
    } if (caixa.value.match("2")) {
        imagem.src = "../img/Foca.jpg";
        link.href = "../img/Foca.jpg";
    } if (caixa.value.match("3")) {
        imagem.src = "../img/Macaco.jpg";
        link.href = "../img/Macaco.jpg";
    }
}

