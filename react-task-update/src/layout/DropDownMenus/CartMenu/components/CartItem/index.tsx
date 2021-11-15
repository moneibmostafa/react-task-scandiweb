import React, { Component } from 'react';
import { cartItemsObjs } from '../../../../../interfaces';
import CartInfo from '../../../../../generalComponents/containers/CartInfo/CartInfoMenu';
import CartVars from '../../../../../generalComponents/containers/CartVars/CartVarsMenu';
import './styles.css';

interface ICartItemProps {
    cartItem: cartItemsObjs,
}

export default class CartItem extends Component<ICartItemProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        return(
            <div className='cartItem'>
                <CartInfo 
                    cartItem = { cartItem }
                />
                <CartVars 
                    cartItem = { cartItem }
                />
            </div>
        )
    }
}