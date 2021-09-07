import React, { Component } from 'react';


interface ErrorBoundaryProps {
    children: React.ReactNode
}
interface ErrorBoundaryState {
    hasError: Boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: any) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: any, info: any) {
        console.log(error)
        console.log(info)
    }

    render(): JSX.Element | React.ReactNode {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}