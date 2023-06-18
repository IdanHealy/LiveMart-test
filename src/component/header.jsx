import { styled } from "styled-components"

const Header = styled.header`
<<<<<<< HEAD
    width: 100%;
    min-width: 375px;
    display: flex;
    justify-content: center;
=======
    display: flex;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    flex-direction: row;
    align-items: center;
    min-height: 60px;
    max-height: 60px;
    min-width: 375px;
    max-width: 100%;
    background-color: #755858;
<<<<<<< HEAD
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
=======
    padding-left: 26px;
    
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
    margin-left: 24px;
=======
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
`

export default function HeaderComponent(){
    return(
    <Header>
<<<<<<< HEAD
        <HeaderWraper>
            <HeaderText>Test project</HeaderText>
        </HeaderWraper>
=======
        <HeaderText>Test project</HeaderText>
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    </Header>
    )
}