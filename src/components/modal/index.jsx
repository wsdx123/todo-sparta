import React, { useState } from 'react'
import styles from 'components/modal/Modal.module.css'

function Modal({ setOpenModal }) {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [modTodo, setModTodo] = useState({})

  const handleModal = () => {
    setOpenModal(false)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setModTodo({ title, text })
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
