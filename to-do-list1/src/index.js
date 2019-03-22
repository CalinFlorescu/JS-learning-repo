import React from 'react';
import ReactDOM from 'react-dom';
import App from './state-components/App.js'

/*class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            todo: ``,
        };
    }
    addTask = () => {
        let {tasks, todo} = this.state;
        this.setState( {
            tasks: [...tasks, todo]
        });
    };

    handleChange = (event) => {
        let aux = event.target.value;
        this.setState({todo: aux});
    };

    deleteTask = (index) => {
        const {tasks} = this.state;
        tasks.splice(index,1);
        this.setState({
            tasks
        });
    }

    editTask = () => {
        console.log(`Te-am editat`);
    }

    render() {
        let { tasks } = this.state;

        return (
            <div>
                    <div className="toDoListMain">
                        <div className="header">
                            <p className="Title">Enter your tasks</p>
                            <input type="input" name="todo" placeholder="Enter your task here" className="input" onChange={this.handleChange}></input>
                            <button className="addTask" onClick={this.addTask}>Add Task</button>
                        </div>
                        <div className="actualList">
                            <ul>
                                {tasks && tasks.map((item, index) => {
                                        console.log(item, index);
                                        return (
                                            <Task
                                                index={this.state.tasks.length === 0 ? 0 : index}
                                                name={item}
                                                deleteTask={()=> this.deleteTask(index)}
                                                editTask={this.editTask}
                                            />
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
            </div>
        );

    }
};*/
ReactDOM.render(<App/>, document.getElementById("root"));
