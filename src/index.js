import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbartest from './components/app_bar';
import {orange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme'


const muiTheme = getMuiTheme({
  appBar: {
    color: orange500,
    height: 50,
    width: '100%',
  },
});

// Create new component. Component should produce HTML
class App extends Component {
    constructor(props) {
        super(props);

    };

    render() {

        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Appbartest />
                </MuiThemeProvider>
            </div>

        );
    }
}
// Take this component's HTML and put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));