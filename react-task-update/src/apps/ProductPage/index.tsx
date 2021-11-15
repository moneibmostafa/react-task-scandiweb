import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { MainLayout } from '../../layout';
import { ProductPageContainer } from './containers/ProductPage';

interface IProductPageProps
    extends RouteComponentProps <{
        id: string
}> {}


export default class ProductPage extends Component<IProductPageProps> {
    render(): JSX.Element {
        return(
            <MainLayout>
                <ProductPageContainer 
                    id = {this.props.match.params.id}
                />
            </MainLayout>
        )
    }
}