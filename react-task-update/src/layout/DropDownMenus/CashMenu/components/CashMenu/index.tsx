import { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { CashMenuButtonEnum } from '../../../../Header/buttons/enums';
import './styles.css';

interface ICashMenuProps {
    currencies: any,
    currencySymbol: any,
    getSymbolFromCurrency: any,
    selectCurrency: any,
    closeMenu: any,
}

export default class CashMenu extends Component<ICashMenuProps> {
    cashMenuButtonCheck = (className: any) => {
        if (Object.values(CashMenuButtonEnum).includes(className)) return true;
        return false;
    }
    render(): JSX.Element {
        let {
            currencies,
            currencySymbol,
            getSymbolFromCurrency,
            selectCurrency
        } = this.props;
        return(
            <OutsideClickHandler
                onOutsideClick={(e: any) => {
                    if (this.cashMenuButtonCheck(e.target.className)) return;
                    this.props.closeMenu();
                }}
            >
                <div className='cashMenu'>
                    {currencies
                    && currencies.length !== 0
                    && currencies.map((currency: string, index: number) => {
                        currencySymbol = getSymbolFromCurrency(currency);
                        const currencyString =
                            currencySymbol
                            ? `${currencySymbol} ${currency}`
                            : currency;
                        return <label key={index} className='currency' id={currency} onClick={selectCurrency}>{currencyString}</label>
                    })}
                </div>
            </OutsideClickHandler>
        )
    }
}