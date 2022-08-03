import { Check, Trash } from 'phosphor-react'
import { ChangeEvent, FormEvent, InputHTMLAttributes } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  task: TaskContentProps
  onToggleTaskStatus: (id: number, value: boolean) => void
}

interface TaskContentProps {
  id: number
  done: boolean
  content: string
}

export function Task({ task, onToggleTaskStatus }: TaskProps){
  const taskStyleValidation = task.done ? `${styles.task} ${styles.done}` : styles.task

  function handleCompleteTask(event: ChangeEvent<HTMLInputElement> ,id: number){
    onToggleTaskStatus(id, event.target.checked)
  }

  return (
    <div className={taskStyleValidation}>
      <input type='checkbox' checked={task.done} onChange={(event) => handleCompleteTask(event, task.id)}/>
      <p>{task.content}</p>
      <button type='button'>
        <Trash size={24} />
      </button>
    </div>
  )
}