import { CreateTaskBar } from "./components/CreateTaskBar/CreateTaskBar"
import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import { Sheets } from "./components/Sheets/Sheets"
import { Task } from "./components/Task/Task"
import { useState } from "react"

interface TaskProps {
  id: string
  done: boolean
  content: string
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const tasksCompleted = tasks.filter(task => !!task.done)

  function createNewTask(newTask: TaskProps) {
    if (newTask) {
      setTasks([...tasks, newTask])
    }
  }

  function toggleTaskStatus(id: string, value: boolean) {
    // TODO: toggle task status
  }

  return (
    <div>
      <Header />
      
      <div className="container">
        <CreateTaskBar onCreateTask={createNewTask}/>
        
        <section className={styles.taskList}>
          <header className={styles.sheetsContainer}>
            <Sheets quantity={tasksCompleted.length}/>
            <Sheets labelColor="secondary" quantity={tasks.length}/>
          </header>

          <div className={styles.taskListContent}>
            {tasks.map(task => <Task key={task.id} task={task} onToggleTaskStatus={toggleTaskStatus} /> )}
          </div>
        </section>
      </div>
    </div>
    )
  }
  
  export default App
  