import React from 'react';
import './App.css';
import store from "./state/state";
import Header from "./components/Header";
import HumansList from "./components/HumansList";

class App extends React.Component {
    constructor() {
        super();
        this.state = store.state;
    }

    addNewHumanData = (dataHuman) => {
        this.setState({
            peoples: [...this.state.peoples, {name:dataHuman.name,isChecked:dataHuman.isChecked}]
        })
    }
    getStatePeoples=()=>{
        return this.state.peoples
    }

    changeIsChecked=(humen,isChecked)=>{
        debugger
        let newState = this.state.peoples.map(h=>{
            if(humen!=h){
                return h
            }else return {...h,isChecked:isChecked}
        })
        this.setState({
           peoples:newState
        })
    }
    deleteName=(name)=>{
       let newState =  this.state.peoples.filter(n=>{
            return n!=name
        })
        this.setState({
            peoples:newState
        })
    }

    updateName=(human,name)=>{
        let newState = this.state.peoples.map(h=>{
            if(human!=h){
                return h
            }else return {...h,name:name}
        })
        this.setState({
            peoples:newState
        })
    }
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <div>  <Header addNewHumanData={this.addNewHumanData}/></div>
                    <div><HumansList updateName={this.updateName} deleteName={this.deleteName} changeIsChecked={this.changeIsChecked} peoples={this.getStatePeoples()} /></div>
                </div>
            </div>
        );
    }

}

export default App;
