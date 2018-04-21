import React, {Component} from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <div className="container">
                    <div className="row">
                        <div class="col s6">
                            <p>Test</p>
                        </div>
                        <div class="col s6">
                            <p>Test</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
