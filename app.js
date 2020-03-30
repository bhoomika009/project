
import React, { Component } from 'react';
import FirstComponent from "./components/learning-component/FirstComponent"
import Counter from "./components/counter/Counter";
import Counter1 from "./components/counter/Counter";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            Application Component
<div>
    <Counter by = {1}/>
    <Counter by = {5}/>
    <Counter by = {10}/>

</div>

            <div>
                <Counter by = {1}/>

            </div>
            </div>
    );
    }
}

class LearningComponent extends Component {
    render() {
        return (
            <div className="LearningComponent">
                <FirstComponent></FirstComponent>
                <SecondComponent>  </SecondComponent>
                <ThirdComponent></ThirdComponent>
            </div>
        );
    }
}


class SecondComponent extends Component {
    render() {
        return (
            <div className="SecondComponent">
                Second Component
            </div>
        );
    }
}

function ThirdComponent(){
    return (
        <div className="ThirdComponent">
            Third Component
        </div>
    );
}
export default App;
