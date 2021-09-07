import { Component } from 'react';
import { product } from '../../interfaces';
import { ProductsCard, Title } from '../';
import './ProductsTable.css';

interface ProductsTableProps {
    title: string,
    products: Array<product>,
    selectProduct(e: any, inStock: Boolean): any,
    selectedCurrency: string | undefined,
}

export default class ProductsTable extends Component<ProductsTableProps> {

    render(): JSX.Element {
        const { title, products } = this.props;
        return(
            <div>
                <Title
                    content = {title}
                />
                <div className="grid-container">
                    {(products && 
                    products.length !== 0 && 
                    products.map((product, index) => {
                        return <div key={index}>
                                <ProductsCard 
                                    product={product}
                                    selectProduct={this.props.selectProduct}
                                    selectedCurrency={this.props.selectedCurrency}
                                />
                            </div>
                    })) || 
                        <h2>No Products Found! ... Please Try Again Later :(</h2>
                    }
                </div>
            </div>
        )
    }
}