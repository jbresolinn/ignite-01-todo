import { CreateTaskBar } from "./components/CreateTaskBar/CreateTaskBar"
import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import { Sheets } from "./components/Sheets/Sheets"
import { Task } from "./components/Task/Task"

const tasks = [
  {id: 1, done: false, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
  {id: 2, done: false, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
  {id: 3, done: true, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
  {id: 4, done: true, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
]

function App() {
  const tasksCompleted = tasks.filter(task => !!task.done)

  return (
    <div>
      <Header />
      
      <div className="container">
        <CreateTaskBar />
        
        <section className={styles.taskList}>
          <header className={styles.sheetsContainer}>
            <Sheets quantity={tasksCompleted.length}/>
            <Sheets labelColor="secondary" quantity={tasks.length}/>
          </header>

          <div className={styles.taskListContent}>
            {tasks.map(task => <Task key={task.id} done={task.done} content={task.content} /> )}
          </div>
        </section>
      </div>
    </div>
    )
  }
  
  export default App
  