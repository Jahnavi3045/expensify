import React from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenseForm from './ExpenseForm'
import { useDispatch } from 'react-redux'
import {startAddExpense} from '../actions/expenses'

const AddExpense = (props) => {
  console.log(props)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div>
      Add expense
      <ExpenseForm
        onSubmit={(expense)=>{
          dispatch(startAddExpense(expense))
          navigate('/')
        }}
      />
    </div>
  )
}

export default AddExpense
