import React from 'react';


class AddNewItemForm extends React.Component {
    state = {
        newItem: ''
    }

    addNewTask = () => {
        let newItem = this.state.newItem
        this.props.addNewItem(newItem)
        this.state.newItem=''
    }
    updateNewItem=(e)=>{
        this.setState({
            newItem:e.currentTarget.value.trim()
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.newItem} onChange={this.updateNewItem}/>
                <button onClick={this.addNewTask}>Add</button>
            </div>
        );
    }

}

export default AddNewItemForm;
