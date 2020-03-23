import React from 'react';

const SelectTask = props => {
    return (
    <div className="center">
        <label>Виберіть завдання</label>
        <select onChange = {props.selectTask}>
            {props.tasks.filter(task => task.book === props.book.name).map((task)=>{
                return <option value={task.number}>{task.number}</option>
            })}
        </select>
    </div>
    )
}

export default SelectTask;