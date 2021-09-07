import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CartItem } from './CartItem';
import { cartState, homepageState, menuStyle, navbarState } from '../../interfaces';
import { cartItemsObjs } from '../../interfaces';
import { getCurrencySymbol } from '../../misc/commonFunction'
import { cartActions } from '../../actions';
import './CartMenu.css';

interface CartMenuProps {
    homepage: homepageState,
    navbar: navbarState,
    cart: cartState,
    goToCart: any,
}

class CartMenu extends Component<CartMenuProps> {

    getTotalPriceCount = () : { roundedPrice: string; }=> {
        const { cartItems } = this.props.cart;
        const { selectedCurrency } = this.props.homepage;
        let totalPrice: number = 0;
        if (cartItems && cartItems.length !== 0) {
            for (let i = 0; i < cartItems.length; i += 1) {
                const priceIndex = cartItems[i].item.prices.findIndex((obj: any) => {
                    return obj.currency === selectedCurrency;
                });
                const amount = priceIndex !== -1 ? cartItems[i].item.prices[priceIndex].amount : cartItems[i].item.prices[0].amount;
                totalPrice = totalPrice + (cartItems[i].count * amount);
            }
        }
        const roundedPrice: string = totalPrice.toFixed(2);
        return { roundedPrice };
    }

    viewBag = () => {
        this.props.goToCart();
    }

    render(): JSX.Element {
        const { selectedCurrency } = this.props.homepage;
        const { cartMenuToggle } = this.props.navbar;
        const { cartItems } = this.props.cart;
        
        const menuHeight = 185 + (cartItems.length * 181) + '';
        const { roundedPrice } = this.getTotalPriceCount();
        const currencySymbol = getCurrencySymbol(selectedCurrency, undefined);
        
        let style: menuStyle = {height: `${menuHeight}px`, display: 'block'}
        if (!cartMenuToggle) style = {height: `${menuHeight}px`, display: 'none'}

        return(
            <div className='cartMenu dropdown-content' style={style}>
                <label className='myBag'><strong>My Bag</strong>, {cartItems.length} items</label>
                <div className='listOfItems'>
                    {cartItems && cartItems.length !== 0 && cartItems.map((obj: cartItemsObjs, index: number) => {
                        return <CartItem key={index} cartItem={{...obj}}/>
                    })
                    }
                </div>
                <div className='totalPriceBlock'>
                    <label className='total'>Total</label>
                    <label className='totalPrice'>{currencySymbol}{roundedPrice}</label>
                </div>
                <div className='footer'>
                    <button onClick={this.viewBag}>
                        View Bag
                    </button>
                    <button onClick={this.viewBag} style={{ background: '#5ECE7B', border: '0px', color: '#FFFFFF' }}>
                        Checkout
                    </button>
                </div>
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar, cart } = state;
    return { homepage, navbar, cart };
}
  
const actionCreators = {
    goToCart: cartActions.goToCart,
};
  
const connectedCartMenu = connect(mapState, actionCreators)(CartMenu);
export { connectedCartMenu as CartMenu };