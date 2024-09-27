import React from "react";
import ReactShallowRenderer from 'react-test-renderer/shallow'
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses'
import { render, screen, fireEvent } from '@testing-library/react';

test('should render expense form correctly',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<ExpenseForm/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render expense form correctly with expense date',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<ExpenseForm expense={expenses[0]}/>)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})

// test('should render error for invalid form submission',()=>{
//     // const renderer=new ReactShallowRenderer()
//     // renderer.render(<ExpenseForm />)
//     render(<ExpenseForm/>)  

//     const form = screen.getByTagName('form'); // Adjust this selector based on your form role or test ID
//     fireEvent.submit(form, {
//         preventDefault: () => {},
//     });
  
  
//   expect(screen.getByText('Some error message')).toBeInTheDocument();
// });


