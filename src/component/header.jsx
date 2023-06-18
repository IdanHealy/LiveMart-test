import { styled } from "styled-components"

const Header = styled.header`
    width: 100%;
    min-width: 375px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    min-height: 60px;
    max-height: 60px;
    min-width: 375px;
    max-width: 100%;
    background-color: #755858;
    position: sticky;
    top: 0px; 
`;

const HeaderWraper = styled.div`
    min-width: inherit;
    width: inherit;
    min-height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const HeaderText = styled.h1`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0px;
    color: #ffffff;
    margin-left: 24px;
`

export default function HeaderComponent(){
    return(
    <Header>
        <HeaderWraper>
            <HeaderText>Test project</HeaderText>
        </HeaderWraper>
    </Header>
    )
}