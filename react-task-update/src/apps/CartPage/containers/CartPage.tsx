import { Component } from 'react';
import { connect } from "react-redux";
import { cartState } from '../../../interfaces';
import CartPage from '../components/CartPage';

interface ICartPageContainerProps {
    cart: cartState,
}

class CartPageContainer extends Component<ICartPageContainerProps> {

    render(): JSX.Element {
        const { cartItems } = this.props.cart;
        return(
            <CartPage 
                cartItems = { cartItems }
            />
        )
    }
}

function mapState(state: any) {
    const { cart } = state;
    return { cart };
}
  
const actionCreators = {};
  
const connectedCartPageContainer = connect(mapState, actionCreators)(CartPageContainer);
export { connectedCartPageContainer as CartPageContainer };