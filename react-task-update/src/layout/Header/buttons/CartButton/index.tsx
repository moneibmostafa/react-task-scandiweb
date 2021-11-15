import { Component } from 'react';
import { connect } from "react-redux";
import { navbarActions } from '../../../../actions';
import cart from '../../icons/empty-cart.png';
import { cartState, cartItemsObjs } from '../../../../interfaces';
import { CartMenuButtonEnum } from '../enums';
import './styles.css';

interface ICartButtonProps {
    cart: cartState,
    handleCartMenuToggle: any,
}

class CartButton extends Component<ICartButtonProps> {
    state = {
        img: cart
    }

    handleToggle = () => {
        this.props.handleCartMenuToggle();
    }

    render(): JSX.Element {
        const { cartItems } = this.props.cart;

        let itemsTotalCount: number = 0;
        cartItems.forEach((item: cartItemsObjs) => itemsTotalCount += item.count);
        return(
            <button className={CartMenuButtonEnum.CartIcon} onClick={this.handleToggle}>
                <img className={CartMenuButtonEnum.CartImg} src={this.state.img} alt=""></img>
                {cartItems.length !== 0 && <span className={CartMenuButtonEnum.CartBadge}>
                    <label className={CartMenuButtonEnum.CartLabel}>{itemsTotalCount}</label>
                </span>}
            </button>
        )
    }
}

function mapState(state: any) {
    const { cart } = state;
    return { cart };
}
  
const actionCreators = {
    handleCartMenuToggle: navbarActions.handleCartMenuToggle,
};
  
const connectedCartButton = connect(mapState, actionCreators)(CartButton);
export { connectedCartButton as CartButton };