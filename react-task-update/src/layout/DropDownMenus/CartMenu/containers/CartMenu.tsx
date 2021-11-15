import { Component } from 'react';
import { connect } from 'react-redux';
import { cartState, IHomepageState, navbarState } from '../../../../interfaces';
import { getCurrencySymbol } from '../../../../misc/commonFunction'
import { cartActions, navbarActions } from '../../../../actions';
import CartMenu from '../components/CartMenu';

interface ICartMenuContainerProps {
    homepage: IHomepageState,
    navbar: navbarState,
    cart: cartState,
    goToCart: any,
    handleCartMenuToggle: any,
}

class CartMenuContainer extends Component<ICartMenuContainerProps> {

    getTotalPriceCount = () : { roundedPrice: string; }=> {
        const { cartItems } = this.props.cart;
        const { selectedCurrency } = this.props.homepage;
        let totalPrice: number = 0;
        if (cartItems && cartItems.length !== 0) {
            for (let i = 0; i < cartItems.length; i += 1) {
                const priceIndex = cartItems[i].item.prices.findIndex((obj: any) => {
                    return obj.currency === selectedCurrency;
                });
                const amount = priceIndex !== -1
                    ? cartItems[i].item.prices[priceIndex].amount
                    : cartItems[i].item.prices[0].amount;
                totalPrice = totalPrice + (cartItems[i].count * amount);
            }
        }
        const roundedPrice: string = totalPrice.toFixed(2);
        return { roundedPrice };
    }

    viewBag = () => {
        this.props.goToCart();
        this.closeMenu();
    }

    closeMenu = () => {
        const { cartMenuToggle } = this.props.navbar;
        if (cartMenuToggle) {
            this.props.handleCartMenuToggle();
        }
    }

    render(): JSX.Element | false {
        const { selectedCurrency } = this.props.homepage;
        const { cartMenuToggle } = this.props.navbar;
        const { cartItems } = this.props.cart;        
        const { roundedPrice } = this.getTotalPriceCount();
        const currencySymbol = getCurrencySymbol(selectedCurrency, undefined);

        return(
            cartMenuToggle && <CartMenu 
                cartItems = { cartItems }
                currencySymbol = { currencySymbol }
                roundedPrice = { roundedPrice }
                viewBag = { this.viewBag }
                closeMenu = { this.closeMenu }
            />
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar, cart } = state;
    return { homepage, navbar, cart };
}
  
const actionCreators = {
    goToCart: cartActions.goToCart,
    handleCartMenuToggle: navbarActions.handleCartMenuToggle,
};
  
const connectedCartMenuContainer = connect(mapState, actionCreators)(CartMenuContainer);
export { connectedCartMenuContainer as CartMenuContainer };