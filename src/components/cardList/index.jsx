import Card from 'components/card'
import React from 'react'
import { useSelector } from 'react-redux'

function CardList({ isDone }) {
  const data = useSelector((state) => state.todos)

  return (
    <div>
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
