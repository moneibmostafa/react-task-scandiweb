import getSymbolFromCurrency from 'currency-symbol-map';

export const getCurrencySymbol = (selectedCurrency: string | undefined, productCurrency: string | undefined) => {
    if (selectedCurrency) {
        return getSymbolFromCurrency(selectedCurrency);
    } else if (productCurrency) return getSymbolFromCurrency(productCurrency);
    else return undefined
}