const converterTempo = (segundos) => {
    const horas = Math.floor(segundos / 3600); // Calcula as horas 
    const minutos = Math.floor((segundos % 3600) / 60); // Calcula os minutos 
    const segundosRestantes = segundos % 60; // Calcula os segundos 
  
    return `${horas}h ${minutos}m ${segundosRestantes}s`;
  };
  
  // Exemplo de uso:
  console.log(converterTempo(5000)); // Saída: "1h 23m 20s"
  