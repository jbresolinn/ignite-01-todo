import { CreateTaskBar } from "./components/CreateTaskBar/CreateTaskBar"
import { Header } from "./components/Header/Header"

import styles from './App.module.css'
import { Sheets } from "./components/Sheets/Sheets"

function App() {
  return (
    <div>
      <Header />
      
      <div className="container">
        <CreateTaskBar />
        
        <section className={styles.taskList}>
          <header className={styles.sheetsContainer}>
            <Sheets />
            <Sheets labelColor="secondary" quantity={3}/>
          </header>
        </section>
      </div>
    </div>
    )
  }
  
  export default App
  