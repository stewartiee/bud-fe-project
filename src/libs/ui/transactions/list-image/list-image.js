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
    
    &.bills {
        background: #f5748b;
        border-color: #f5748b;

        &:after {
            display: block;
            content: 'power_settings_new';
        }
    }
    
    &.eating-out {
        background: #5dd0ff;
        border-color: #5dd0ff;

        &:after {
            display: block;
            content: 'restaurant';
        }
    }
    
    &.entertainment {
        background: #016fd0;
        border-color: #016fd0;

        &:after {
            display: block;
            content: 'confirmation_number';
        }
    }
    
    &.general {
        background: #f5748b;
        border-color: #f5748b;

        &:after {
            display: block;
            content: 'payments';
        }
    }
    
    &.groceries { 
        background: #3cbf2b;
        border-color: #3cbf2b;

        &:after {
            display: block;
            content: 'shopping_cart';
        }
    }
    
    &.shopping {
        background: #68dbcd;
        border-color: #68dbcd;

        &:after {
            display: block;
            content: 'shopping_bag';
        }
    }
    
    &.transport {
        background: #0f46a1;
        border-color: #0f46a1;

        &:after {
            display: block;
            content: 'train';
        }
    }
`;

export const ListImage = ({ category }) => (
    // container container-transport
    <TransactionLogo className={category} />
);
