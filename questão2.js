// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, 
// além de informar a quantidade de vezes em que ela ocorre.

function verificarLetraA(str) {
  let converteLetraMin = str.toLowerCase();
  let contador = 0;  
  
  for (let i = 0; i < converteLetraMin.length; i++) {
      if (converteLetraMin[i] === 'a') {
          contador++;
      }
  }
  
  if (contador > 0) {
      return `A letra "a" aparece ${contador} vezes na string.`;
  } else {
      return `A letra "a" não aparece na string.`;
  }
}