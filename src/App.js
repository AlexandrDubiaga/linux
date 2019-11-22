import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NamesList from "./components/NamesList";
import store from "./state/state";

class App extends React.Component {
    constructor() {
        super();
        this.state = store.state;
    }

    addNewName = (newName) => {
        let newname = {id: 4, title: newName, isDone: true};
        this.setState({
            names: [...this.state.names, newname]
        })
    }
    addNewText = (newText) => {
        this.setState({
            newText: newText
        })
    }

    changeButtonColor = (newValueFromButton) => {
        this.setState({
            filterValue: newValueFromButton
        })
    }

    filternames = () => {
        return this.state.names.filter(n => {
            if (this.state.filterValue === 'All') {
                return true;
            } else if (this.state.filterValue === 'Completed') {
                return n.isDone;
            } else {
                return !n.isDone;
            }
        })
    }

    checkChecked = (name, isChecked) => {
        let newNamesArray = this.state.names.map(currentName => {
            if (name !== currentName) {
                return currentName
            } else {
                return {...currentName, isDone: isChecked}
            }
        })
        this.setState({
            names: newNamesArray
        })
    }
    updateName=(name,title)=>{
      let newNamesArray =  this.state.names.map(currentName=>{
           if(currentName!=name){
               return currentName;
           }else{
               debugger
               return {...currentName,title:title}
           }
       })
        this.setState({
            names: newNamesArray
        })
    }

    deleteName = (name) => {
        let newState = this.state.names.filter(n => {
            return n !== name;
        })
        this.setState({
            names: newState
        })

    }

    render() {
        return (
            <div className="App">
                <Header addNewName={this.addNewName} addNewText={this.addNewText} newText={this.state.newText}/>
                <NamesList updateName={this.updateName} filterValue={this.state.filterValue} deleteName={this.deleteName} names={this.filternames()}
                           checkChecked={this.checkChecked}/>
                <Footer changeButtonColor={this.changeButtonColor} filterValue={this.state.filterValue}/>
            </div>
        );
    }

}

export default App;
