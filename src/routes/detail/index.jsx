import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const data = useSelector((state) => state.todos.find((el) => el.id === +params.id))

  const handleBack = () => {
    navigate('/')
  }
  console.log(data)
  return (
    <div>
      <h2>ID : {data.id}</h2>
      <h3>{data.todoTitle}</h3>
      <p>{data.todoText}</p>
      <button type='button' onClick={handleBack}>
        이전으로
      </button>
    </div>
  )
}

export default Detail
