import styles from 'App.module.css'
import { useState } from 'react'

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

  // console.log(todo)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TodoList</h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <span>제목</span>
            <input value={todoTitle} onChange={handleTitle} />
            <span>내용</span>
            <input value={todoText} onChange={handleText} />
          </div>
          <button type='submit' className={styles.submitBtn}>
            추가
          </button>
        </form>
        <h3>working...</h3>
        <div className={styles.working}>
          {todo.map((el) => (
            <div key={el.id} className={styles.card}>
              <h4>{el.todoTitle}</h4>
              <p>{el.todoText}</p>
              <div>
                <button type='button'>완료</button>
                <button type='button'>삭제</button>
              </div>
            </div>
          ))}
        </div>
        <h3>완료</h3>
        <div></div>
      </main>
    </div>
  )
}

export default App
