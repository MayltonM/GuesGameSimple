//gerar numero

let num = parseInt(Math.random()*100)+1;
const valorNegativo = (valor) => valor <=0;

//definir tentativas

let c = 7;
window.onload = () => document.getElementById("chance").textContent = "Voce tem " + c + " chances!";

//comparar palpite

function chute(){   
    let guess = document.getElementById("num").value;
    if(valorNegativo(guess)){
        document.getElementById("dica").textContent = "Digite um número acima de 0!";
        return;
    }else if(guess == num){
        document.getElementById("dica").textContent = "Você acertou!";
        c=7;
        return;
    }else if(guess > num){
        document.getElementById("dica").textContent = "O número secreto é menor";
    }else{
        document.getElementById("dica").textContent = "O número secreto é maior";
    }
    c--;
    document.getElementById("chance").textContent = "Lhe restam " + c + " Chances!";
    if(c==0){
        document.getElementById("dica").textContent = "Você perdeu! O número secreto era " + num + "!";
    }
}

//função reiniciar
function reload(){
    location.reload();
}