import React, { useState } from 'react'
import styles from 'components/modal/Modal.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { modifyTodo } from 'redux/modules/todos'

function Modal({ setOpenModal, cardId }) {
  const data = useSelector((state) => state.todos.find((el) => el.id === cardId))

  const [title, setTitle] = useState(data.todoTitle)
  const [text, setText] = useState(data.todoText)

  const dispatch = useDispatch()

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(modifyTodo({ title, text, cardId }))
    setOpenModal(false)
  }

  return (
    <div>
      <div className={styles.temp} />
      <div className={styles.container}>
        <button type='button' onClick={handleModal}>
          x
        </button>
        <form onSubmit={handleSubmit}>
          <input type='text' value={title} onChange={handleTitle} />
          <input type='text' value={text} onChange={handleText} />
          <button type='submit'>수정</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
