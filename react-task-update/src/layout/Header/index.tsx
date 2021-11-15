import { Component } from 'react';
import { connect } from "react-redux";
import { homepageActions } from '../../actions';
import { IHomepageState } from '../../interfaces';
import { CartButton } from './buttons/CartButton'; 
import { CashButton } from './buttons/CashButton';
import logo from './icons/a-logo.png';
import './styles.css';

interface INavBarprops {
    handleChangeCategory: any
    homepage: IHomepageState,
}

class NavigationBar extends Component<INavBarprops> {
    state = {
        cartMenuOpen: false,
        cashMenuOpen: false,
    }
    changeCategory = (e: any) => {
        const { name } = e.target;
        const category =
            name
            ? name
            : e.target.innerHTML
        this.props.handleChangeCategory(category);
    }

    renderMainButtons = (mainButtons: Array<string>, activeCategory: string) => {
        return (
            <div className="mainButtons">
                {mainButtons.map((button, index) =>
                    <button
                        key = {index}
                        className = {button.toLowerCase() === activeCategory.toLowerCase() ? 'active' : ''}
                        name = {button}
                        onClick = {this.changeCategory}
                    >
                        <label>{button}</label>
                    </button>
                )}
            </div>
        )
    }

    renderLogo = () => {
        return(
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
        )
    }

    renderActions = () => {
        return(
            <div className="actions">
                <div className='pricingGroup'>
                    <CashButton />
                </div>
                <div className="cartButton">
                    <CartButton />
                </div>
            </div>
        )
    }

    render(): JSX.Element {
        const { categories, activeCategory } = this.props.homepage;
        return(
            <div className="topnav">
                {this.renderMainButtons(categories, activeCategory)}
                {this.renderLogo()}
                {this.renderActions()}
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage } = state;
    return { homepage };
}
  
const actionCreators = {
    handleChangeCategory: homepageActions.handleChangeCategory,
};
  
const connectedNavigationBar = connect(mapState, actionCreators)(NavigationBar);
export { connectedNavigationBar as NavigationBar };