import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch} from 'react-redux'
// import {addExpense} from '../actions/expenses'
// import {setTextFilter} from '../actions/filters'
// import getVisibleExpenses from '../selectors/expenses'
import ExpenseList from './ExpenseList'
import FilterExpenseList from './FilterExpenseList'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = () => {
  // const dispatch=useDispatch();
  // dispatch(addExpense({description:'water bill',amount:355,createdAt:110}));
  // dispatch(addExpense({description:'gas bill',createdAt:100,amount:1000}));
  // dispatch(addExpense({description:'wifi bill',createdAt:35,amount:200}));
  // dispatch(addExpense({description:'house rent',createdAt:0,amount:6000}));
  // dispatch(setTextFilter('gas'));
  
  // const state=useSelector((state)=>state)
  // const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
  // console.log(visibleExpenses)

  return (
    <div>
      <FilterExpenseList/>
      <ExpenseList/>
      <ExpensesSummary/>
    </div>
  )
}

export default Dashboard
