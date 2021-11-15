import { Component } from 'react';
import { CartVars } from './CartVars';
import { cartItemsObjs } from '../../../interfaces';
import '../../components/CartVars/cartVarsMenuStyles.css';

interface ICartVarsMenuContainerProps {
    cartItem: cartItemsObjs,
}

export default class CartVarsMenuContainer extends Component<ICartVarsMenuContainerProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        return(
            <CartVars
                key = { cartItem.count }
                cartItem = { cartItem }
                type = 'menu'
            />
        )
    }
}