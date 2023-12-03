const instructions = require('./models/instructions')
const matriz = require('./models/matriz')
const play = require('./services/play')
const print = require('./services/print')
let jogada = 0

console.log('\n\nSiga as instruções de teclas informadas abaixo:\n')
console.log(matriz)
print(instructions)

const readline = require('readline')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
  if ((jogada % 2) == 0) {
    if (play(matriz, str, 'X') === 201) {
      jogada += 1;
    }
    print(matriz)
  }
  if ((jogada % 2) == 1) {
    if (play(matriz, str, 'O') === 201) {
      jogada += 1;
    }
    print(matriz)
  }

})
