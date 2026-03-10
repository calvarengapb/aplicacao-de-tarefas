import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Lista de Tarefas <span>DEVStart Senai - RR</span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/add-task" className="btn-add">
            <span className="plus-icon">+</span> Nova Tarefa
          </Link>
        </div>
      </div>
    </nav>
  );
};

