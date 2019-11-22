import React from 'react';
import OneName from "./OneName";

class NamesList extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.props.names.map(n => <OneName name={n} filterValue={this.props.filterValue}
                                                    deleteName={this.props.deleteName}
                                                    checkChecked={this.props.checkChecked}/>)}
            </div>
        );
    }
}

export default NamesList;
