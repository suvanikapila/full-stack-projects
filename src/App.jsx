import { useState } from "react";

function App() {
  const [activeExp, setActiveExp] = useState(1);

  /* -------- Experiment 1: Counter SPA -------- */
  const [count, setCount] = useState(0);

  /* -------- Experiment 2: To-Do List SPA -------- */
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  /* -------- Experiment 3: Theme Toggle SPA -------- */
  const [dark, setDark] = useState(false);

  /* -------- Experiment 4: Simple Form SPA -------- */
  const [name, setName] = useState("");

  return (
    <div
      style={{
        backgroundColor: dark ? "#111" : "#f4f6f8",
        color: dark ? "#fff" : "#222",
        minHeight: "100vh",
      }}
    >
      <div className="app-container">
        <h1>SPA Experiments (1 – 4)</h1>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button onClick={() => setActiveExp(1)}>Exp 1: Counter</button>
          <button onClick={() => setActiveExp(2)}>Exp 2: Todo</button>
          <button onClick={() => setActiveExp(3)}>Exp 3: Theme</button>
          <button onClick={() => setActiveExp(4)}>Exp 4: Form</button>
        </div>

        {/* -------- Experiment 1 -------- */}
        {activeExp === 1 && (
          <div className="exp-box">
            <h2>Counter SPA</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        )}

        {/* -------- Experiment 2 -------- */}
        {activeExp === 2 && (
          <div className="exp-box">
            <h2>To-Do List SPA</h2>
            <input
              type="text"
              value={task}
              placeholder="Enter task"
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>

            <ul>
              {tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {/* -------- Experiment 3 -------- */}
        {activeExp === 3 && (
          <div className="exp-box">
            <h2>Theme Toggle SPA</h2>
            <button onClick={() => setDark(!dark)}>Toggle Theme</button>
            <p>Current Theme: {dark ? "Dark" : "Light"}</p>
          </div>
        )}

        {/* -------- Experiment 4 -------- */}
        {activeExp === 4 && (
          <div className="exp-box">
            <h2>Form SPA</h2>
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
            <p>Hello, {name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
