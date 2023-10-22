import React from 'react';
import styled from 'styled-components';
import CartComponent from '../components/Cart/CartComponent';
import Header from '../components/Common/Header';

function Cart() {
    return (
        <Div>
            <Header />
            <div className='title'>장바구니</div>
            <CartComponent />
        </Div>
    );
}

export default Cart;

const Div = styled.div`
    width: 1050px;
    margin: 0px auto;
    padding-bottom: 80px;

    .title {
        padding: 50px 0px 48px;
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
        text-align: center;

    }
`;
