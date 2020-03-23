import React from 'react';

const Task = props => {
    return (
        <div className="center">
            <p>
                {props.task.task}
            </p>
        </div>
    )
}

export default Task;