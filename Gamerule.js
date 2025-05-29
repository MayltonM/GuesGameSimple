//gerar numero
let num = Math.floor(Math.random()*100)+1;
//definir tentativas
let c = 7;
document.getElementById("chance").textContent = c + "chances restantes!";
//comparar palpite
function chute(){    
    let guess = document.getElementById("num").value;
    if(guess == num){
        document.getElementById("dica").textContent = "Você acertou!";
        location.reload();
    }

}