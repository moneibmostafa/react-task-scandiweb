import { Component } from 'react';
import { CashMenuContainer } from './containers/CashMenu';

interface ICashMenuProps {}

export default class CashMenu extends Component<ICashMenuProps> {
    render(): JSX.Element {
        return(
            <CashMenuContainer />
        )
    }
}