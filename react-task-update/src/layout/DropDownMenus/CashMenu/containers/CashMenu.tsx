import { Component } from 'react';
import { connect } from 'react-redux';
import getSymbolFromCurrency from 'currency-symbol-map';
import { IHomepageState, navbarState } from '../../../../interfaces';
import { homepageActions, navbarActions } from '../../../../actions';

import CashMenu from '../components/CashMenu';

interface ICashMenuContainerProps {
    navbar: navbarState,
    homepage: IHomepageState,
    selectCurrency: any,
    handleCashMenuToggle: any,
}

class CashMenuContainer extends Component<ICashMenuContainerProps> {

    selectCurrency = (e: any) => {
        this.props.selectCurrency(e.target.id);
        this.props.handleCashMenuToggle();
    }

    closeMenu = () => {
        const { cashMenuToggle } = this.props.navbar;
        if (cashMenuToggle) {
            this.props.handleCashMenuToggle();
        }
    }

    render(): JSX.Element | false {
        const { cashMenuToggle } = this.props.navbar;
        const { currencies } = this.props.homepage;
        let currencySymbol: string | undefined = '';

        return(
            cashMenuToggle && <CashMenu 
                currencies = { currencies }
                currencySymbol = { currencySymbol }
                getSymbolFromCurrency = { getSymbolFromCurrency }
                selectCurrency = { this.selectCurrency }
                closeMenu = { this.closeMenu }
            />
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    selectCurrency: homepageActions.selectCurrency,
    handleCashMenuToggle: navbarActions.handleCashMenuToggle,
};
  
const connectedCashMenuContainer = connect(mapState, actionCreators)(CashMenuContainer);
export { connectedCashMenuContainer as CashMenuContainer };