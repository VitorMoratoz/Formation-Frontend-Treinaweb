let hora = 18,
    mensagem = '';

if (hora < 12){
    mensagem = 'Bom Dia';
} else if (hora >= 12 && hora < 18) {
    mensagem = 'Boa Tarde';
} else {
        mensagem = 'Boa Noite';
}

/* if (hora >= 12 && hora < 18){
    mensagem = 'Boa Tarde';
}

if (hora > 18){
    mensagem = 'Boa Noite';
} */

console.log(mensagem)
