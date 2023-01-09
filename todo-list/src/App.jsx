import { useState, useEffect } from 'react'
import  Header from './components/Header'
import  Tasks  from './components/Tasks'

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])
  const addTask = (taskTitle) => {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }])
  }

  const deleteTaskById = (taskId) => {
    const newTasks = tasks.filter((item) => item.id !== taskId);
    setTasksAndSave(newTasks)
  }
  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map((item) => {
      if(item.id === taskId){
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item
    });
    setTasksAndSave(newTasks);
  }

  return (
    <div>
      <Header handleAddTask={addTask}/>
      <Tasks tasks={tasks}
      onDelete={deleteTaskById}
      onComplete={toggleTaskCompletedById} />
    </div>
  )
}

export default App
