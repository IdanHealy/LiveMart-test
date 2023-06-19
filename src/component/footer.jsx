import { styled } from "styled-components"

const Footer = styled.footer`
    
    min-height: 186px;
    background: #222222;
    width: 100%;
    min-width: 375px;
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    @media(min-width: 1440px){
        height: 199px;
    }`

    const FooterWrapper = styled.div`
        width: 375px;
        display: flex;
        flex-direction: row;
        min-height: inherit;
        justify-content: flex-end;
        align-items: flex-end;
        height: inherit;
        @media(min-width: 1440px){
            width: 1440px;
        }
    `
    const StyledParagrph = styled.p`
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        align-self: flex-end;
        margin-right: 27px;
        @media(min-width: 1440px){
        margin-left: 22px;}
    `


export default function FooterComponent(){
    return (
    <Footer>
        <FooterWrapper>
        <StyledParagrph>Very intresting tail</StyledParagrph>
        </FooterWrapper>
    </Footer>
    )
}