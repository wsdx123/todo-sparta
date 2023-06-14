import styles from './TodoForm.module.css'

function TodoForm({ title, text, handleSubmit, handleText, handleTitle }) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <span>제목</span>
        <input value={title} onChange={handleTitle} />
        <span>내용</span>
        <input value={text} onChange={handleText} />
      </div>
      <button type='submit' className={styles.submitBtn}>
        추가하기
      </button>
    </form>
  )
}

export default TodoForm
