import { styled } from "styled-components"
import {useEffect} from 'react';
import { useState } from "react";
import axios from "axios";

const Main = styled.main`
    @media(min-width: 1440px) {
        padding-left: 26px;
        padding-top: 45px;
        display: flex;
        flex-direction: column;
    }
    padding-left: 24px;
    padding-top: 25px;
    flex-direction: column;
`;

const FormAndTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1440px){
        flex-direction: row;
    }
`

const MainForm = styled.form`
    width: 100%;
    height: 100%; 
    max-width: 394px;
    display: flex;
    flex-direction: column;
    @media(min-width: 1440px){
        margin-right: 51px;
    }
`

const StyledLabel = styled.label`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
`

const StyledSelect = styled.select`
    width: 324px;
    height: 52px;
    border: 0px;
    padding: 0px;
    margin-top: 25px;
    background: #EEF8FF;
    margin-bottom: 39px;
    border-bottom:1px solid #2FA6EA;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #0170AE;
    padding-left: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='12' viewBox='0 0 22 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0.353553' y1='0.646447' x2='11.3536' y2='11.6464' stroke='%232FA6EA'/%3E%3Cline y1='-0.5' x2='15.5563' y2='-0.5' transform='matrix(-0.707107 0.707107 0.707107 0.707107 22 1)' stroke='%232FA6EA'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: 353px 22px;
    cursor: pointer;
    @media(min-width: 1440px) {
        width: 394px;
        height: 54px;
        margin-top: 45px;
        margin-bottom: 37px;
    }

`

const StyledInput = styled.input`
    width: 308px;
    height: 52px;
    border: 0px;
    padding: 0px;
    margin-top: 25px;
    margin-bottom: 45px;
    background: #EEF8FF;
    border-bottom:1px solid #2FA6EA;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #0170AE;
    padding-left: 16px;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    @media(min-width: 1440px) {
        width: 378px;
        height: 54px;
        margin-top: 45px;
    }
    &::placeholder{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        color: #0170AE;
    }
`

const FormButton = styled.button`
    width: 324px;
    height: 52px;
    background-color: #2FA6EA;
    margin: 0px;
    padding: 0px;
    border: 0px;
    border: 1px solid #000000;
    border-radius: 4px;
    margin-bottom: 36px;
    @media(min-width: 1440px) {
        width: 394px;
    }
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    color: #FFFFFF;
    box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`;
const TableContainer = styled.div`
     @media(min-width: 1440px) {
        width: 920px;
        border-bottom: 1px solid #2FA6EA;
        height: inherit;
        margin-bottom: 18px;
        max-width: inherit;
    }
    border-bottom: 1px solid #2FA6EA;
    max-width: 324px;
    margin-bottom: 5px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    max-height: 500px;
`
const MainTable = styled.table`
    @media(min-width: 1440px) {
        width: 918px;
        margin-top: 82px;
    }
    width: 326px;
    min-height: 400px;
    align-self: flex-start;
    align-items: start;
`

const StyledTR = styled.tr`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(min-width: 1440px){
        margin-bottom: 20px; 
    }
`

const StyledLongTH = styled.th`
    display: none;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    color: #0170AE;
    height: 36px;
    @media(min-width: 1440px){
        display: flex;
        min-width: 407px;
        text-align: right;
        
    }
`

const StyledTH = styled.th`
    display: none;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    text-align: left;
    color: #0170AE;
    height: 36px;
    @media(min-width: 1440px){
        display: flex;
        width: 136px;
        padding: 0px; 
        justify-content: flex-end;
    }
`

const TotalValueDisplay = styled.div`
    width: 324px;
    height: 36px;
    text-align: end;
    margin-bottom: 37px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: right;

    @media(min-width: 1440px){
        width: 920px;
        text-align: right;
        margin-left: 445px;
        margin-bottom: 25px;
    }
    
`

const SaveButton = styled.button`
    width: 321px;
    height: 52px;
    border: none;
    background-color: #61A91A;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 0px;
    margin-bottom: 44px;
    cursor: pointer;
    @media(min-width: 1440px){
        width: 394px;
        margin-left: 734px;
        margin-bottom: 64px; 
    }
    &:hover{
        opacity: 0.8;
    }

`

const StyledOption = styled.option`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #0170AE;
    cursor: pointer;
