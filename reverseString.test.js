//Arrange
const reverseString = require('./reverseString.js');

test('Palavras normais e que deve voltar seu formato invertido', () => {
    //act 
    const string = reverseString('carro');
    //Assert
    expect(string).toBe('orrac');
    expect(reverseString('banana')).toBe('ananab');
    expect(reverseString('joao')).toBe('oaoj');
});

test('Validar para palavras invertidas o mesmo não retorna nada', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString(new String())).toBe('');
    expect(reverseString("")).toBe('');
    expect(reverseString(``)).toBe('');
});