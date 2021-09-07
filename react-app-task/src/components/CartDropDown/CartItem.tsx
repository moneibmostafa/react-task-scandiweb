import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartActions } from '../../actions';
import { cartItemsObjs } from '../../interfaces';
import { CartInfo, CartVars } from '../../generalComponents';
import { nameStyle, restOfNameStyle, priceStyle, attributesListStyle, selectedAttributeStyle, attributeStyle, cartVarStyle, plusSignStyle, negSignStyle, countStyle, mainImgStyle } from './cartItemMenuStyles';
import { homepageState } from '../../interfaces'
import './CartItem.css';


interface CartItemProps {
    cartItem: cartItemsObjs,
    homepage: homepageState,
    changeItemCount: any
}

class CartItem extends Component<CartItemProps> {

    handleCountChange = (e: any) => {
        const { name } = this.props.cartItem.item;
        const { selectedAttribute } = this.props.cartItem;
        e.target.innerHTML === '+' ? this.props.changeItemCount(1, name, selectedAttribute) : this.props.changeItemCount(-1, name, selectedAttribute)
    }

    render(): JSX.Element {
        const { cartItem } = this.props;

        return(
            <div className='cartItem'>
                <CartInfo 
                    cartItem = {cartItem}
                    homepage = {this.props.homepage}
                    nameStyle = {nameStyle}
                    restOfNameStyle = {restOfNameStyle}
                    priceStyle = {priceStyle}
                    attributesListStyle = {attributesListStyle}
                    selectedAttributeStyle = {selectedAttributeStyle}
                    attributeStyle = {attributeStyle}
                />
                <CartVars 
                    cartItem = {cartItem}
                    changeItemCount = {this.props.changeItemCount}
                    cartVarStyle = {cartVarStyle}
                    plusSignStyle = {plusSignStyle}
                    negSignStyle = {negSignStyle}
                    countStyle = {countStyle}
                    mainImgStyle = {mainImgStyle}
                />
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage } = state;
    return { homepage };
}
  
const actionCreators = {
    changeItemCount: cartActions.changeItemCount,
};
  
const connectedCartItem = connect(mapState, actionCreators)(CartItem);
export { connectedCartItem as CartItem };