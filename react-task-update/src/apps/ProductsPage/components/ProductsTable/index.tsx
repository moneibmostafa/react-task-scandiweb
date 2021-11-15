import { Component } from 'react';
import { IProduct } from '../../../../interfaces';
import ProductCard from '../../containers/ProductCard';
import './styles.css';

interface IProductsTableProps {
    products: Array<IProduct>,
    selectProduct(e: any): any,
    selectedCurrency: string | undefined,
    addToCart: any,
}

export default class ProductsTable extends Component<IProductsTableProps> {
    render(): JSX.Element {
        const { products } = this.props;
        return(
            <div className="grid-container">
                {(products && 
                    products.length !== 0 && 
                    products.map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard
                                    product={product}
                                    selectProduct={this.props.selectProduct}
                                    selectedCurrency={this.props.selectedCurrency}
                                    addToCart={this.props.addToCart}
                                />
                            </div>
                        )
                })) || 
                    <h2>No Products Found! ... Please Try Again Later :(</h2>
                }
            </div>
        )
    }
}