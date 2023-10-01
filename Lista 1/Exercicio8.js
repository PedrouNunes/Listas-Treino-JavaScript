const criptografiaCesar = (str, troca) => {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let criptografado = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      const indNoAlfabeto = alfabeto.indexOf(char);
  
      if (indNoAlfabeto !== -1) 
      {
        const novoInd = (indNoAlfabeto + troca) % alfabeto.length;
        const novoChar = alfabeto[novoInd];
        criptografado += (str[i] === str[i].toLowerCase()) ? novoChar : novoChar.toUpperCase();
      } 
      else 
      {
        criptografado += str[i];
      }
    }
  
    return criptografado;
  };
  
  console.log(criptografiaCesar("dijdifja", 3)); 
  console.log(criptografiaCesar("Cesar", 5)); 