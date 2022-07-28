export const fetchTransactions = async () => {
    return await fetch('https://www.mocky.io/v2/5c62e7c33000004a00019b05', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            return {
                status: 'success',
                data,
            };
        })
        .catch(({ message }) => {
            return {
                status: 'error',
                message,
            };
        });
};
