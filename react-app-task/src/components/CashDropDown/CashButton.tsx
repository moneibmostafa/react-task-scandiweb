import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaChevronUp } from 'react-icons/fa';
import { navbarActions } from '../../actions';
import './CashButton.css';
import { navbarState } from '../../interfaces';

interface CashButtonProps {
    handleCashMenuToggle: any,
    navbar: navbarState
}

class CashButton extends Component<CashButtonProps> {

    handleToggle = () => {
        this.props.handleCashMenuToggle();
    }

    render(): JSX.Element {
        const { cashMenuToggle } = this.props.navbar;
        let style = {transform: 'matrix(1, 0, 0, -1, 0, 0)'};
        if (cashMenuToggle) style = {transform: 'matrix(1, 0, 0, 1, 0, 0)'};

        return(
            <div className='group'>
                <label className='cashSign' onClick={this.handleToggle}>$</label>
                <label className='sign' onClick={this.handleToggle} style={style}><FaChevronUp size={7}/></label>
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