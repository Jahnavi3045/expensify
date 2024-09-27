import expenses_total from "../../selectors/expenses-total";
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses',()=>{
    const res=expenses_total([])
    expect(res).toBe(0)
})

test('should correctly add up a single expense',()=>{
    const res=expenses_total([expenses[0]])
    expect(res).toBe(1000)
})

test('should correctly add up multiple expenses',()=>{
    const res=expenses_total(expenses)
    expect(res).toBe(3000)
})