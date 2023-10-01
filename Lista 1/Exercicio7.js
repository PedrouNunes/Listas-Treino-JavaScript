const verificaPalindromo = (texto) => {
    const textoFormatado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s/g, "");

    const tamanho = textoFormatado.length;
    for (let i = 0; i < tamanho / 2; i++) {
      if (textoFormatado[i] !== textoFormatado[tamanho - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
  console.log(verificaPalindromo("arara")); // Saída: true
  console.log(verificaPalindromo("amor"));  // Saída: false
  console.log(verificaPalindromo("A mala nada na lama")); // Saída: true
  