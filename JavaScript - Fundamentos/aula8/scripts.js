Math.floor(5.5);
const button = document.querySelector('button');

function tabuada(numero = 0, limite = 100){
        for(var j = 1; j <= limite; j++){
            console.log(`${numero} x ${j} = ${numero*j}`);
        }
    }

tabuada(70, 10);

function ola(){
    console.log('Olá');
}

button.addEventListener('click', ola);

let minhaFuncao = () => {
    console.log('Sou uma arrow function');
}

function primo(numero){
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return numero !== 1;
}

return (numero) => numero % 2 === 0 ? numero * 2 : numero * 3;

function multiplicacao(numero1, numero2 = 5){
    return numero1 * numero2;
}