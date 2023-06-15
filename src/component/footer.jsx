import { styled } from "styled-components"

const Footer = styled.footer`
    
    min-height: 186px;
    background: #222222;
    justify-self: flex-end;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    padding: 0px 29px 27px 0px;
    @media(min-width: 1440px){
        height: 199px;
        padding: 0px 25px 22px 0px;
    }`


    const StyledParagrph = styled.p`
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        align-self: flex-end;

`

export default function FooterComponent(){
    return (
    <Footer>
        <StyledParagrph>Very intresting tail</StyledParagrph>
    </Footer>
    )
}