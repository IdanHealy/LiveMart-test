import { styled } from "styled-components"
import {useEffect} from 'react';
import { useState } from "react";
import axios from "axios";

<<<<<<< HEAD

const Main = styled.main`
    @media(min-width: 1440px) {
        display: flex;
        flex-direction: column;
    }

    padding-top: 25px;
    flex-direction: column;
    display: flex;
    min-width: 375px;
    justify-content: center;
`;

const MainWrapper = styled.div`
    min-width: 375px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const FormAndTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width: 1440px){
        flex-direction: row;
        align-items: baseline;
=======
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
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    }
`

const MainForm = styled.form`
    width: 100%;
    height: 100%; 
    max-width: 394px;
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    justify-content: center;
    align-items: center;
    @media(min-width: 1440px){
        margin-right: 51px;
        align-items: baseline;
=======
    @media(min-width: 1440px){
        margin-right: 51px;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    }
`

const StyledLabel = styled.label`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
=======
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
        height: 700px;
=======
        height: inherit;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
        margin-bottom: 18px;
        max-width: inherit;
    }
    border-bottom: 1px solid #2FA6EA;
    max-width: 324px;
    margin-bottom: 5px;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
<<<<<<< HEAD
    
=======
    max-height: 500px;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
`
const MainTable = styled.table`
    @media(min-width: 1440px) {
        width: 918px;
        margin-top: 82px;
    }
    width: 326px;
    min-height: 400px;
<<<<<<< HEAD
    max-height: 400px;
    align-self: flex-start;
    align-items: start;
    overflow-y: scroll;
    scrollbar-width: none;
=======
    align-self: flex-start;
    align-items: start;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
=======
    text-align: end;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    margin-bottom: 37px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: right;
<<<<<<< HEAD
    align-self: center;

    @media(min-width: 1440px){
        min-width: 1360px;
        text-align: right;
        margin-bottom: 25px;
        align-self: flex-end;
        width: inherit;
        max-width: 1440px;
        align-self: center;
=======

    @media(min-width: 1440px){
        width: 920px;
        text-align: right;
        margin-left: 445px;
        margin-bottom: 25px;
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
    align-self: center;
    @media(min-width: 1440px){
        width: 394px;
        margin-left: 0px;
        margin-bottom: 64px;
        align-self: center;
=======
    @media(min-width: 1440px){
        width: 394px;
        margin-left: 734px;
        margin-bottom: 64px; 
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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

<<<<<<< HEAD
const HiddenTitle = styled.span`
    display: none;
`

const HiddenID = styled.span`
    display: none;
`
=======
const HiddenTitle = styled.div`
    display: none;
