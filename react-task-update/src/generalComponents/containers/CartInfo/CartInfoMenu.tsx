import { Component } from 'react';
import { CartInfo } from './CartInfo';
import { cartItemsObjs } from '../../../interfaces';
import '../../components/CartInfo/cartInfoMenuStyles.css'

interface ICartInfoMenuContainerProps {
    cartItem: cartItemsObjs,
}

export default class CartInfoMenuContainer extends Component<ICartInfoMenuContainerProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        return(
            <CartInfo
                cartItem = { cartItem }
                type = 'menu'
            />
        )
    }
}