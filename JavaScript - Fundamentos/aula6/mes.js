let mes = 7,
    nomeMes = '';

switch(mes){
    case 1: 
        nomeMes = 'Janeiro'; 
        break; 
    case 2: 
        nomeMes = 'Fevereiro'; 
        break; 
    case 3: 
        nomeMes = 'Março'; 
        break; 
    case 4: 
        nomeMes = 'Abril'; 
        break; 
    case 5: 
        nomeMes = 'Maio'; 
        break; 
    case 6: 
        nomeMes = 'Junho'; 
        break; 
    case 7: 
        nomeMes = 'Julho'; 
        break; 
    case 8: 
        nomeMes = 'Agosto'; 
        break; 
    case 9: 
        nomeMes = 'Setembro'; 
        break; 
    case 10: 
        nomeMes = 'Outubro'; 
        break; 
    case 11: 
        nomeMes = 'Novembro'; 
        break; 
    case 12: 
        nomeMes = 'Dezembro'; 
        break; 
    default: 
        nomeMes = 'Mês Inválido';
}

console.log(nomeMes)


let idade = 'adolescência';

switch(idade){
    case 'adulta': console.log('+18');
    case 'adolescência': console.log('+14');
    case 'infância': console.log('Todos os Públicos');
}

switch(8){
    case 1: console.log('Domingo'); break;
    case 2: console.log('Segunda'); break;
    case 3: console.log('Terça'); break;
    case 4: console.log('Quarta'); break;
    case 5: console.log('Quinta'); break;
    case 6: console.log('Sexta'); break;
    case 7: console.log('Sábado'); break;
    default: console.log('Dia Inválido');
}

let ab = a + b,
    ac = a + c,
    bc = b + c,
    eh_triangulo = (ab > c) && (ac > b) && (bc > a);

if(eh_triangulo){
    if(a === b && a === c){
        console.log('Equilátero');   
    }else if(a !== b && a !== c && b !==c){
        console.log('Escaleno');
    }else{
        console.log('Isósceles');
    }
}else{
    console.log('Não é um triângulo');
}

let media = (a + b + c + d) / 4;

if(media >= 9){
    conceito = 'A';
}else if(media >= 7.5){
    conceito = 'B';
}else if(media >= 6){
    conceito = 'C';
}else if(media >= 4){
    conceito = 'D';
}else{
    conceito = 'F';
}


let preco = quantidade < 25 ? 5.50 : 4.85;
console.log(preco * quantidade);