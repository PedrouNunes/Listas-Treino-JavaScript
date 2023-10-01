function conversorDeTemperatura(temp, escEntrada, escSaida) {
    var expressaoRegular = /[CFK]/;
    var Cel = 0;
    var Kel = 0;
    var Far = 0;
  
    if (expressaoRegular.test(escEntrada) && expressaoRegular.test(escSaida)) {
      switch (escEntrada) {
        case 'C':
          if (escSaida == 'F') {
            Far = temp * (9/5) + 32;
            return Far;
          } else if (escSaida == 'K') {
            Kel = temp + 273.15;
            return Kel;
          }
          break;
  
        case 'F':
          if (escSaida == 'C') {
            Cel = (temp - 32) * 5/9;
            return Cel;
          } else if (escSaida == 'K') {
            Kel = (temp - 32) * 5/9 + 273.15;
            return Kel;
          }
          break;
  
        case 'K':
          if (escSaida == 'F') {
            Far = (temp - 273.15) * 9/5 + 32;
            return Far;
          } else if (escSaida == 'C') {
            Cel = temp - 273.15;
            return Cel;
          }
          break;
      }
    }
  
    return "Unidades de temperatura inválidas";
  }
  
  console.log(conversorDeTemperatura(30, 'C', 'F')); // Saída: 86
  console.log(conversorDeTemperatura(30, 'C', 'K')); // Saída: 303.15
  console.log(conversorDeTemperatura(30, 'F', 'C')); // Saída: -1.1111
  console.log(conversorDeTemperatura(30, 'F', 'K')); // Saída: 272.0389 
  console.log(conversorDeTemperatura(30, 'K', 'C')); // Saída: -243.15
  console.log(conversorDeTemperatura(30, 'K', 'F')); // Saída: -405.67