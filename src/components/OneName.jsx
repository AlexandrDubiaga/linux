import React from 'react';

class OneName extends React.Component {
    constructor() {
        super()
    }

    check = (e) => {
        this.props.checkChecked(this.props.name, e.currentTarget.checked)
    }
    changeColorText = () => {
        if (this.props.filterValue == 'All') {
            return 'colorTextForAll';
        } else if (this.props.filterValue == 'Completed') {
            return 'colorTextForCompleted'
        } else {
            return 'colorTextForActive';
        }
    }
    deleteFormTodoList = () => {
        this.props.deleteName(this.props.name);
    }

    render() {
        return (
            <div className="HeaderWrapper">
                <div className="NamesBlock">
                    <span ><input onChange={this.check}
                                                                    checked={this.props.name.isDone ? true : false}
                                                                    type="checkbox"/> </span><span className={this.changeColorText()} >{this.props.name.title}</span>
                    <span className="buttonAddTask"><button onClick={this.deleteFormTodoList}>DELETE</button></span>
                </div>
            </div>
        );
    }

}

export default OneName;
