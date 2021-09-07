import React, { Component } from 'react';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { homepageState, menuStyle, navbarState } from '../../interfaces';
import './CashMenu.css';
import { homepageActions } from '../../actions';

interface CashMenuProps {
    navbar: navbarState,
    homepage: homepageState,
    selectCurrency: any
}

class CashMenu extends Component<CashMenuProps> {

    selectCurrency = (e: any) => {
        this.props.selectCurrency(e.target.id);
    }

    render(): JSX.Element {
        const { cashMenuToggle } = this.props.navbar;
        const { currencies } = this.props.homepage;
        let currencySymbol: string | undefined = '';

        const menuHeight = 20 + (currencies.length * 49) + '';
        let style: menuStyle = {height: `${menuHeight}px`}
        if (!cashMenuToggle) style = {height: `${menuHeight}px`, display: 'none'}

        return(
            <div className='cashMenu dropdown-content' style={style}>
                {currencies && currencies.length !== 0 && currencies.map((currency: string, index: number) => {
                    currencySymbol = getSymbolFromCurrency(currency);
                    if (!currencySymbol) return <label key={index} className='currency' id={currency} onClick={this.selectCurrency}>{currency}</label>
                    else return <label key={index} className='currency' id={currency} onClick={this.selectCurrency}>{currencySymbol + ' ' + currency}</label>
                })}
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    selectCurrency: homepageActions.selectCurrency,
};
  
const connectedCashMenu = connect(mapState, actionCreators)(CashMenu);
export { connectedCashMenu as CashMenu };