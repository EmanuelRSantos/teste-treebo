import React from 'react';
import { deleteTask } from '../service/task.service';

const TaskItem = ({ task, onEdit }) => {
    const handleDelete = async () => {
        try {
            await deleteTask(task.id);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao deletar a tarefa', error);
        }
    };

    return (
        <form className="bg-white mb-5 p-4 rounded-md shadow-md">
            <label className="text-3xl font-semibold">{task.task}</label>
            <p className="text-lg text-gray-700 mt-2">{task.description}</p>
            <div className="flex items-center mt-4 space-x-3">
                <button
                    className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                    onClick={(event) => {
                        event.preventDefault();
                        onEdit(task);
                    }}
                >
                    Editar
                </button>
                <button
                    className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
                    onClick={(event) => {
                        event.preventDefault();
                        handleDelete(task.id);
                    }}
                >
                    Apagar
                </button>
                <label className="ml-3 text-sm">Tarefa finalizada</label>
                <input type="checkbox" className="ml-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
            </div>
        </form>
    );
};

export default TaskItem;