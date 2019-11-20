import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NamesList from "./components/NamesList";

class App extends React.Component {

    state = {
        names: [{id: 1, title: 'Solmir__', isDone: false},
            {id: 2, title: 'Hworang', isDone: true},
            {id: 3, title: 'Triton', isDone: false},
            {id: 4, title: 'Eddy Codo', isDone: true}],
        filterValue: "All"
    }

    addNewName = (newName) => {
        let newname = {id: 4, title: newName, isDone: true};
        this.setState({
            names: [...this.state.names, newname]
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
    deleteName=(name)=>{
        let newState = this.state.names.filter(n=>{
            return n!==name;
        })
        this.setState({
            names: newState
        })
    }

    render() {
        debugger
        return (
            <div className="App">
                <Header addNewName={this.addNewName}/>
                <NamesList filterValue={this.state.filterValue} deleteName={this.deleteName} names={this.filternames()} checkChecked={this.checkChecked} />
                <Footer changeButtonColor={this.changeButtonColor} filterValue={this.state.filterValue}/>
            </div>
        );
    }

}

export default App;
