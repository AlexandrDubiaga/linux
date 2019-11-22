import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
    }

    changeColor = (e) => {
        this.props.changeButtonColor(e.currentTarget.outerText)
    }

    render() {
        let all = this.props.filterValue === "All" ? 'buttonColorAll' : '';
        let completed = this.props.filterValue === "Completed" ? 'buttonColorCompleted' : '';
        let active = this.props.filterValue === "Active" ? 'buttonColorActive' : '';
        return (
            <div>
                <button className={all} onClick={this.changeColor}>All</button>
                <button className={completed} onClick={this.changeColor}>Completed</button>
                <button className={active} onClick={this.changeColor}>Active</button>
            </div>
        );
    }
}

export default Header;


