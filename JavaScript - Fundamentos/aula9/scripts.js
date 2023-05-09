let precos = [2, 1, 5, 3, 22, 31];

let [preco1, preco2, ...preco3] = precos;

let novoArray = [5, ...precos, false];

console.log(novoArray);

function soma(...numeros){
    let total = 0;
    for(let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return total;
}

console.log(soma(...precos));


function main(palavra){
    let palavraInvertida = '';
    for(let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    console.log(palavraInvertida);
    }

function main(numeros){
    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i] * 2);
    }
    }

function main(numeros){
    let menor = numeros[0],
        maior = numeros[0];
        for(let i = 1; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
        if(numeros[i] > maior){
            maior = numeros[i];
        }
    }
        console.log(menor);
        console.log(maior);
    }

    function main(numeros){
        let stringFinal = '';
        for(let i = 0; i < numeros.length; i++){
            stringFinal += numeros[i] % 2 === 0 ? numeros[i] : '*';
        }
        console.log(stringFinal)
    }

    function main(procurado, ...numeros){
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] !== procurado){
                console.log(numeros[i]);
            }
        }
        }

        function main(frase){
            function vogal(letra){
                if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
                    return true;
                }
                return false;
            }
            let novaFrase = '';
            for(let i = 0; i < frase.length; i++){
                if(!vogal(frase[i])){
                    novaFrase += frase[i];
                }
            }
            console.log(novaFrase);
        }