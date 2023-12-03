module.exports = (matriz) => {
  console.clear()
  console.log('\tJogo da velha\n')
  console.log('\t' + matriz.linha1.coluna1 + ' | ' + matriz.linha1.coluna2 + ' | ' + matriz.linha1.coluna3)
  console.log('\t' + matriz.linha2.coluna1 + ' | ' + matriz.linha2.coluna2 + ' | ' + matriz.linha2.coluna3)
  console.log('\t' + matriz.linha3.coluna1 + ' | ' + matriz.linha3.coluna2 + ' | ' + matriz.linha3.coluna3)
}