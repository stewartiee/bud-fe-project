export const fetchTransactions = async () => {
    const response = await fetch('https://www.mocky.io/v2/5c62e7c33000004a00019b05', {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await response.json();
};
