export const getCurrencyRate = async (currencyCode) => {
  const currencyApiUrl = `https://economia.awesomeapi.com.br/json/last/${currencyCode}-BRL`

  const response = await fetch(currencyApiUrl)
  const responseData = await response.json()
  const currentCurrency = parseFloat(responseData[currencyCode + 'BRL'].bid)

  return currentCurrency
}
