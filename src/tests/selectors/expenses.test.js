import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test('should filter by text value',()=>{
    const filters={
        text:'w',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action=getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[1],expenses[0]])
})

test('should filter by start date value',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const action=getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[1]])
})

test('should filter by end date value',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(2,'days')
    }
    const action=getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[1],expenses[0]])
})

test('should filter by date',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action=getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[1],expenses[0]])
})

test('should filter by amount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const action=getVisibleExpenses(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[0],expenses[1]])
})

