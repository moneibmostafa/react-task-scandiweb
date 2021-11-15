import { Component } from 'react';
import { IProduct } from '../../../../interfaces';
import './styles.css';

interface IImagePanelProps {
    product: IProduct,
    selectImage: any,
}

export default class ImagePanel extends Component<IImagePanelProps> {
    render(): JSX.Element {
        const { product, selectImage } = this.props;
        const { gallery } = product;
        return(
            <div className='imagesPanel'>
                {gallery.map((image: string, index: number) => {
                    return (
                    <img
                        onClick={selectImage}
                        key={index}
                        src={image}
                        alt="gallery"
                    />)
                })}
            </div>
        )
    }
}