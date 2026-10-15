/**
 * Valida um CPF verificando os dígitos verificadores.
 * Aceita CPF com ou sem máscara (ex.: "529.982.247-25" ou "52998224725").
 *
 * @param {string} cpf - CPF a ser validado.
 * @returns {boolean} - true se o CPF for válido, false caso contrário.
 */
function validateCpf(cpf) {
  if (typeof cpf !== "string") return false;

  const digits = cpf.replace(/\D/g, "");

  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false; // todos os dígitos iguais

  const calculateDigit = (length) => {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += Number(digits[i]) * (length + 1 - i);
    }
    const result = (sum * 10) % 11;
    return result === 10 ? 0 : result;
  };

  return (
    calculateDigit(9) === Number(digits[9]) &&
    calculateDigit(10) === Number(digits[10])
  );
}

module.exports = { validateCpf };