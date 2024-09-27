import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import ExpenseForm from './ExpenseForm'
import { useDispatch, useSelector } from 'react-redux'
import { startEditExpense,startRemoveExpense } from '../actions/expenses'

const EditExpense = () => {
    // console.log(props)
    const {id}=useParams()
    const expense=useSelector((state)=>state.expenses.find((expense)=>expense.id===id))
    const dispatch=useDispatch()
    const navigate=useNavigate()
    console.log(expense)

    const selectExpense=(expense)=>{
      console.log(id)
      dispatch(startEditExpense(id,expense))
      console.log(expense)
      navigate('/')
    }

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={selectExpense}
      />
      <button onClick={()=>{
        dispatch(startRemoveExpense ({id}))
        navigate('/')
      }}>Remove</button>
    </div>
  )
}

export default EditExpense
