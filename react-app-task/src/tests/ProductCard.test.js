import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductCard from '../generalComponents/ProductsCard/ProductsCard';

afterEach(cleanup);

describe('ProductCard component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ProductCard />,
            div
        )
    })

    test('renders ProductCard correctly', () => {
        const product = {
            name: 'test-product-name',
            inStock: true,
            gallery: [],
            description: 'test product description',
            category: 'category1',
            attributes: [{id:1, name:'attr1', type:'type1', items:[]}, {id:2, name:'attr2', type:'type2', items:[]}],
            prices: [{currency:'USD', amount:'1000'}, {currency:'AED', amount:'1500'}]
        }
        render(
            <ProductCard 
                product={product}
            />
        )
        expect(screen.getByText('test-product-name')).toBeInTheDocument();
    })

    test('renders ProductCard correctly - product out of stock', () => {
        const product = {
            name: 'test-product-name',
            inStock: false,
            gallery: [],
            description: 'test product description',
            category: 'category1',
            attributes: [{id:1, name:'attr1', type:'type1', items:[]}, {id:2, name:'attr2', type:'type2', items:[]}],
            prices: [{currency:'USD', amount:'1000'}, {currency:'AED', amount:'1500'}]
        }
        render(
            <ProductCard 
                product={product}
            />
        )
        expect(screen.getByText('OUT OF STOCK')).toBeInTheDocument();
    })
})