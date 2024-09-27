import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import AddExpense from "../../components/AddExpense";

test('should render add expense page correctly',()=>{
    const onSubmit=jest.fn()
    const history={push:jest.fn()}
    const renderer=new ReactShallowRenderer()
    renderer.render(<AddExpense onSubmit={onSubmit} history={history}/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})