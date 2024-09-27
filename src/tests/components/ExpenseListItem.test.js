import React from "react";
import  ExpenseListItem  from "../../components/ExpenseListItem";
import expenses from '../fixtures/expenses'
import ReactShallowRenderer from 'react-test-renderer/shallow'

test('should render expense items',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<ExpenseListItem {...expenses[1]}/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})