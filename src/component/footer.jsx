import { styled } from "styled-components"

const Footer = styled.footer`
    
    min-height: 186px;
    background: #222222;
<<<<<<< HEAD
    width: 100%;
=======
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    justify-self: flex-end;
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
<<<<<<< HEAD
    @media(min-width: 1440px){
        height: 199px;
=======
    padding: 0px 29px 27px 0px;
    @media(min-width: 1440px){
        height: 199px;
        padding: 0px 25px 22px 0px;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
        margin-right: 27px;
        @media(min-width: 1440px){
        margin-left: 22px;}
    `


=======

`
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab

export default function FooterComponent(){
    return (
    <Footer>
        <StyledParagrph>Very intresting tail</StyledParagrph>
    </Footer>
    )
}