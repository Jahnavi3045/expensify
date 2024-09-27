const expenses_total=(expenses)=>{
    return expenses
    .map((expense)=>Number(expense.amount))
    .reduce((sum,value)=>sum+value,0)
}

export default expenses_total
