import styles from 'components/card/Card.module.css'

function Card({ props, children }) {
  return (
    <div key={props.id} className={styles.card}>
      <h4>{props.todoTitle}</h4>
      <p>{props.todoText}</p>
      <div className={styles.cardBtn}>
        <button type='button'>삭제</button>
        <button type='button' o>
          {children}
        </button>
      </div>
    </div>
  )
}

export default Card
