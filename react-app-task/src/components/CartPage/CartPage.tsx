import React, { Component } from 'react';
import { connect } from "react-redux";
import { CartInfo, CartVars } from '../../generalComponents';
import { cartActions } from '../../actions';
import { nameStyle, restOfNameStyle, priceStyle, attributesListStyle, selectedAttributeStyle, attributeStyle, cartVarStyle, plusSignStyle, negSignStyle, countStyle, mainImgStyle } from './cartItemStyles';
import './CartPage.css';
import { cartState, homepageState } from '../../interfaces';

interface CartPageProps {
    cart: cartState,
    homepage: homepageState,
    changeItemCount: any
}

class CartPage extends Component<CartPageProps> {

    render(): JSX.Element {
        const { cartItems } = this.props.cart;
        const { homepage } = this.props;
        const menuHeight = (cartItems.length * 226) + '';
        const style = {height: `${menuHeight}px`}

        if (!cartItems || (cartItems && cartItems.length === 0)) {
            return (
                <div className='CartPage'>
                    <h1>Cart Empty!</h1>
                </div>
            )
        }

        return(
            <div className='CartPage'>
                <label className='Title'>Cart</label>
                {cartItems && cartItems.length !== 0 && <div className='CartItems' style={style}>
                    {cartItems.map((item: any, index: number) => {
                        return <div key={index} className='item'>
                            <CartInfo
                                cartItem = {item}
                                homepage = {homepage}
                                nameStyle = {nameStyle}
                                restOfNameStyle = {restOfNameStyle}
                                priceStyle = {priceStyle}
                                attributesListStyle = {attributesListStyle}
                                selectedAttributeStyle = {selectedAttributeStyle}
                                attributeStyle = {attributeStyle}
                            />
                            <CartVars
                                cartItem = {item}
                                changeItemCount = {this.props.changeItemCount}
                                cartVarStyle = {cartVarStyle}
                                plusSignStyle = {plusSignStyle}
                                negSignStyle = {negSignStyle}
                                countStyle = {countStyle}
                                mainImgStyle = {mainImgStyle}
                            />
                        </div>
                    })}
                </div>}
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar, cart } = state;
    return { homepage, navbar, cart};
}
  
const actionCreators = {
    changeItemCount: cartActions.changeItemCount,
};
  
const connectedCartPage = connect(mapState, actionCreators)(CartPage);
export { connectedCartPage as CartPage };