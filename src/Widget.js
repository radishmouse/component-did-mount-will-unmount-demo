import React from 'react';


class Widget extends React.Component {

    componentDidMount() {
        console.log('Widget: componentDidMount');
    }
    
    componentWillUnmount() {        
        console.log('Widget: componentWillUnmount');
    }
        
    render() {
        console.log('Widget: render');
        return (
            <div>
                Hello!
            </div>
        );
    }

}


export default Widget;