let numero1 = 15;

let numero2 = numero1;

console.log(numero1 === numero2);

let lapis = {
    cor: 'preto',
    tamanho: 15,
    escrever(){
        console.log('Escrevendo...');
    },
    apagar(){
        console.log('Apagando...');
    }
};

/*JSON = JavaScript Object Notation*/

/*const lapisJSON{
    "cor": "preto",
    "tamanho": 15.2,
    "usado": false;
}*/

console.log(lapis);

let obj1 = {nome: 'Bruna'};
let obj2 = {nome: 'Bruna'};

console.log(obj1 , obj2);

let obj3 = {nome: 'Bruna'};

let obj4 = JSON.parse(JSON.stringify(obj3));

console.log(JSON.stringify(obj3) === JSON.stringify(obj4));


let meuSymbol = Symbol('cpf');
let outroSymbol = Symbol('cpf');

console.log(meuSymbol === outroSymbol);




function criarObjeto(){
    return {
        raca: "Golden retriever",
        latir(){
            console.log('au au');
        }
    };
}

const cachorro = criarObjeto();
console.log(cachorro.raca);
cachorro.latir();

const elevador = {
    totalAndares: 3,
    andarAtual: 0,
    subir(){
        if(elevador.andarAtual < elevador.totalAndares){
            elevador.andarAtual++;
        }
        console.log(elevador.andarAtual);
    },
    descer(){
        if(elevador.andarAtual > 0){
            elevador.andarAtual--;
        }
        console.log(elevador.andarAtual);
    }
}

console.log(elevador.andarAtual);
console.log(elevador.totalAndares);
elevador.subir();
elevador.descer();
elevador.descer();
elevador.subir();
elevador.subir();
elevador.subir();
elevador.subir();

function main(meuObjeto){
    return {...meuObjeto };
    }


    function main(meuObjeto){
        const campos = Object.keys(meuObjeto);
        let menorPropriedade = campos [0];
        let menorPropriedadeValor=meuObjeto[menorPropriedade];
        for(let i = 1; i < campos.length; i++){
            if(meuObjeto[campos[i]] < menorPropriedadeValor){
                menorPropriedade = campos[i];
                menorPropriedadeValor = meuObjeto[menorPropriedade];
            }
        }
        delete meuObjeto[menorPropriedade]
        return meuObjeto;
        }


        function main(meusObjetos, titulo){
            for(let i = 0; i < meusObjetos.length; i++){
                if(meusObjetos[i].titulo === titulo){
                    return meusObjetos[i];
                }
            }
            }

            function main(meuObjeto){
                const novoObjeto = {},
                campos = Object.keys(meuObjeto);
                for(let i = 0; i < campos.length; i++){
                    const campo = campos[i];
                    novoObjeto[meuObjeto[campo]] = campo;
                }
                return novoObjeto;
                }

let a = {};
let b = a;
console.log(a === b);