import React, { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import { useParams, useHistory } from "react-router-dom";

export const EditTask = () => {
  const { id } = useParams();
  const { tasks, editTask } = useContext(TaskContext);
  const task = tasks.find((t) => t.id === parseInt(id));
  const history = useHistory();

  const handleUpdate = (data) => {
    editTask({ ...task, ...data });

    history.push("/");
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Editar Tarefa</h1>

      <TaskForm
        initialData={task}
        onSubmit={handleUpdate}
        buttonText="Atualizar Tarefa"
        onCancel={() => history.push('/')}
      />
    </div>
  );
};
