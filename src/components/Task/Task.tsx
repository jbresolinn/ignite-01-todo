import { Check, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  id: string
  done: boolean
  content: string
  onToggleTaskStatus: (id: string, value: boolean) => void
  onDeleteTask: (id: string) => void
}

export function Task({ id, done, content, onToggleTaskStatus, onDeleteTask }: TaskProps){
  const taskStyleValidation = done ? `${styles.task} ${styles.done}` : styles.task

  function handleCompleteTask(event: ChangeEvent<HTMLInputElement> ,id: string){
    onToggleTaskStatus(id, event.target.checked)
  }

  function handleDeleteTask(id: string) {
    onDeleteTask(id)
  }

  return (
    <div className={taskStyleValidation}>
      <input type='checkbox' onChange={(event) => handleCompleteTask(event, id)}/>
      <p>{content}</p>
      <button type='button' onClick={() => handleDeleteTask(id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}