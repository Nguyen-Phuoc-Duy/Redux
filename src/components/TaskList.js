//6
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => (
  <div>
    {tasks.map(task => (
      <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask}/>
    ))}
  </div>
);

export default TaskList;
