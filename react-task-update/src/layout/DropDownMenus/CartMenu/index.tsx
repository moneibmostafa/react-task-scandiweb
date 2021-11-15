import { Component } from 'react';
import { CartMenuContainer } from './containers/CartMenu';

interface ICartMenuProps {}

export default class CartMenu extends Component<ICartMenuProps> {
    render(): JSX.Element {
        return(
            <CartMenuContainer />
        )
    }
}