import { useSelector } from 'react-redux'

import Card from 'components/card'

import styles from 'components/cardList/CardList.module.css'

function CardList({ isDone }) {
  const data = useSelector((state) => state.todos)

  return (
    <div className={styles.working}>
      {data
        .filter((el) => el.isDone === isDone)
        .map((el) => (
          <Card key={el.id} props={el}>
            {isDone === true ? '취소' : '완료'}
          </Card>
        ))}
    </div>
  )
}

export default CardList
