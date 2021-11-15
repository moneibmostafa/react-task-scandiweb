import { Component } from 'react';
import { connect } from "react-redux";
import CartegoryTitle from '../components/CategoryTitle';
import { IHomepageState } from '../../../interfaces';

interface ICategoryTitleContainerProps {
    homepage: IHomepageState,
}

class CategoryTitleContainer extends Component<ICategoryTitleContainerProps> {
    render(): JSX.Element | null {
        const { activeCategory } = this.props.homepage;
        return(
            <CartegoryTitle
                title = {
                    activeCategory
                    && activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
                }
            />
        )
    }
}

function mapState(state: any) {
    const { homepage } = state;
    return { homepage };
}
  
const actionCreators = {};
  
const connectedCategoryTitleContainer = connect(mapState, actionCreators)(CategoryTitleContainer);
export { connectedCategoryTitleContainer as CategoryTitleContainer };