//gerar numero
let num = Math.floor(Math.random()*100)+1;
//definir tentativas
let c = 7;
//comparar palpite
function chute(){
    document.getElementById("chance").textContent = c + "chances restantes!";
    let guess = document.getElementById("num").value;
    if(guess == num){
        document.getElementById("dica").textContent = "Você acertou!";
        location.reload();
    }

}