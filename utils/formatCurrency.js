export default function formatCurrency(value) {
  const num = Number(value || 0);
  if (Number.isNaN(num)) return "0.00";
  return num.toFixed(2);
}
