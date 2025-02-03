import React from 'react'

import ExpenseList from './ExpenseList'
import FilterExpenseList from './FilterExpenseList'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = () => {
  

  return (
    <div>
      <FilterExpenseList/>
      <ExpenseList/>
      <ExpensesSummary/>
    </div>
  )
}

export default Dashboard
