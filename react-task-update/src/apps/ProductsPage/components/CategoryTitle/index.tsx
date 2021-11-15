import { Component } from 'react';
import './styles.css';

interface ICategoryTitleProps {
    title: string
}

export default class CategoryTitle extends Component<ICategoryTitleProps> {
    render(): JSX.Element {
        const { title } = this.props;
        return(
            <div className="title">
                <h2>{title}</h2>
            </div>
        )
    }
}