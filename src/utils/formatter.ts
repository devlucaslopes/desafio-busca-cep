export const formatCEP = (value: string) =>
  value.slice(0, 9).replace(/(\d{5})(\d{1,3})/g, '$1-$2')

export const cepOnlyNumbers = (value: string) => value.replace('-', '')