`



>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab

function FormComponent(){

    const [options, setOptions] = useState([])
    const [productsArray, setProductsArray] = useState([]);
<<<<<<< HEAD
    const [count, setCount] = useState(0);
    const [selectedID, setSelectedID] = useState({value: 101});
    const [selectedValue, setSelectedValue] = useState({value: '234'});
    const [selectedTitle, setSelectedTitle] = useState({value:'Морс со смородиной'})
    let [totalPriceValue, setTotalPriceValue] = useState(0);
    let [order, setOrder] = useState([]);
    let [orderNumber, setOrderNumber] = useState('Сохранить');
=======
    let [count, setCount] = useState(0);
    const [selectedValue, setSelectedValue] = useState({value: '0'});
    const [selectedTitle, setSelectedTitle] = useState({value:'-'})
    let [totalPriceValue, setTotalPriceValue] = useState(1100);
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab

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


<<<<<<< HEAD
    const optionsList = options.map((options) => (
        <StyledOption value={options.price} id={options.id}>{options.title}</StyledOption>))
=======
      const optionsList = options.map((options) => (
        <StyledOption value={options.price} id={options.title}>{options.title}</StyledOption>))
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab


    const handleCountChange = (e) => {
        setCount(e.target.value);
    }

    let handleSelectedChange = (e) => {
<<<<<<< HEAD
        let i = e.nativeEvent.target.selectedIndex
        setSelectedTitle({value: e.nativeEvent.target[i].innerHTML})
        setSelectedValue({value: e.target.value});
        setSelectedID({value: e.nativeEvent.target[i].id});
    }

    let productPriceValueInNumber = Number(selectedValue.value);
    let productIDInNumber = Number(selectedID.value)

=======
        
        let i = e.nativeEvent.target.selectedIndex
            setSelectedTitle({value: e.nativeEvent.target[i].innerHTML})
        
        setSelectedValue({value: e.target.value});
    }

    let ToNumber = Number(selectedValue.value);
 
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab

    let PushProduct = (e) => {
        e.preventDefault();
        let addedArr = [...productsArray];
<<<<<<< HEAD
        addedArr.push({count: count, title: selectedTitle.value, price: productPriceValueInNumber, id: productIDInNumber});
        setProductsArray(addedArr);
        let totalP = [];
        for(let i = 0; i < addedArr.length; i++){
        totalP.push(Number(addedArr[i].price)*Number(addedArr[i].count))}
        let PriceCount = 0;
        let foldTotalPrice = totalP.reduce((accumulator,currentCount) => accumulator+currentCount,PriceCount)
        setTotalPriceValue(foldTotalPrice);
        }

        const SaveOrder = (e) => {
            e.preventDefault();
            let PushOrder = [];
            for(let i = 0; i < productsArray.length; i++){
            PushOrder.push({product_id: productsArray[i].id, quantity: productsArray[i].count})};
            if(productsArray !== []){
            setOrder(PushOrder);
            console.log(order)

            axios.post('https://dev-su.eda1.ru/test_task/save.php',order)
              .then(function (response) {
                setOrderNumber(`№ заказа ${response.data.code}`)
                setProductsArray([]);
              })
              .catch(function (error) {
                console.log(error);
              });
        }}
        
       
=======
        addedArr.push({count: count, title: selectedTitle.value, price: ToNumber});
        setProductsArray(addedArr);
        setTotalPriceValue(')');
       }

    

    

>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    const renderProducts = 
    productsArray.map((item) =>(
        <AddedProductCard>
        <AddedProductName>{item.title}</AddedProductName>
        <AddedProductCount>{item.count} шт.</AddedProductCount>
<<<<<<< HEAD
        <AddedProductPrice>{item.price * item.count} р.</AddedProductPrice>
    </AddedProductCard>
    ))

    return(
        <>
        <Main>
        <MainWrapper>
            <FormAndTableContainer>
                <MainForm onSubmit={e => {e.preventDefault()}}>
                <StyledLabel>Выберите продукцию
                <StyledSelect onChange={handleSelectedChange}>
                    {optionsList}
                
                </StyledSelect>
                </StyledLabel>
                <StyledLabel>Введите количество
                <StyledInput required type='number' placeholder="0" onChange={handleCountChange} value={count}></StyledInput>
=======
        <AddedProductPrice>{item.price * item.count}</AddedProductPrice> 
    </AddedProductCard>))

    return(
        <Main>
            <FormAndTableContainer>
            <MainForm 
            onSubmit={ e => {e.preventDefault()}}>
                <StyledLabel>Выберите продукцию
                <StyledSelect onChange={handleSelectedChange}>
                    <StyledOption></StyledOption>
                {optionsList}
                <HiddenValue value={selectedValue.value}></HiddenValue>
                <HiddenTitle value={selectedTitle.title}></HiddenTitle>
                </StyledSelect>
                </StyledLabel>
                <StyledLabel>Введите количество
                <StyledInput required type='number'  onChange={handleCountChange} value={count}></StyledInput>
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
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
<<<<<<< HEAD
=======
                    <AddedProductName>Борщевой набор номер три</AddedProductName>
                    <AddedProductCount>11 шт.</AddedProductCount>
                    <AddedProductPrice>1100.00</AddedProductPrice>
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
                </AddedProductCard>
                {renderProducts}
            </MainTable>
            </TableContainer>
            </FormAndTableContainer>
<<<<<<< HEAD
            <TotalValueDisplay>Итого: {totalPriceValue} р.</TotalValueDisplay>
            <SaveButton onClick={SaveOrder}>{orderNumber}</SaveButton>
            </MainWrapper>
        </Main>
                <HiddenValue value={selectedValue.value}></HiddenValue>
                <HiddenTitle value={selectedTitle.title}></HiddenTitle>
                <HiddenID value={selectedID.value}></HiddenID>
        </>
        
        
=======
            <TotalValueDisplay>Итого: {totalPriceValue}</TotalValueDisplay>
            <SaveButton>Сохранить</SaveButton>
        </Main>
>>>>>>> 1d9195a3aade667806b3d0f56656f64a640e7aab
    )
}

export default FormComponent;