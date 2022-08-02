import "./App.css";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TasksForm />} />
          <Route path="/edit-task/:id" element={<TasksForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
