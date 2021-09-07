import React, { Component } from 'react';
import { connect } from "react-redux";
import { homepageActions } from '../../actions';
import { homepageState } from '../../interfaces';
import { CartButton } from '../CartDropDown'; 
import logo from './icons/a-logo.png';
import './NavigationBar.css';
import { CashButton } from '../CashDropDown/CashButton';

interface NavBarprops {
    getCurrencies: any,
    getProductsTable: any,
    restoreCart: any,
    handleChangeCategory: any
    homepage: homepageState,
}

class NavigationBar extends Component<NavBarprops> {
    async componentDidMount() {
        await this.props.getCurrencies();
        await this.props.getProductsTable("");
        await this.props.restoreCart();
    }

    changeCategory = (e: any) => {
        const { name } = e.target;
        if (name) this.props.handleChangeCategory(name);
        else {
            this.props.handleChangeCategory(e.target.innerHTML);
        }
    }

    renderMainButtons = (mainButtons: Array<string>, activeCategory: string) => {
        return (
            <div className="mainButtons">
                {mainButtons.map((button, index) =>
                    button.toLowerCase() === activeCategory.toLowerCase() ? 
                        <button key={index} className="active" name={button} onClick={this.changeCategory}><label>{button}</label></button>
                        : <button key={index} name={button} onClick={this.changeCategory}><label>{button}</label></button>
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
      getCurrencies: homepageActions.getCurrencies,
      getProductsTable: homepageActions.getProductsTable,
      restoreCart: homepageActions.restoreCart,
      handleChangeCategory: homepageActions.handleChangeCategory,
  };
  
  const connectedNavigationBar = connect(mapState, actionCreators)(NavigationBar);
  export { connectedNavigationBar as NavigationBar };