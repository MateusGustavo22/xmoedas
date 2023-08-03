export const fetchDataChart = async (url) => {
  const response = await fetch(url)
  const responseData = await response.json()

  const lastCurrencyRates = responseData.map((data) => {
    let value = parseFloat(data.bid)
    let formattedValues = value < 1 ? value.toFixed(3) : value.toFixed(2)
    return formattedValues
  })

  const lastCurrencyRatesDates = responseData.map((data) => data.timestamp)
  lastCurrencyRates.reverse()
  lastCurrencyRatesDates.reverse()

  return { lastCurrencyRates, lastCurrencyRatesDates }
}
