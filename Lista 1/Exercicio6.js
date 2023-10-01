const criarEspacos = (quantidade) => {
    let espacos = '';
    for (let i = 0; i < quantidade; i++) {
      espacos += ' ';
    }
    return espacos;
  };
  
  const pInvertida = (nImpar) => {
    if (nImpar % 2 === 0) {
      console.log("O valor deve ser ímpar.");
      return;
    }
  
    const metade = Math.floor(nImpar / 2);
  
    for (let i = 0; i <= metade; i++) {
      let linha = "";
  
      for (let j = i + 1; j <= nImpar - i; j++) {
        linha += j + " ";
      }
  
      console.log(criarEspacos(i * 2) + linha);
    }
  };
  

  pInvertida(11);