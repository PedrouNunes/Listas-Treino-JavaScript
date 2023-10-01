const validarSenha = (senha) => {
  if (senha.length < 8) {
    return false;
  }

  if (!/[A-Z]/.test(senha)) {
    return false;
  }

  if (!/[a-z]/.test(senha)) {
    return false;
  }

  if (!/\d/.test(senha)) {
    return false;
  }

  if (!/[!@#$%^&*]/.test(senha)) {
    return false;
  }

  return true;
};

console.log(validarSenha('Senha123#')); // Saída: true
console.log(validarSenha('senha123'));  // Saída: false
