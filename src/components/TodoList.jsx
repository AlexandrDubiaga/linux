import React from 'react';
import AddNewItemForm from "./AddNewItemForm";
import TodolistTitle from "./TodolistTitle";
import TasksList from "./TasksList";


class TodoList extends React.Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        let tasks = JSON.parse(localStorage.getItem('todoItems' + this.props.id));
        if (localStorage.getItem('todoItems' + this.props.id)) {
            tasks.tasks.forEach(currentTask => {
                if (currentTask.id >= this.nextId) {
                    this.nextId = currentTask.id + 1
                }
            })
            this.setState({
                tasks: tasks.tasks,
            })
        } else {
            this.setState({
                tasks: []
            })
        }
    }


    componentWillUpdate(nextProps, nextState) {
        debugger
        localStorage.setItem('todoItems' + nextProps.id, JSON.stringify(nextState));
    }

    nextId = 1;
    addNewItemInTodolist = (newTitleTask) => {
        let newTask = {
            id: this.nextId,
            title: newTitleTask
        }
        this.nextId++
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    render() {
        return (
            <div>
                <TodolistTitle title={this.props.title}/>
                <AddNewItemForm addNewItem={this.addNewItemInTodolist}/>
                <TasksList tasks={this.state.tasks}/>
            </div>
        );
    }

}

export default TodoList;
