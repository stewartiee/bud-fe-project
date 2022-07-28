import { render } from '@testing-library/react';
import { ListItem } from './list-item';
import { formatCurrency } from '~/libs/utility/format-currency';

const itemData = {
    id: '13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28',
    date: '2018-06-30',
    description: 'Tesco',
    category_title: 'Groceries',
    amount: {
        value: -57.21,
        currency_iso: 'GBP',
    },
};

describe('ListItem', () => {
    // Test that the component is rendered with 3 child elements,
    // and it contains the data specified above.
    it('should render successfully with data', async () => {
        const { getByText, getByTestId } = render(<ListItem item={itemData} />);

        // Format the currency.
        const currencyFormat = formatCurrency(
            itemData.amount.value,
            itemData.amount.currency_iso
        );

        // Expect 3 child elements on the list item row.
        expect(await getByTestId('transaction-item').children.length).toEqual(
            3
        );

        // Test the dummy data is rendered.
        expect(await getByText(itemData.description)).toBeTruthy();
        expect(await getByText(itemData.category_title)).toBeTruthy();
        expect(await getByText(currencyFormat)).toBeTruthy();
    });
});
