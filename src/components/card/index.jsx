import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { deleteTodo, doneTodo } from 'redux/modules/todos'
import Modal from 'components/modal'

import styles from 'components/card/Card.module.css'

function Card({ props, children }) {
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(deleteTodo(props.id))
  }

  const handleDone = () => {
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
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} cardId={props.id} />}
    </div>
  )
}

export default Card
