import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import Title from '../components/Common/Title';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';
import FilterModal from '../components/Common/FilterModal';

import { getProductList } from '../api/product';

const Best = () => {
    const [products, setProducts] = useState(); // 상품 목록
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기 함수
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 버튼 클릭 시 실행할 함수
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // 상품 목록 받아오기
    const getProducts = async (sort, filters) => {
        try {
            const res = await getProductList('market-best', sort, filters);
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
        <>
            {isModalOpen && (
                <FilterModal onClick={handleModalClose}></FilterModal>
            )}
            <Header />
            <Title text='베스트' />
            <Body>
                <Filter handleModalOpen={handleModalOpen} />
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
        </>
    );
};

export default Best;

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
