export function formatValue (valueCents : number) {
  const valueInReal = valueCents / 100;
  return valueInReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}