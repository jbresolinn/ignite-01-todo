import { CreateTaskBar } from "./components/CreateTaskBar/CreateTaskBar"
import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import { Sheets } from "./components/Sheets/Sheets"
import { Task } from "./components/Task/Task"
import { useState } from "react"
import { ClipboardText } from "phosphor-react"

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
    const taskIndex = tasks.findIndex(task => task.id === id);

    tasks[taskIndex].done = !tasks[taskIndex].done;

    setTasks(tasks => [...tasks])
  }

  function deleteTask(id: string) {
    const taskWithoutDeleteOne = tasks.filter(task => task.id !== id)

    setTasks(taskWithoutDeleteOne)
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
            {tasks.length 
              ? (
                  tasks.map(task => 
                    <Task 
                      key={task.id} 
                      id={task.id}
                      content={task.content}
                      done={task.done} 
                      onToggleTaskStatus={toggleTaskStatus} 
                      onDeleteTask={deleteTask}
                    />)
                ) 
              : (
                  <div className={styles.noTasksContent}>
                    <ClipboardText size={56} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                  </div>
                )
            }
          </div>
        </section>
      </div>
    </div>
    )
  }
  
  export default App
  