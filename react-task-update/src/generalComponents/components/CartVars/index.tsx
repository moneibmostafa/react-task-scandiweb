import { Component } from 'react';
import { cartItemsObjs } from '../../../interfaces';

interface ICartVarsProps {
    cartItem: cartItemsObjs,
    type: any,
    handleCountChange: any,
    handleChangeImage: any,
}

export default class CartVars extends Component<ICartVarsProps> {
    render(): JSX.Element {
        const {
            cartItem,
            type,
            handleCountChange,
            handleChangeImage
        } = this.props;
        const {
            item,
            count,
            image,
        } = cartItem;
        const cartVarsClassName =
            type === 'menu'
            ? 'cartVarsMenu'
            : 'cartVarsCartPage';
        const imageIndex =
            type === 'menu'
            ? 0
            : image;
        return(
            <div className={cartVarsClassName}>
                <div className='plusSign' onClick={handleCountChange}>+</div>
                <div className='negSign' onClick={handleCountChange}>-</div>
                <label className='count'>{count}</label>
                <div className='mainImage'>
                    <img  
                        src={item.gallery[imageIndex]} 
                        alt='mainImage'
                    />
                    {type === 'cartPage'
                        && <div className='imgRightArrow' onClick={handleChangeImage}>{'>'}</div>
                    }
                    {type === 'cartPage'
                        && <div className='imgLeftArrow' onClick={handleChangeImage}>{'<'}</div>
                    }
                </div>
            </div>
        )
    }
}