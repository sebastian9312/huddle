import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #fff;
    margin: 40px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 60px;
    flex-direction: ${({ layout }) => layout || 'row'}

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(${({ theme }) => theme.screen.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`





