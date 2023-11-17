import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import banner from '../assets/banner/time_sales_banner.png';
import Title from '../components/Common/Title';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';

import { getProductList } from '../api/product';

const TimeSales = () => {
    const [products, setProducts] = useState(); // 상품 목록

    // 상품 목록 받아오기
    const getProducts = async (sort, filters) => {
        try {
            const res = await getProductList(
                'market-time-sales',
                sort,
                filters,
            );
            setProducts(res.productList);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts(0, null);
    }, []);

    // 정렬된 상품 목록 받아오기
    const sortProducts = async sort => {
        getProducts(sort, null);
    };

    return (
        <Wrapper>
            <Header />
            <img src={banner} />
            <Title text='알뜰쇼핑' />
            <Body>
                <Filter />
                <Result>
                    <SortBar
                        count={products?.length}
                        sortProducts={sortProducts}
                    />
                    <ProductList>
                        {products?.map((product, idx) => {
                            return <Product key={idx} product={product} />;
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
