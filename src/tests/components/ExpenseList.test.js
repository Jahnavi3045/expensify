import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from '../fixtures/expenses'
import ReactShallowRenderer from 'react-test-renderer/shallow'

test('should render expense list correctly',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<ExpenseList expenses={expenses}/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render expense list with empty message',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<ExpenseList expenses={[]}/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})