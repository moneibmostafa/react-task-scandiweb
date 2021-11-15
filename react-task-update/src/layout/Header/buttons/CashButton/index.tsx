import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { navbarActions } from '../../../../actions';
import { navbarState } from '../../../../interfaces';
import { CashMenuButtonEnum } from '../enums';
import './styles.css';

interface CashButtonProps {
    handleCashMenuToggle: any,
    navbar: navbarState,
}

class CashButton extends Component<CashButtonProps> {

    handleToggle = () => {
        this.props.handleCashMenuToggle();
    }

    render(): JSX.Element {
        const { cashMenuToggle } = this.props.navbar;
        const icon = cashMenuToggle
            ? <FaChevronUp size={7}/>
            : <FaChevronDown size={7}/>
        return(
            <div className='group'>
                <label className={CashMenuButtonEnum.CashSign} onClick={this.handleToggle}>$</label>
                <label className={CashMenuButtonEnum.CashIcon} onClick={this.handleToggle}>{icon}</label>
            </div>
        )
    }
}

function mapState(state: any) {
    const { navbar } = state;
    return { navbar };
}
  
const actionCreators = {
    handleCashMenuToggle: navbarActions.handleCashMenuToggle,
};
  
const connectedCashButton = connect(mapState, actionCreators)(CashButton);
export { connectedCashButton as CashButton };