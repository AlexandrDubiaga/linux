import React from 'react';
class OneHuman extends React.Component {
    updateIsChecked = (e) => {
        this.props.changeIsChecked(this.props.human, e.currentTarget.checked)
    }
    deleteName = () => {
        this.props.deleteName(this.props.human);
    }
    state = {
        editValue:true
    }

    editName = () => {
        this.setState({
            editValue: false
        })
    }

    edit = () => {
        this.setState({
            editValue: true
        })
    }


    updateName=(e)=>{
        this.props.updateName(this.props.human,e.currentTarget.value)

    }


    render() {
        return (
            <div>
                {this.state.editValue ?
                    <div>
                        <input type="checkbox" onChange={this.updateIsChecked}
                               checked={this.props.human.isChecked ? true : false}/>{this.props.human.name + " "}
                        <button onClick={this.deleteName}>X</button>
                        <button onClick={this.editName}>Edit</button>
                    </div>
                    :
                    <div>
                        <input type="checkbox" onChange={this.updateIsChecked} checked={this.props.human.isChecked ? true : false}/><input value={this.props.human.name} onChange={this.updateName}/><button onClick={this.edit}>Edit</button>
                    </div>
                }

            </div>
        )
    }
}
export default OneHuman;


//<div><input type="checkbox" checked={p.isChecked?true:false}/>{p.name}</div>