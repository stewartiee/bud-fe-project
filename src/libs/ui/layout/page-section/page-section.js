import styled from 'styled-components';

const PageSectionDiv = styled.div`
    width: 650px;
    background: #fff;
    border-radius: 9px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
    margin: 1em auto;
    padding: 0.5em;

    transition: height 0.25s ease-in;

    @media only screen and (max-width: 768px) {
        width: 100vw;
        border-radius: 0;
        box-shadow: none;
        margin: 0;
        padding: 0.5em 0;
    }
`;

export const PageSection = ({ children }) => (
    <PageSectionDiv>{children}</PageSectionDiv>
);
