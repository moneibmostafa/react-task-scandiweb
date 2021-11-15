import React, { Component } from 'react';
import { MainLayout } from '../../layout';
import { CartPageContainer } from './containers/CartPage';

interface ICartProps {}

export default class CartPage extends Component<ICartProps> {
    render(): JSX.Element {
        return(
            <MainLayout>
                <CartPageContainer />
            </MainLayout>
        )
    }
}