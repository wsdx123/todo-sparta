import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from 'routes/detail/Detail.module.css'

function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const detailData = useSelector((state) => state.todos.find((el) => el.id === +params.id))

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>ID : {detailData.id}</h2>
        <button type='button' onClick={handleBack}>
          이전으로
        </button>
      </div>
      <div className={styles.content}>
        <h3>{detailData.todoTitle}</h3>
        <p>{detailData.todoText}</p>
      </div>
    </div>
  )
}

export default Detail
