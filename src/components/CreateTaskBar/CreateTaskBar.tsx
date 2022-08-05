import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import styles from './CreateTaskBar.module.css'

interface TaskProps {
  id: string
  done: boolean
  content: string
}

interface CreateTaskBarProps {
  onCreateTask: (task: TaskProps) => void
}

export function CreateTaskBar({ onCreateTask }: CreateTaskBarProps){
  const [newTaskText, setNewTaskText] = useState('')

  const createTaskButtonDisableValidation = !newTaskText.length ? true : false

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    
    const newTask = {
      id: uuidv4(),
      done: false,
      content: newTaskText
    }

    onCreateTask(newTask)
    setNewTaskText('')
  }

  return (
      <div className={styles.createtaskbar}>
        <input 
          type='text' 
          name='newTask' 
          placeholder='Adicione uma nova tarefa' 
          onChange={handleNewTaskChange} 
          value={newTaskText}
        />
        <button type='button' onClick={handleCreateNewTask} disabled={createTaskButtonDisableValidation}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
  )
}