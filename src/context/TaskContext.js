import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        try {
            const storedTasks = localStorage.getItem('tasks');
            
            // Verificamos se existe algo E se não é uma string vazia
            if (storedTasks && storedTasks !== "undefined" && storedTasks !== "") {
            return JSON.parse(storedTasks);
            }
            
            // Se estiver vazio ou der erro, retornamos o array padrão
            return [];
        } catch (error) {
            console.error("Erro ao ler tasks do localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
    };

    const editTask = (updatedTask) => {
        setTasks((prevTask) => prevTask.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, removeTask, editTask}}>
            {children}
        </TaskContext.Provider>
    );
}