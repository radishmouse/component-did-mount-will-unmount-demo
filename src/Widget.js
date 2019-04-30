import React from 'react';


class Widget extends React.Component {

    constructor(props) {
        super(props);
        console.log('Widget: constructor');
        this.state = {
            aNumber: 0
        }
    }

    componentDidMount() {
        console.log('Widget: componentDidMount');
        this.interval = setInterval(() => {
            this.setState({
                aNumber: this.state.aNumber + 1
            });
        }, 1000);
    }
    
    componentWillUnmount() {        
        console.log('Widget: componentWillUnmount');
        clearInterval(this.interval);
    }
        
    render() {
        console.log('Widget: render');
        return (
            <div>
                Hello! {this.state.aNumber}
            </div>
        );
    }

}


export default Widget;