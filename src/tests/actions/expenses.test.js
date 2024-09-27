import {addExpense,removeExpense,editExpense} from '../../actions/expenses'

test('should remove an expense action object',()=>{
    const action=removeExpense({id:'12345'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'12345'
    })
})

test('should edit an expense object',()=>{
    const action=editExpense('12345',{note:'added extra note for expense'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'12345',
        updates:{
            note:'added extra note for expense'
        }
    })
})

test('should add expense action object with provided values',()=>{
    const expenseData={
        description:'rent',
        amount:2000,
        createdAt:1000,
        note:'april'
    }
    const action=addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })

})

test('should add expense action object with default values',()=>{
    const action=addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            amount:0,
            createdAt:0,
            note:''
        }
    })

})