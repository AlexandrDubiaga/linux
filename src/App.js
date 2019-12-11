import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddNewItemForm from "./components/AddNewItemForm";


class App extends React.Component {
    state = {
        todoList: [{id: 1, title: 'first'}]
    }

    componentDidMount() {
        let todolist = JSON.parse(localStorage.getItem('newTodolist'));
        if (localStorage.getItem('newTodolist')) {
            todolist.todoList.forEach(currentTodolist => {
                if (currentTodolist.id >= this.nextId) {
                    this.nextId = currentTodolist.id + 1
                }
            })
            this.setState({
                todoList: todolist.todoList
            })
        } else {
            this.setState({
                todoList: [{id: 1, title: 'first'}],
            })
        }
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('newTodolist', JSON.stringify(nextState));
    }

    nextId = 2;
    addNewTodolist = (newTodolist) => {
        let newTodo = {
            id: this.nextId,
            title: newTodolist
        }
        this.nextId++
        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }


    render() {
        let todolist = this.state.todoList.map(t => <TodoList id={t.id} title={t.title}/>)
        return (
            <>
            <div>
                <AddNewItemForm addNewItem={this.addNewTodolist}/>
            </div>
            <div className="App">
                {todolist}
            </div>
            </>
        );
    }

}

export default App;
