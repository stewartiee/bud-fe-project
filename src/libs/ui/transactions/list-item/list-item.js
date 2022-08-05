import styled from 'styled-components';
import { ListImage } from '~/libs/ui/transactions';
import { formatCurrency } from '~/libs/utility/format-currency';

const Grid = styled.li`
    display: grid;
    grid-template-columns: 48px 2fr 1fr;
    gap: 15px;
    align-items: center;

    border-bottom: 1px solid #f5f5f5;
    padding: 1em;

    &:last-child {
        border-bottom: none;
    }

    & > div:last-child {
        justify-self: end;
    }
`;

const TransactionHeading = styled.p`
    font-weight: 600;
    margin: 0.25em 0;
`;

const TransactionMetaData = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.85em;
    margin: 0.25em 0;
`;

export const ListItem = ({ item: {category_title, description, amount} }) => {
    // Substitute spaces, and convert to lowercase
    const slug = category_title?.replaceAll(' ', '-').toLowerCase();
    const currencyOutput = formatCurrency(
        amount?.value,
        amount?.currency_iso
    );

    return (
        <Grid aria-label="Expense" tabIndex={0} data-testid="transaction-item">
            <ListImage category={slug} />
            <div>
                <TransactionHeading tabIndex={0}>
                    {description}
                </TransactionHeading>
                <TransactionMetaData
                    aria-label={`Category: ${category_title}`}
                    tabIndex={0}
                >
                    {category_title}
                </TransactionMetaData>
            </div>
            <div>
                <p tabIndex={0}>{currencyOutput}</p>
            </div>
        </Grid>
    );
};
