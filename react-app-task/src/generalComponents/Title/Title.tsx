import { Component } from 'react';
import './Title.css';

interface TitleProps {
    content: string
}

export default class Title extends Component<TitleProps> {
    render(): JSX.Element {
        const { content } = this.props;
        return(
            <div className="title">
                <h2>{content}</h2>
            </div>
        )
    }
}