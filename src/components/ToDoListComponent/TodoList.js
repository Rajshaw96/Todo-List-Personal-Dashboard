import React, { useState, useEffect } from 'react';
import TodoListStatus from './TodoListStatus';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = id => {
    setEditingTaskId(id);
    const taskToEdit = tasks.find(task => task.id === id);
    setEditedTaskText(taskToEdit.text);
  };

  const handleUpdateTask = () => {
    setTasks(
      tasks.map(task =>
        task.id === editingTaskId ? { ...task, text: editedTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const totalTasks = tasks.length;
  const totalPendingTasks = tasks.filter(task => !task.completed).length;
  const totalCompletedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="container">
      <h3 className="my-4">To-Do List</h3>
      <form
        className="mb-3"
        onSubmit={e => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'bg-success text-white' : ''}`}>
            {editingTaskId === task.id ? (
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={editedTaskText}
                  onChange={e => setEditedTaskText(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-warning btn-sm" onClick={handleUpdateTask}>Update</button>&nbsp;&nbsp;
                  <button className="btn btn-secondary btn-sm" onClick={handleCancelEdit}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-8">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                />&nbsp;&nbsp;
                <span>{task.text}</span>
                </div>
                <div className="col-4 text-end">
                  <button className="btn btn-info btn-sm" onClick={() => handleEditTask(task.id)}>Edit</button>&nbsp;&nbsp;
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul><br/>
      <TodoListStatus
        total = {totalTasks}
        Pending = {totalPendingTasks}
        Completed = {totalCompletedTasks}
      />
    </div>

  );
};

export default TodoList;
