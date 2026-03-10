import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

export const Home = () => {
  const { tasks, removeTask, editTask } = useContext(TaskContext);

  const toggleStatus = (task) => {
    editTask({ ...task, completed: !task.completed });
  };

  const handleDelete = (id, title) => {
    // Confirmação simples antes de deletar
    const confirmDelete = window.confirm(`Tem certeza que deseja excluir a tarefa: "${title}"?`);
    
    if (confirmDelete) {
      removeTask(id);
    }
  };

  return (
    <div className="container">
      <header className="page-header">
        <h1>Suas Tarefas</h1>
        <span>{tasks.filter(t => t.completed).length} de {tasks.length} concluídas</span>
      </header>

      <div className="task-grid">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.completed ? 'done' : ''}`}>
            <div className="task-content">
              <span className="status-icon">{task.completed ? '✅' : '⏳'}</span>
              <span className="task-title">{task.title}</span>
            </div>
            
            <div className="task-actions">
              <button onClick={() => toggleStatus(task)} className="btn-status">
                {task.completed ? 'Reabrir' : 'Concluir'}
              </button>
              <Link to={`/edit-task/${task.id}`} className="btn-edit">✏️</Link>
              <button onClick={() => handleDelete(task.id, task.title)} className="btn-delete">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};