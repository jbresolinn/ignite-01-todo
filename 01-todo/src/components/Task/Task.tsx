import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps {
  done: boolean
  content: string
}

export function Task({ done, content }: TaskProps){
  const taskStyleValidation = done ? `${styles.task} ${styles.done}` : styles.task

  return (
    <div className={taskStyleValidation}>
      <input type='checkbox' checked={done} />
      <p>{content}</p>
      <button type='button'>
        <Trash size={24} />
      </button>
    </div>
  )
}