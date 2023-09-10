import { useState, useMemo } from "react";

const GoalForm = (props) => {

  const [goal, setGoal] = useState({task:"", by:""})

  const handleChange = (e) => {
    setGoal((prev) => {
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    props.onAdd(goal)
    setGoal({ task: "", by: "" });
  }

  return (<div>
    Input next goal:
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" id="task" value={goal.task} onChange={handleChange} />
      <input type="text" name="by" id="by" value={goal.by} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </form>
  </div>)
}

const ListGoals = (props) =>{
  return (
    <div>
      <ul>
        {props.goals.map((g) => {
          return (
            <li key={g.task}>
              {g.task} by {g.by}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const App = () => {

  const [goals, setGoals] = useState([])

  const addGoal = (g) => {
    setGoals([...goals,g])
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListGoals goals={goals} />
    </div>
  )
};

export default App;