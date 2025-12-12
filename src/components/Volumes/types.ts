// Свойства компонента NumberSpinner
export interface NumberSpinnerProps {
  // Текст метки поля ввода
  label: string;
  // Численное значение для отображения
  value: number;
}

// Свойства компонента VolumesInputs
export interface VolumesInputsSectionProps {
  // Объем, который отправляется
  sendAmount: number;
  // Объем, который получается
  receiveAmount: number;
}
