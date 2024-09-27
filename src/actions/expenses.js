import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { push, ref ,onValue,get, remove, update} from 'firebase/database';
import { useDispatch } from 'react-redux';

export const addExpense=(expense)=>({
    type:'ADD_EXPENSE',
    expense   
});

export const startAddExpense=(expenseData={})=>{
    // const dispatch=useDispatch();
    return(dispatch)=>{
        const {
            description='',
            note='',
            amount=0,
            createdAt=0
        }=expenseData;

        const expense={description,note,amount,createdAt}
        return push(ref(database,'expense'),expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
}
export const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense=({id}={})=>{
    return (dispatch)=>{
        return remove(ref(database,`expense/${id}`)).then(()=>{
            dispatch(removeExpense({id}))
        })
    }
}

export const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense=(id,updates)=>{
    return(dispatch)=>{
        return update(ref(database,`expense/${id}`),updates).then(()=>{
            dispatch(editExpense(id,updates));
        })
    }
}

export const setExpense=(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch) => {
      try {
        const expenses = [];
        const snapshot = await get(ref(database, 'expense')); // Use get() to fetch once
        
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val(),
              });
            });
            console.log(expenses)
            dispatch(setExpense(expenses));
            console.log(expenses)
        } 
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
  };