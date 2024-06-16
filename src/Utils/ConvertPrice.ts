export function convertPrice(price: string) {
  return new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
  }).format(+price);
}