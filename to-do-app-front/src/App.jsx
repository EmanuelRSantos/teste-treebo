import React, { useState } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import './index.css';

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de tarefas</h1>
      <TaskForm taskToEdit={taskToEdit} clearEdit={clearEdit}/>
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
