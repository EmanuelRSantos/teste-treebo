import React, { useEffect, useState } from 'react';
import { getTasks } from '../service/task.service';
import TaskItem from './taskItem';

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data);
        } catch (error) {
            console.log('Erro ao carregar lista de tarefas', error);
        }
    };

    return (
        <div className="bg-gray-50 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Todas as suas tarefas:</h2>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default TaskList;