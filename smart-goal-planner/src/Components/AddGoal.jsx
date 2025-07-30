import React, { useState } from "react";
import AddGoal from "./AddGoal";

function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    setGoals((prev) => [...prev, goal]);
  };

  return (
    <div>
      <h1>My Goals</h1>
      <AddGoal onAdd={handleAddGoal} />
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal.name} - {goal.targetAmount} - {goal.category} -{" "}
            {goal.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
