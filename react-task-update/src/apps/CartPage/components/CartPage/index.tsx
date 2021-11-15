import { Component } from 'react';
import CartInfo from '../../../../generalComponents/containers/CartInfo/CartInfoCartPage';
import CartVars from '../../../../generalComponents/containers/CartVars/CartVarsCartPage';
import './styles.css';

interface ICartPageProps {
    cartItems: any,
}

export default class CartPage extends Component<ICartPageProps> {
    render(): JSX.Element {
        const { cartItems } = this.props;
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
                {cartItems 
                && cartItems.length !== 0 
                && <div className='CartItems'>
                    {cartItems.map((item: any, index: number) => {
                        return <div key={index} className='item'>
                            <CartInfo
                                cartItem = {item}
                            />
                            <CartVars
                                cartItem = {item}
                            />
                        </div>
                    })}
                </div>}
            </div>
        )
    }
}