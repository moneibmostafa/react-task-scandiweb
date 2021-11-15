import { Component } from 'react';
import ImagePanel from '../components/ImagePanel';
import { IProduct } from '../../../interfaces';

interface IImagePanelContainerProps {
    product: IProduct,
    selectImage: any,
}

export default class ImagePanelContainer extends Component<IImagePanelContainerProps> {
    render(): JSX.Element {
        const { product, selectImage } = this.props;
        return (
            <ImagePanel 
                product = { product }
                selectImage = { selectImage }
            />
        )
    }
}