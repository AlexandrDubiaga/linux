import React from 'react';
import OneHuman from "./OneHuman";

class HumansList extends React.Component {

    render() {
        return (
            <div>
                {this.props.peoples.map(p=><OneHuman human={p} {...this.props}/>)}
            </div>
        )
    }
}
export default HumansList;

