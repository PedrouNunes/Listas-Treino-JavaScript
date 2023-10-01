const anagrama = (str1, str2) => {
    const strLimpa1 = str1.toLowerCase().replace(/\s/g, '');
    const strLimpa2 = str2.toLowerCase().replace(/\s/g, '');
  
    const ordena1 = strLimpa1.split('').sort().join('');
    const ordena2 = strLimpa2.split('').sort().join('');
  
    return ordena1 === ordena2;
  };
  
console.log(anagrama("amor", "roma")); // Saída: true
console.log(anagrama("Hello", "World")); // Saída: false