import { Component } from 'react';
import { connect } from "react-redux";
import { navbarActions } from '../../actions';
import cart from '../../components/NavigationBar/icons/empty-cart.png';
import { cartState } from '../../interfaces'
import './CartButton.css';

interface CartButtonProps {
    cart: cartState,
    handleCartMenuToggle: any
}

class CartButton extends Component<CartButtonProps> {
    state = {
        img: cart
    }

    handleToggle = () => {
        this.props.handleCartMenuToggle();
    }

    render(): JSX.Element {
        const { cartItems } = this.props.cart;
        return(
            <button onClick={this.handleToggle}>
                <img src={this.state.img} alt=""></img>
                {cartItems.length !== 0 && <span className='badge'>
                    <label>{cartItems.length}</label>
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