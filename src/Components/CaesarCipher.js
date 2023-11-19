const GenerateCaesarCipher = (shift, plaintextAlphabet) => {
  // Genererar alfabetet enligt reglerna nedan, skiftar 'shift' antal platser.
  const cipherAlphabet = plaintextAlphabet.map((_symbol, index) => {
    const newIndex = (index + shift) % plaintextAlphabet.length;
    return plaintextAlphabet[newIndex];
  });

  const Encrypt = (password) => {
    return password
      .split("")
      .map((symbol) => {
        const index = plaintextAlphabet.indexOf(symbol);
        if (index !== -1) {
          // Ifall symbolen finns i plaintextAlphabet, returnera motsvarande char
          // ifrån cipherAlphabet.
          return cipherAlphabet[index];
        } else {
          // Ifall symbolen inte finns, returnera symbolen.
          return symbol;
        }
      })
      .join("");
  };

  const Decrypt = (password) => {
    return password
      .split("")
      .map((symbol) => {
        const index = cipherAlphabet.indexOf(symbol);
        if (index !== -1) {
          // Ifall symbolen finns i plaintextAlphabet, returnera motsvarande char
          // ifrån cipherAlphabet.
          return plaintextAlphabet[index];
        } else {
          // Ifall symbolen inte finns, returnera symbolen som den är.
          return symbol;
        }
      })
      .join("");
  };

  return { Encrypt, Decrypt, cipherAlphabet };
  // Till slut returneras ett objekt som innehåller funktionerna,
  // samt det krypterade alfabetet.
};

export default GenerateCaesarCipher;
