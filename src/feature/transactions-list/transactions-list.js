import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ListItem } from '~/libs/ui/transactions';
import { fetchTransactions } from '~/libs/data-access/transactions/fetch-transactions';

const List = styled.ul`
    margin: 0;
    padding: 0;
`;

const StateParagraph = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 4em 1em;
`;

export default function TransactionsList({ offset = 0, limit = 10 }) {
    const [loadingState, setLoadingState] = useState(true);
    const [errorState, setErrorState] = useState(undefined);
    const [transactionData, setTransactionData] = useState([]);

    useEffect(() => {
        // Fetch the transaction data from the API.
        fetchTransactions()
            .then((result) => {
                setTransactionData(result.transactions);
                setLoadingState(false);
            })
            .catch((error) => {
                setErrorState('Please try again.');
                setLoadingState(false);
            });
    }, []);

    const sortedTransactions = useMemo(() => {
        // Once we have the fetched data...
        return (
            transactionData
                // Filter out income transactions as these aren't relevant to the outgoings.
                .filter(({ amount: {value} }) => value < 0)
                // Sort the transactions to show from least to greatest for amount.
                .sort((a, b) => {
                    return b.amount.value - a.amount.value;
                })
                // Only show the first 10.
                .splice(offset, limit)
        );
    }, [transactionData]);

    return loadingState ? (
        <StateParagraph>Loading...</StateParagraph>
    ) : errorState ? (
        <StateParagraph>An Error Occurred: {errorState}</StateParagraph>
    ) : transactionData ? (
        <List>
            {sortedTransactions.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </List>
    ) : null;
}
