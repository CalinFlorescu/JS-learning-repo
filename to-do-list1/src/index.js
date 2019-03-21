import React from 'react';
import ReactDOM from 'react-dom';
import './inde.css';


function Buttons(props) {
    return (
        <div className="buttons">
            <button className="delButton" onClick={props.deleteTask}>Delete</button>
            <button className="editButton" onClick={props.editTask}>Edit</button>
        </div>
    );
}

function Task(props) {
    return (
        <div>
            <li key={props.index} className="task">
                {props.name}
            </li>
            <Buttons deleteTask={props.deleteTask} editTask={props.editTask}/>
        </div>
    )
}

class App extends React.Component {
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

    deleteTask = () => {
        const {tasks} = this.state;
        tasks.splice(1,1);
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
                                                deleteTask={this.deleteTask}
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
};
ReactDOM.render(<App/>, document.getElementById("root"));
