import React from 'react';


class TasksList extends React.Component {

    render() {
        return (
            <div>
                {this.props.tasks.map(t => {
                    return (
                        <div>
                            <div>id: {t.id} Title: {t.title}</div>
                        </div>
                    )
                })}
            </div>
        );
    }

}

export default TasksList;
