import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { addTodo } from 'redux/modules/todos'
import TodoForm from 'components/todoForm'
import CardList from 'components/cardList'

import styles from 'routes/home/Home.module.css'

function Home() {
  const [todoTitle, setTodoTitle] = useState('')
  const [todoText, setTodoText] = useState('')

  const dispatch = useDispatch()

  const handleTitle = (e) => {
    setTodoTitle(e.target.value)
  }

  const handleText = (e) => {
    setTodoText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoTitle === '' || todoText === '') {
      alert('title과 text를 모두 입력하시오')
      return
    }

    dispatch(addTodo({ id: Math.floor(e.timeStamp), todoTitle, todoText, isDone: false }))
    setTodoTitle('')
    setTodoText('')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TodoList</h1>
        <TodoForm
          title={todoTitle}
          text={todoText}
          handleSubmit={handleSubmit}
          handleText={handleText}
          handleTitle={handleTitle}
        />
      </header>
      <main className={styles.main}>
        <h3>working...</h3>
        <CardList isDone={false} />
        <h3>Done !</h3>
        <CardList isDone={true} />
      </main>
    </div>
  )
}

export default Home
