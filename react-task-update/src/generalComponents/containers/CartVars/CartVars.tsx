import { Component } from 'react';
import { connect } from 'react-redux';
import { cartItemsObjs } from '../../../interfaces';
import CartVars from '../../components/CartVars';
import { cartActions } from '../../../actions';

interface ICartVarsContainerProps {
    cartItem: cartItemsObjs,
    type: any,
    changeItemCount: any,
    changeItemCartImage: any,
}

class CartVarsContainer extends Component<ICartVarsContainerProps> {
    handleCountChange = (e: any) => {
        const { name } = this.props.cartItem.item;
        const { selectedAttribute } = this.props.cartItem;
        const countShift = e.target.innerHTML === '+' ? 1 : -1
        this.props.changeItemCount(countShift, name, selectedAttribute)
    }

    handleChangeImage = (e: any) => {
        const { name } = this.props.cartItem.item;
        const { selectedAttribute } = this.props.cartItem;
        const imageShift = e.target.className === 'imgRightArrow' ? 1 : -1
        this.props.changeItemCartImage(imageShift, name, selectedAttribute)
    }

    render(): JSX.Element {
        const {
            cartItem,
            type
        } = this.props;
        return(
            <CartVars 
                cartItem = { cartItem }
                type = { type }
                handleCountChange = { this.handleCountChange }
                handleChangeImage = { this.handleChangeImage }
            />
        )
    }
}

function mapState(state: any) {
    return {};
}
  
const actionCreators = {
    changeItemCount: cartActions.changeItemCount,
    changeItemCartImage: cartActions.changeItemCartImage,
};
  
const connectedCartVarsContainer = connect(mapState, actionCreators)(CartVarsContainer);
export { connectedCartVarsContainer as CartVars };