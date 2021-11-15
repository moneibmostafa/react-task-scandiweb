import { Component } from 'react';
import { CartVars } from './CartVars';
import { cartItemsObjs } from '../../../interfaces';
import '../../components/CartVars/cartVarsCartPageStyles.css';

interface ICartVarsCartPageContainerProps {
    cartItem: cartItemsObjs,
}

export default class CartVarsCartPageContainer extends Component<ICartVarsCartPageContainerProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        const key = `${cartItem.count}${cartItem.image}`
        return(
            <CartVars
                key = { key }
                cartItem = { cartItem }
                type = 'cartPage'
            />
        )
    }
}