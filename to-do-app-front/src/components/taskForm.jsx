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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Tarefa:</label>
                <input
                    type="text"
                    name="task"
                    value={task.task}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Descrição: </label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                ></textarea>
            </div>

            <button className="inline-flex rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                type="submit">Salvar Tarefa</button>
        </form>
    );
};

export default TaskForm;