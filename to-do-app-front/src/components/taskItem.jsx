import React from 'react';
import { deleteTask } from '../service/task.service';

const TaskItem = (task, onEdit) => {
    const handleDelete = async () => {
        try {
            await deleteTask(task.id);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao deletar a tarefa', error);
        }
    };

    return (
        <div>
            <h3>{task.task}</h3>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)}>Editar</button>
            <button onClick={handleDelete}>Apagar</button>
        </div>
    );
};

export default TaskItem;