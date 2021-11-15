import { Component } from 'react';
import { cartItemsObjs } from '../../../../interfaces';
import CartItem from '../components/CartItem';

interface ICartItemContainerProps {
    cartItem: cartItemsObjs,
}

export default class CartItemContainer extends Component<ICartItemContainerProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        return(
            <CartItem 
                cartItem = { cartItem }
            />
        )
    }
}