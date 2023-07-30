

let randomNumber = Math.floor(Math.random() * 100) + 1;

let userInput = document.querySelector("input");
let player = 10;
let tries = [];
let showTry = document.getElementById('tries');
let showTryLost = document.getElementById('tries_lost');
let showTryWin = document.getElementById('tries_win');
let result = document.getElementById('random_number');

if (userInput) {
   
    userInput.addEventListener('change', updateValue);
    function updateValue() {
        if (Number(userInput.value)) {
            let attempt = Number(userInput.value);
           
            if (attempt > 100 || !Number.isInteger(attempt)) {
                alert("Apenas numeros de 1 a 100");
                resetInput();
                return;
            }
         
            const isEqual = (first, second) => {
                return first === second;
            };
            const tryEqual = tries.some(e => isEqual(e, attempt));
            if (tryEqual) {
                alert("Palpite repetido");
                return;
            }
            else {
                tries.push(attempt);
            }
            
            if (attempt === randomNumber && attempt !== 0) {
                alert("Parabéns você Acertou!!!");
                localStorage.setItem("win", String(tries));
                localStorage.setItem("randomNumber", String(randomNumber));
                window.location.reload(true);
               
            }
           
            if (attempt > randomNumber) {
                alert("O número é menor!");
                player -= 1;
                resetInput();
            }
            if (attempt < randomNumber) {
                alert("O número é maior");
                player -= 1;
                resetInput();
            }

            if (tries.length <= 10){
                
        
                if (tries.includes(randomNumber)) {
                    console.log("acertou")
                    ganhou.style.zIndex = 2
                    ganhou.style.display = "block"
                    perdeu.style.display = "none"
                    bia.style.display = "none"
                    alert('Parabéns Você Ganhou')
                    
                } else {
                    console.log("errou")
                    perdeu.style.zIndex = 2
                    perdeu.style.display = "block"
                    ganhou.style.display = "none"
                    bia.style.display = "none"
                    
                }
                
            } else {
                
                alert('Voce perdeu')
                tentativas = []
                
            }
        

            if (tries.length <= 10){}
           
            if (player === 0) {
                alert("Game Over");
                localStorage.setItem("lost", String(tries));
                localStorage.setItem("randomNumber", String(randomNumber));
                window.location.reload(false);
                
                
                
                
            }

            
            if (showTryWin) {
    result.innerText = `${localStorage.getItem("randomNumber")}`;
    showTryWin.innerText = `${localStorage.getItem("win")}`;
    
    
}
            if (showTryLost) {
    result.innerText = `${localStorage.getItem("randomNumber")}`;
    showTryLost.innerText = `${localStorage.getItem("lost")}`;
    
   
}
            
            function resetInput() {
                if (userInput.value != "") {
                    userInput.value = "";
                    
                }
                
                
               
            }
            showTry.innerHTML = String(tries);
             document.getElementById('resultado').innerHTML = tries;
             
        }
    }
}




   

