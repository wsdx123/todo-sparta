import { useState } from 'react'

import TodoForm from 'components/todoForm'
import Card from 'components/card'

import styles from 'App.module.css'

function App() {
  const [todoTitle, setTodoTitle] = useState('')
  const [todoText, setTodoText] = useState('')
  const [todo, setTodo] = useState([])

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
    setTodo((prev) => [...prev, { id: Math.floor(e.timeStamp), todoTitle, todoText, isDone: false }])
    setTodoTitle('')
    setTodoText('')
  }

  const handleRemove = (id) => {
    setTodo((prev) => prev.filter((el) => el.id !== id))
  }
  const handleDone = (id) => {
    const findIdx = todo.findIndex((el) => el.id === id)
    const copyTodo = [...todo]
    copyTodo[findIdx].isDone = !copyTodo[findIdx].isDone
    setTodo(copyTodo)
  }

  // console.log(todo)

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
        <div className={styles.working}>
          {todo
            .filter((el) => !el.isDone)
            .map((el) => (
              <Card props={el} handleDone={handleDone} handleRemove={handleRemove}>
                완료
              </Card>
            ))}
        </div>
        <h3>완료</h3>
        <div className={styles.working}>
          {todo
            .filter((el) => el.isDone)
            .map((el) => (
              <Card props={el} handleDone={handleDone} handleRemove={handleRemove}>
                취소
              </Card>
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
