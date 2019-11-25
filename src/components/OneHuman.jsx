import React from 'react';
class OneHuman extends React.Component {
    updateIsChecked=(e)=>{
        debugger
        this.props.changeIsChecked(this.props.human,e.currentTarget.checked)
    }
    render() {
        return (
            <div>
                <input type="checkbox" onChange={this.updateIsChecked} checked={this.props.human.isChecked?true:false}/>{this.props.human.name}
            </div>
        )
    }
}
export default OneHuman;


//<div><input type="checkbox" checked={p.isChecked?true:false}/>{p.name}</div>