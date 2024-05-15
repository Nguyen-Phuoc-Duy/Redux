//1
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export const editTask = (taskId, newText) => ({
  type: EDIT_TASK,
  payload: { taskId, newText }
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});
