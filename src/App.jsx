import {useEffect, useState} from 'react'
import {v4} from 'uuid';
import './App.css'
import CreateTasks from './componentes/CreateTasks'
import Tasks from './componentes/Tasks'

function App() {
  const [task, setTask] = useState(
      JSON.parse(localStorage.getItem('task')) || []
  );

  function onTaskClick(taskId){
    const newTasks = task.map((task) =>{
      if (taskId === task.id){
        return {... task, checked: !task.checked};
      }else{
        return task;
      }
    })
    setTask(newTasks);
  }

  function onDeleteTaskClick(TaskId){
    const newTasks = task.filter(task => task.id !== TaskId)
    setTask(newTasks);
  }

  function onAddTaskSubmission(title, content){
    const newTask = {
      id: v4(),
      title: title,
      content: content,
      checked: false
    }
    setTask([... task, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
        <div className='w-125 p-2 flex flex-col gap-3'>
          <CreateTasks onAddTaskSubmission={onAddTaskSubmission}/>
          <Tasks task={task} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>
      </div>
    </div>
  )
}

export default App
