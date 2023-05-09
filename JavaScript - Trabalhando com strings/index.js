console.log('O fulano: "..."')


const nome = "Vitor "
const sobrenome = 'Moratz'

console.log(nome + sobrenome + ' Idade: ' + (2023 - 2001) + ' anos')

console.log('Caixa d\'água')

console.log(`Caixa d'água do \`fulano que disse: "..."`)

console.log(`${nome} ${sobrenome} idade: ${2023 - 2001}`)

'a'.localeCompare('b', 'pt-BR')

console.log('a'.localeCompare('a', 'pt-BR'))
console.log('1'.localeCompare('10', undefined, {numeric: true}))
console.log('a' === 'a')

const resultado = /treinaweb/g.test(`
treinaweb é legal
Eu gosto da treinaweb
Treinaweb
`)

console.log(resultado)

console.log('Moratz'.length)


const nome1 = 'treinaweb'
console.log(nome1.length)

const myString = 'Moratz'['Moratz'.length - 1]

// const myString = 'Moratz'.at(-1)
// const myString = 'Moratz'.indexOf('t')

console.log(myString)

const myString0 = 'Vitor'.toLowerCase();
const myString1 = 'Moratz'.toUpperCase();
console.log(myString0, myString1)

const nome5 = 'Vitor'.slice(0,3)
console.log(nome5)

const nome6 = 'Moratz'.replace(/Moratz/g, 'Vitor')
console.log(nome6)

const transformandonumeronoquequiser = '123.539.679-73'.replace(/[^0-9]/g, '')
console.log(transformandonumeronoquequiser)