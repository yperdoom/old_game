module.exports = (matriz, jogada, player) => {
  switch (jogada) {
    case '7':
      matriz.linha1.coluna1 = player
      break;
    case '8':
      matriz.linha1.coluna2 = player
      break;
    case '9':
      matriz.linha1.coluna3 = player
      break;
    case '4':
      matriz.linha2.coluna1 = player
      break;
    case '5':
      matriz.linha2.coluna2 = player
      break;
    case '6':
      matriz.linha2.coluna3 = player
      break;
    case '1':
      matriz.linha3.coluna1 = player
      break;
    case '2':
      matriz.linha3.coluna2 = player
      break;
    case '3':
      matriz.linha3.coluna3 = player
      break;
    default:
      return 0;
  }
}
