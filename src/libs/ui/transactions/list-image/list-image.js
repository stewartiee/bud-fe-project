import styled, { css } from 'styled-components';

const TransactionLogo = styled.div`
    display: grid;
    width: 48px;
    height: 48px;
    color: #fff;
    background: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 9px;
    font-family: 'Material Symbols Outlined';
    place-self: center;
    place-content: center;
    font-size: 2em;

    ${({ category }) => {
        switch (category) {
            case 'bills':
                return css`
                    background: #f5748b;
                    border-color: #f5748b;

                    &:after {
                        display: block;
                        content: 'power_settings_new';
                    }
                `;
            case 'eating-out':
                return css`
                    background: #5dd0ff;
                    border-color: #5dd0ff;

                    &:after {
                        display: block;
                        content: 'restaurant';
                    }
                `;
            case 'entertainment':
                return css`
                    background: #016fd0;
                    border-color: #016fd0;

                    &:after {
                        display: block;
                        content: 'confirmation_number';
                    }
                `;
            case 'general':
                return css`
                    background: #f5748b;
                    border-color: #f5748b;

                    &:after {
                        display: block;
                        content: 'payments';
                    }
                `;
            case 'groceries':
                return css`
                    background: #3cbf2b;
                    border-color: #3cbf2b;

                    &:after {
                        display: block;
                        content: 'shopping_cart';
                    }
                `;
            case 'shopping':
                return css`
                    background: #68dbcd;
                    border-color: #68dbcd;

                    &:after {
                        display: block;
                        content: 'shopping_bag';
                    }
                `;
            case 'transport':
                return css`
                    background: #0f46a1;
                    border-color: #0f46a1;

                    &:after {
                        display: block;
                        content: 'train';
                    }
                `;
            default:
                return;
        }
    }}
`;

export const ListImage = ({ category }) => (
    <TransactionLogo category={category} />
);
