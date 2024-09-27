import expenseReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'

test('should set default value state',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove an expense by id',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expenses if id not found',()=>{
    const action={
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state=expenseReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add an expense',()=>{
    const expense={
        id:'123',
        description:'provisions',
        amount:5000,
        createdAt:2000,
        note:''
    }
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expenseReducer(expenses,action)

    expect(state).toEqual([...expenses,expense])
})

test('should edit expense for an id',()=>{
    const amount=1500
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount
        }
    }
    const state=expenseReducer(expenses,action)

    expect(state[0].amount).toBe(amount)
})

test('should not edit an expense if id not found',()=>{
    const amount=200
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
    }
    const state=expenseReducer(expenses,action)

    expect(state).toEqual(expenses)
})