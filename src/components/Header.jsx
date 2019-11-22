import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef();
    }

    addChangeName = (e) => {
        this.props.addNewText(e.currentTarget.value);
    }

    addName = () => {
        this.myRef.current.value = ''
        this.props.addNewName(this.props.newText);
    }

    render() {
        return (
            <div>
                <div>
                    <input ref={this.myRef} onChange={this.addChangeName} type="text"/>
                    <button onClick={this.addName}>Add name</button>
                </div>
            </div>
        );
    }
}

export default Header;
