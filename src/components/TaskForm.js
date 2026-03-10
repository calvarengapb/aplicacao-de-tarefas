// components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ initialData, onSubmit, buttonText, onCancel }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (initialData) setTitle(initialData.title);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título da Tarefa</label>
          <input 
            className="form-input"
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Ex: Estudar React com DEVStart"
          />
        </div>
        
        <button type="submit" className="btn-save">
          {buttonText || 'Salvar Tarefa'}
        </button>
        
        <button type="button" onClick={onCancel} className="btn-cancel">
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;