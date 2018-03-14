import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// Styles
// Import Main styles for this application
import './App.css'

// Import components
import Index from './views/index'

class App extends Component {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <Switch>
                        <Route path="/" name="index" component={Index} />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;
