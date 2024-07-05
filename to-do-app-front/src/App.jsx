import React, { useState } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

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
      <h1>Lista de tarefas</h1>
      <TaskForm taskToEdit={taskToEdit} clearEdit={clearEdit}/>
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
