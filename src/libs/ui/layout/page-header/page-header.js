import styled from 'styled-components';

const PageHeaderElement = styled.header`
    text-align: center;

    & h1 {
        margin: 0.5em 0;
    }
`;

export const PageHeader = ({ children }) => (
    <PageHeaderElement>{children}</PageHeaderElement>
);
