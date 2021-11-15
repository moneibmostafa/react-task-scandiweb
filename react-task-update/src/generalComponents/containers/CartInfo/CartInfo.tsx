import { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrencySymbol } from '../../../misc/commonFunction'
import { cartItemsObjs, IHomepageState } from '../../../interfaces';
import CartInfo from '../../components/CartInfo';

interface ICartInfoContainerProps {
    cartItem: cartItemsObjs,
    homepage: IHomepageState,
    type: any
}

class CartInfoContainer extends Component<ICartInfoContainerProps> {
    render(): JSX.Element | null {
        const {
            cartItem,
            type
        } = this.props;
        const { selectedCurrency } = this.props.homepage;
        if (cartItem) {
            const {
                item,
            } = cartItem;
            const currencySymbol =
                selectedCurrency
                && getCurrencySymbol(selectedCurrency, item.prices[0].currency);
            const priceIndex = item.prices.findIndex((obj) => {
                return obj.currency === selectedCurrency;
            });
            const amount =
                priceIndex !== -1
                ? item.prices[priceIndex].amount
                : item.prices[0].amount;
    
            return(
                <CartInfo 
                    cartItem = { cartItem }
                    type = { type }
                    currencySymbol = { currencySymbol }
                    amount = { amount }    
                />
            )
        }
        return null;
    }
}

function mapState(state: any) {
    const { homepage } = state;
    return { homepage };
}
  
const actionCreators = {};
  
const connectedCartInfoContainer = connect(mapState, actionCreators)(CartInfoContainer);
export { connectedCartInfoContainer as CartInfo };