import styled from 'styled-components';
import Header from '../components/Common/Header';
import banner from '../assets/banner/time_sales_banner.png';
import Title from '../components/Common/Title';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';

import { PRODUCT_DATA } from './ProductData';

const TimeSales = () => {
    return (
        <Wrapper>
            <Header />
            <img src={banner} />
            <Title text='알뜰쇼핑' />
            <Body>
                <Filter />
                <Result>
                    <SortBar count='6' />
                    <ProductList>
                        {PRODUCT_DATA.map(product => {
                            return <Product {...product} />;
                        })}
                    </ProductList>
                </Result>
            </Body>
        </Wrapper>
    );
};

export default TimeSales;

const Wrapper = styled.div`
    width: 1050px;
    margin: 0 auto;

    & img {
        cursor: pointer;
    }
`;

const Body = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin: 50px auto 75px;
`;

const Result = styled.div`
    width: 100%;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 100%;
`;
