import styles from 'components/card/Card.module.css'
import { useDispatch } from 'react-redux'
import { deleteTodo } from 'redux/modules/todos'

function Card({ props, children }) {
  const dispatch = useDispatch()

  const handleRemove = () => {
    // const filteredTodo = todo.filter((el) => el.id !== id)
    // window.localStorage.setItem('todolist', JSON.stringify(filteredTodo))
    // setTodo(filteredTodo)

    dispatch(deleteTodo(props.id))
  }
  return (
    <div key={props.id} className={styles.card}>
      <h4>{props.todoTitle}</h4>
      <p>{props.todoText}</p>
      <div className={styles.cardBtn}>
        <button type='button' onClick={handleRemove}>
          삭제
        </button>
        <button type='button' o>
          {children}
        </button>
      </div>
    </div>
  )
}

export default Card
