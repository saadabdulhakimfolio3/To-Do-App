import './App.css';
import EventCreater from './eventCreater';
import DisplayTasks from './displayTask';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [tasks, setTasks] = useState({list : []});

  const addTask = (task) =>{
    const tasksList = tasks.list;
    tasksList.push(task);
    setTasks({list : tasksList});
  }

  const markTaskDone = (index) =>{
    const tasksList = tasks.list;
    tasksList[index].done = true;
    setTasks({list : tasksList});
    console.log(tasks);
  }

  return (
    <div className="App">
      <EventCreater addTask = {addTask} tasks = {tasks}/>
      <DisplayTasks markTaskDone = {markTaskDone} tasks = {tasks.list}/>
    </div>
  );
}

export default App;
