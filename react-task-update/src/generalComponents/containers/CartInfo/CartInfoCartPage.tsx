import { Component } from 'react';
import { CartInfo } from './CartInfo';
import { cartItemsObjs } from '../../../interfaces';
import '../../components/CartInfo/cartInfoCartPageStyles.css';

interface ICartInfoCartPageContainerProps {
    cartItem: cartItemsObjs,
}

export default class CartInfoCartPageContainer extends Component<ICartInfoCartPageContainerProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        return(
            <CartInfo
                cartItem = { cartItem }
                type = 'cartPage'
            />
        )
    }
}