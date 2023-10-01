function verificaExcesso(pesoPeixes) {
    const pesoLimite = 50;
    const valorMultaPorQuiloExcedente = 4;
    let multa = 0;
  
    if (pesoPeixes > pesoLimite) {
      const quilosExcedentes = pesoPeixes - pesoLimite;
      multa = quilosExcedentes * valorMultaPorQuiloExcedente;
      return `Você deve pagar uma multa de R$${multa.toFixed(2)}`;
    } else {
      return "Parabéns! Você não tem nenhuma multa a pagar";
    }
  }
  
  // Exemplos de uso:
  console.log(verificaExcesso(60)); 
  console.log(verificaExcesso(40)); 
  