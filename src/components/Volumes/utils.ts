/**
 * Форматирует число в строку с разделителями тысяч и двумя-пятью десятичными знаками.
 * @param num - Число для форматирования.
 * @returns {string} - Отформатированная строка.
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  });
};
