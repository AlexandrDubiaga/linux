import React from 'react';

class Header extends React.Component {
    constructor() {
        super()
        this.refInput = React.createRef();
    }

    addName = () => {
        let newName =  this.refInput.current.value;
        this.refInput.current.value='';
        this.props.addNewName(newName);
    }

    render() {
        return (
            <div>
                <div>
                    <div></div>
                    <input ref={this.refInput} type="text"/>
                    <button onClick={this.addName}>Add name</button>
                </div>
            </div>
        );
    }

}

export default Header;
