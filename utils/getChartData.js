export const fetchDataChart = async (url) => {
  const response = await fetch(url);
  const responseData = await response.json();

  const lastCurrencyRates = responseData.map((data) => {
    let value = parseFloat(data.bid);
    return value;
  });

  const lastCurrencyRatesDates = responseData.map((data) => (data.timestamp));
  lastCurrencyRatesDates.reverse()

  return { lastCurrencyRates, lastCurrencyRatesDates };

};
