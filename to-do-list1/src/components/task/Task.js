import React from 'react';
import './Task.css';

function Task(props) {
    return (
        <div className="container">
            <li key={props.index} className="task">
                {props.name}
            </li>
                <div className="card card-body my-0">
                    <button className="btn bg-primary" onClick={props.deleteTask}>Delete</button>
                    <button className="btn bg-info" onClick={props.editTask}>Edit</button>
                </div>
        </div>
    )
}

export default Task;