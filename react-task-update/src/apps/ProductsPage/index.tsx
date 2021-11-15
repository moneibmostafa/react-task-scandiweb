import React, { Component } from 'react';
import { MainLayout } from '../../layout';
import { CategoryTitleContainer } from './containers/CategoryTitle';
import { ProductsTableContainer } from './containers/ProductsTable';

interface IProductsTablePageProps {}

export default class ProductsTablePage extends Component<IProductsTablePageProps> {
    render(): JSX.Element {
        return(
            <MainLayout>
                <CategoryTitleContainer />
                <ProductsTableContainer />
            </MainLayout>
        )
    }
}