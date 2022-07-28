export const formatCurrency = (amount, currencyCode) => {
    // We'd want to look up the country associated with this user in order to set the correct locale.
    // For now just hard code it as UK.
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: currencyCode,
    }).format(amount);
};
