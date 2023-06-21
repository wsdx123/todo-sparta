import styles from 'components/card/Card.module.css'
import Modal from 'components/modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodo, doneTodo } from 'redux/modules/todos'

function Card({ props, children }) {
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()

  const handleRemove = () => {
    // const filteredTodo = todo.filter((el) => el.id !== id)
    // window.localStorage.setItem('todolist', JSON.stringify(filteredTodo))
    // setTodo(filteredTodo)

    dispatch(deleteTodo(props.id))
  }

  const handleDone = () => {
    // const findIdx = todo.findIndex((el) => el.id === id)
    // const copyTodo = [...todo]
    // copyTodo[findIdx].isDone = !copyTodo[findIdx].isDone
    // // window.localStorage.setItem('todolist', JSON.stringify(copyTodo))
    // setTodo(copyTodo)
    dispatch(doneTodo(props.id))
  }

  const handleModal = () => {
    setOpenModal(true)
  }

  return (
    <div key={props.id} className={styles.card}>
      <h4>
        <Link to={`card/${props.id}`}>{props.todoTitle}</Link>
      </h4>
      <p>{props.todoText}</p>
      <div className={styles.cardBtn}>
        <div>
          <button type='button' onClick={handleRemove}>
            삭제
          </button>
          <button type='button' onClick={handleModal}>
            수정
          </button>
          <button type='button' onClick={handleDone}>
            {children}
          </button>
        </div>
        {/* <Link to='card/:id'>상세보기</Link> */}
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} cardId={props.id} />}
    </div>
  )
}

export default Card
