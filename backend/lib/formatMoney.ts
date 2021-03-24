const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatMoney = (cents: number): string => {
  const dollars = cents / 100;
  return formatter.format(dollars);
};

export default formatMoney;
