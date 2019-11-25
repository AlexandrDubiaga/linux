import React from 'react';
class OneHuman extends React.Component {
    updateIsChecked=(e)=>{
        debugger
        this.props.changeIsChecked(this.props.human,e.currentTarget.checked)
    }
    deleteName=()=>{
        this.props.deleteName(this.props.human);
    }
    render() {
        return (
            <div>
                <button onClick={this.deleteName}>X</button><input type="checkbox" onChange={this.updateIsChecked} checked={this.props.human.isChecked?true:false}/>{this.props.human.name}
            </div>
        )
    }
}
export default OneHuman;


//<div><input type="checkbox" checked={p.isChecked?true:false}/>{p.name}</div>