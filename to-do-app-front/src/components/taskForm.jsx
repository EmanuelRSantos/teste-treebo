import React, { useEffect, useState } from 'react';
import { createTask, updateTask } from '../service/task.service';

const TaskForm = ({ taskToEdit, clearEdit }) => {
    const [task, setTask] = useState({ task: '', description: '' });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (task.id) {
                await updateTask(task.id, task);
            } else {
                await createTask(task);
            }
            setTask({ task: '', description: '' });
            clearEdit();
            window.location.reload();
        } catch (error) {
            console.error('Erro ao salvar tarefa', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tarefa:</label>
                <input
                    type="text"
                    name='task'
                    value={task.task}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Descrição: </label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Salvar Tarefa</button>
        </form>
    );
};

export default TaskForm;