import { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import CartItem from '../../containers/CartItem';
import { cartItemsObjs } from '../../../../../interfaces';
import { CartMenuButtonEnum } from '../../../../Header/buttons/enums';
import './styles.css';

interface ICartMenuProps {
    cartItems: any,
    currencySymbol: any,
    roundedPrice: any,
    viewBag: any,
    closeMenu: any,
}

export default class CartMenu extends Component<ICartMenuProps> {
    cartMenuButtonCheck = (className: any) => {
        if (Object.values(CartMenuButtonEnum).includes(className)) return true;
        return false;
    }
    render(): JSX.Element {
        const {
            cartItems,
            currencySymbol,
            roundedPrice,
            viewBag
        } = this.props;
        let itemsTotalCount: number = 0;
        cartItems.forEach((item: cartItemsObjs) => itemsTotalCount += item.count);
        return(
            <OutsideClickHandler
                onOutsideClick={(e: any) => {
                    if (this.cartMenuButtonCheck(e.target.className)) return;
                    this.props.closeMenu();
                }}
            >
                <div className='cartMenu'>
                    <label className='myBag'><strong>My Bag</strong>, {itemsTotalCount} items</label>
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
                    <div className='cartMenuFooter'>
                        <button onClick={viewBag}>
                            View Bag
                        </button>
                        <button className='checkout' onClick={viewBag}>
                            Checkout
                        </button>
                    </div>
                </div>
            </OutsideClickHandler>
        )
    }
}