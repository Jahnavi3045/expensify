// import React from 'react'
// import getVisibleExpenses from '../selectors/expenses'
// import expenses_total from '../selectors/expenses-total'
// import numeral from 'numeral';
// import { useSelector } from 'react-redux'

// const ExpensesSummary = () => {
//     const visibleExpenses=useSelector((state)=>getVisibleExpenses(state.expenses,state.filters))
//     const expensesTotal=useSelector((state)=>expenses_total(visibleExpenses))
//     const expenseCount=visibleExpenses.length
//     const expenseWord=expenseCount===1?'expense':'expenses'
//     const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

//   return (
//     <div>
//       viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
//     </div>
//   )
// }

// export default ExpensesSummary

import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import expenses_total from '../selectors/expenses-total'

const ExpensesSummary = ({expenseCount,expensesTotal}) => {
    const expenseWord=expenseCount===1?'expense':'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
    </div>
  )
}

const mapStateToProps=(state)=>{
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)

    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:expenses_total(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary)

