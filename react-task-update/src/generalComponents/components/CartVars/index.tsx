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
        const { gallery } = item;
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
                <div className='cartVarsBlock'>
                    <div className='plusSign' onClick={handleCountChange}>+</div>
                    <label className='count'>{count}</label>
                    <div className='negSign' onClick={handleCountChange}>-</div>
                    <div className='mainImage'>
                        <img  
                            src={gallery[imageIndex]} 
                            alt='mainImage'
                        />
                        {type === 'cartPage'
                            && gallery.length > 1
                            && <div className='imgRightArrow' onClick={handleChangeImage}>{'>'}</div>
                        }
                        {type === 'cartPage'
                            && gallery.length > 1
                            && <div className='imgLeftArrow' onClick={handleChangeImage}>{'<'}</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}