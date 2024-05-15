//8
import React from 'react';
import { connect } from 'react-redux';
import { addTask, toggleTask, deleteTask, editTask } from './actions';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = ({ tasks, addTask, toggleTask, deleteTask, editTask }) => (
  <div>
    <h1>Task Manager</h1>
    <AddTask addTask={addTask} />
    <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
  </div>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  addTask,
  toggleTask,
  deleteTask,
  editTask
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
