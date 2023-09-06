  export function formatCurrency(value: number) {
    // Arredonda o número para duas casas decimais e converte para número novamente
    value = parseFloat(value.toFixed(2));
    
    // Converte o número para uma string no formato moeda brasileira
    const formattedNumber = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    return formattedNumber;
  }
  