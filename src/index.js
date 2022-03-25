const instructions = require('./model/instruction')
const matriz = require('./model/matriz')
const service = require('./service/services.js')
let jogada = 0

service.printa(instructions)
console.log('\n\nSiga as instruções de teclas informadas acima:\n')

const readline = require('readline')
const { syncBuiltinESMExports } = require('module')
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
  if((jogada%2) == 0){
    if(service.joga(matriz, str, 'X') === 201){
        jogada += 1;
    }
    service.printa(matriz)
  }
  if((jogada%2) == 1){
    if(service.joga(matriz, str, 'O') === 201){
        jogada += 1;
    }
    service.printa(matriz)
  }
    
})
