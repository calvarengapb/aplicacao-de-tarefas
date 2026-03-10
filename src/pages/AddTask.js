import { useContext } from "react";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";
import { useHistory } from "react-router-dom";

export const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const history = useHistory();

  const handleCreate = (data) => {
    addTask({ id: Date.now(), ...data, completed: false });
    history.push("/")
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Adicionar Tarefa</h1>

      <TaskForm
        onSubmit={handleCreate}
        buttonText="Criar Tarefa"
        onCancel={() => history.push("/")}
      />
    </div>
  );
};
