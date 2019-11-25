import React from 'react';
class Header extends React.Component {
    state = {
        name: '',
        isChecked: false
    }

    updateData = (e) => {
        this.setState({
            name: e.currentTarget[1].value,
            isChecked: e.currentTarget[0].checked

        })
    }
    addNewHuman = (data) => {
        if(this.state.name===''){
            this.state.name='--------';
        }
        let isChecked = this.state.isChecked;
        let humanName = this.state.name;
        let newHuman = {name: humanName, isChecked: isChecked}
        this.props.addNewHumanData(newHuman);
        this.state.isChecked = false;
        this.state.name = ''
    }

    render() {
        return (
            <div className="main">
                <div>
                    <form onChange={this.updateData}>
                        <input checked={this.state.isChecked ? true : false} type="checkbox" name="checked"/>
                        <input value={this.state.name} name="name"/>
                    </form>
                </div>
                <div>
                    <button onClick={this.addNewHuman}>Add human</button>
                </div>

            </div>
        )
    }
}
export default Header;