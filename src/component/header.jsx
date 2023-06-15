import { styled } from "styled-components"

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 60px;
    max-height: 60px;
    min-width: 375px;
    max-width: 100%;
    background-color: #755858;
    padding-left: 26px;
    
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
`

export default function HeaderComponent(){
    return(
    <Header>
        <HeaderText>Test project</HeaderText>
    </Header>
    )
}