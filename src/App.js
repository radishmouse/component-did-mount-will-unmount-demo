import React from 'react';
import './App.css';
import Widget from './Widget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowWidget: true,
      widgetState: 0
    };
  }
  render() {
    console.log('App: render');
    return (
      <div className="App">
        {/* no anon func, since no custom args passed to _toggleShowWidget */}
        <button onClick={this._toggleShowWidget}
        >flip it</button>
        { 
          this.state.shouldShowWidget 
            ? <Widget 
                  saveState={this._saveWidgetState}
                  startingValue={this.state.widgetState}
              /> 
            : 'nada' 
        }        
      </div>
    );
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }
  componentWillUnmount() {
    console.log('App: componentWillUnmount');
  }

  _toggleShowWidget = () => {
    this.setState({
      shouldShowWidget: !this.state.shouldShowWidget
    });
  }

  _saveWidgetState = (widgetState) => {
    this.setState({
      widgetState
    }, () => {
      console.log('App: _saveWidgetState');
    });
  }

}


export default App;
