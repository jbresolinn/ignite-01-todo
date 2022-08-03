import { PlusCircle } from 'phosphor-react'
import styles from './CreateTaskBar.module.css'

export function CreateTaskBar(){
  return (
    <div className='container'>
      <div className={styles.createtaskbar}>
        <input type='text' name='newTask' placeholder='Adicione uma nova tarefa'/>
        <button type='button'>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
    </div>
  )
}