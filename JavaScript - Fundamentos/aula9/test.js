let numeros = [];
for(let i = 1; i <= 3; i++){
   numeros.push(i ** i);
}
console.log(numeros)

let numeros2 = [];
for(let i = 0; i <= 5; i++){
   numeros2.push(i);
}
numeros2.pop();
numeros2.shift();
numeros2.unshift(0);
numeros2.splice(0, 1);
console.log(numeros2);