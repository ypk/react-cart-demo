const GetCurrencyData = (currencyData) => {
  const { selectedCurrency, currencyAndVATContext } = currencyData;
  const { currency, vat } = currencyAndVATContext;
  const selectedCurrencyObject = currency.find(
    (ctx) => ctx.code === selectedCurrency
  );
  const selectedVatObject = vat.find(
    (ctx) => ctx.currency === selectedCurrency
  );
  return { currencyData: selectedCurrencyObject, VATData: selectedVatObject };
};

const GetVATAmount = (price, rate) => {
  return (price * rate) / 100;
};

const FormatPrice = (price) => {
  return Number.parseFloat(price).toFixed(2).toString();
};

export {
  GetCurrencyData,
  GetVATAmount,
  FormatPrice,
};
