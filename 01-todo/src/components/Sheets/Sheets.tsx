import styles from './Sheets.module.css'

interface SheetsProps {
  labelColor?: 'primary' | 'secondary'
  quantity?: number
}

export function Sheets({ labelColor = 'primary', quantity = 0 }: SheetsProps){
  const labelColorValidation = labelColor !== 'primary' ? styles.labelSecondary : styles.labelPrimary
  return (
    <div className={styles.sheets}>
      <label className={labelColorValidation}>Tarefas criadas</label>
      <span>{quantity}</span>
    </div>
  )
}