`

const AddedProductCard = styled.div`
    width: 321px;
    height: 116px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    margin-bottom: 24px;
    @media(min-width: 1440px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 36px;
        flex-direction: row;
        margin-bottom: 14px;
        
         
    }
`

const AddedProductName = styled.div`
    width: 321px;
    height: 36px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0px;
    grid: 1 1 1 1;
    @media(min-width: 1440px){
        width: 409px;
        line-height:28px
    }
`

const AddedProductCount = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    height: 36px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    align-self: flex-end;
    @media(min-width: 1440px){
        line-height: 28px;
        width: 136px;
        text-align: right;
        font-weight: 300;
    }
`

const AddedProductPrice = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    height: 36px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    align-self: flex-end;
    justify-self: end;
    @media(min-width: 1440px){
        line-height: 28px;
        width: 136px;
        text-align: right;
        font-weight: 300;
    }
`

const HiddenValue = styled.span`
    display: none;
`

const HiddenTitle = styled.div`
    display: none;
`




function FormComponent(){

    const [options, setOptions] = useState([])
    const [productsArray, setProductsArray] = useState([]);
    let [count, setCount] = useState(1);
    const [selectedValue, setSelectedValue] = useState({value: '234'});
    const [selectedTitle, setSelectedTitle] = useState({value:'Морс со смородиной'})
    let [totalPriceValue, setTotalPriceValue] = useState(1100);

    useEffect(() => {
        const getData = async () => {
          const arr = [];
          await axios.get('https://dev-su.eda1.ru/test_task/products.php').then((res) => {
            let result = res.data.products;
            result.map((products) => {
              return arr.push({id: products.id, title: products.title, price: products.price});
            });
            setOptions(arr)
          });
        };
        getData();
      },[]);


      const optionsList = options.map((options) => (
        <StyledOption value={options.price} id={options.title}>{options.title}</StyledOption>))


    const handleCountChange = (e) => {
        setCount(e.target.value);
    }

    let handleSelectedChange = (e) => {
        
        let i = e.nativeEvent.target.selectedIndex
            setSelectedTitle({value: e.nativeEvent.target[i].innerHTML})
        
        setSelectedValue({value: e.target.value});
    }

    let ToNumber = Math.floor(selectedValue.value);
 

    let PushProduct = (e) => {
        e.preventDefault();
        let addedArr = [...productsArray];
        addedArr.push({count: count, title: selectedTitle.value, price: ToNumber * count});
        setProductsArray(addedArr);
        setTotalPriceValue(')');
       }

    

    

    const renderProducts = 
    productsArray.map((item) =>(
        <AddedProductCard>
        <AddedProductName>{item.title}</AddedProductName>
        <AddedProductCount>{item.count} шт.</AddedProductCount>
        <AddedProductPrice>{item.price * item.count}.00</AddedProductPrice>
    </AddedProductCard>))

    return(
        <Main>
            <FormAndTableContainer>
            <MainForm 
            onSubmit={ e => {e.preventDefault()}}>
                <StyledLabel>Выберите продукцию
                <StyledSelect onChange={handleSelectedChange}>
                {optionsList}
                <HiddenValue value={selectedValue.value}></HiddenValue>
                <HiddenTitle value={selectedTitle.title}></HiddenTitle>
                </StyledSelect>
                </StyledLabel>
                <StyledLabel>Введите количество
                <StyledInput required type='number' placeholder="1" onChange={handleCountChange}></StyledInput>
                </StyledLabel>
                <FormButton type = 'button' onClick={PushProduct}>Добавить</FormButton>
            </MainForm>
            <TableContainer>
            <MainTable>
                <StyledTR>
                    <StyledLongTH>Название товара</StyledLongTH>
                    <StyledTH>Количество</StyledTH>
                    <StyledTH>Стоимость</StyledTH>
                </StyledTR>
                <AddedProductCard>
                    <AddedProductName>Борщевой набор номер три</AddedProductName>
                    <AddedProductCount>11 шт.</AddedProductCount>
                    <AddedProductPrice>1100.00</AddedProductPrice>
                </AddedProductCard>
                {renderProducts}
            </MainTable>
            </TableContainer>
            </FormAndTableContainer>
            <TotalValueDisplay>Итого: {totalPriceValue}</TotalValueDisplay>
            <SaveButton>Сохранить</SaveButton>
        </Main>
    )
}

export default FormComponent;