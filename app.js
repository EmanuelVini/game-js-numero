alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let numeroEscolhido;
let tentativas = 1;


while (numeroEscolhido != numeroSecreto) {
    numeroEscolhido = prompt('Escolha um número entre 1 e 10');

    if (numeroEscolhido == numeroSecreto){
        break;
        //alert(`Isso ai você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas !`);
        
    
    } else{
        
        if (numeroEscolhido > numeroSecreto){
            alert('O número secredto é menor que o número escolhido');
        }else{
            alert('O número secreto é maior que o número escolido');
        }
        
        tentativas ++;

    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

//if(tentativas > 1 ){
//  alert(`Isso ai você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas!`);
//}else{
//  alert(`Isso ai você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativa!`);
//}

