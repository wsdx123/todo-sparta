import styles from './Card.module.css'

function Card({ props, handleRemove, handleDone, children }) {
  return (
    <div key={props.id} className={styles.card}>
      <h4>{props.todoTitle}</h4>
      <p>{props.todoText}</p>
      <div className={styles.cardBtn}>
        <button type='button' onClick={() => handleRemove(props.id)}>
          삭제
        </button>
        <button type='button' onClick={() => handleDone(props.id)}>
          {children}
        </button>
      </div>
    </div>
  )
}

export default Card
