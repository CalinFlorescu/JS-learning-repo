import React from 'react';
/*import './App.css';*/
import Task from '../components/task/Task.js'
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            todo: ``,
            editOn: false,
            curIndex: 0
        };
    }

    addTask = () => {
        let {tasks, todo} = this.state;
        if(todo === ``) {
            alert(`Insert a valid Task`);
        } else {
            this.setState( {
                tasks: [...tasks, todo]
            });
        }
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

    confirmAddTask = (index) => {
        const {todo} = this.state;
        const {tasks} = this.state;
        for(let i = 0; i < tasks.length; i++) {
            if(i === index) {
                tasks[i] = todo;
            }
        }
        this.setState({
            tasks,
            editOn: false
        });
    }

    editTask = (index) => {
        this.setState({
            editOn: true
        });
    }

    render() {
        let { tasks } = this.state;

        return (
            <div>
                <div className="container bg-primary mt-3">
                    <div className="row">
                        <div className="col-xl">
                            <h2 className="text-center">Enter your tasks</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        </div>
                        <div className="col-sm">
                            <input type="input" name="todo" placeholder="Enter your task here" className="form-control" onChange={this.handleChange}></input>
                        </div>
                            {(()=> {
                                const {curIndex} = this.state;
                                if(this.state.editOn) {
                                    return (
                                        <div className="col-sm">
                                        <button className="btn bg-success confirm" onClick={() => {this.confirmAddTask(curIndex);}}>Confirm</button>
                                        <button className="btn bg-danger cancel" onClick={() => {this.setState({editOn: false});}}>Cancel</button>
                                        </div>);
                                } else {
                                    return(
                                            <div className="col-sm">
                                                <button className="btn bg-danger addTask" onClick={this.addTask}>Add Task</button>
                                            </div>
                                        );
                                }
                            })()}
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="container bg-light">
                                <ul>
                                    {tasks && tasks.map((item, index) => {
                                        console.log(item, index);
                                        return (
                                            <Task
                                                index={this.state.tasks.length === 0 ? 0 : index}
                                                name={item}
                                                deleteTask={()=> this.deleteTask(index)}
                                                editTask={()=> {
                                                    this.editTask(index);
                                                    this.setState({
                                                        curIndex: index
                                                    })
                                                }}
                                            />
                                        );
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
};

export default App;
