import { Component } from 'react';
import { connect } from "react-redux";

import LoaderGif from './loader.gif';
import './FullPageLoader.css';
import { homepageState } from '../../interfaces';


interface FullPageLoaderProps {
    homepage: homepageState,
}

class FullPageLoader extends Component<FullPageLoaderProps> {

    render(): JSX.Element | null {
        const { loading } = this.props.homepage;
        if (!loading) return null;
        return(
            <div className='loader-container'>
                <div className='loader'>
                    <img src={LoaderGif} alt="Avatar"/>
                </div>
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage } = state;
    return { homepage };
}
  
const actionCreators = {};
  
const connectedFullPageLoader = connect(mapState, actionCreators)(FullPageLoader);
export { connectedFullPageLoader as FullPageLoader };