import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpensesSummary from '../../components/ExpensesSummary'; // Adjust the path if necessary

const mockStore = configureStore([]); // Create a mock store

test('should render ExpensesSummary with multiple expenses', () => {
  const store = mockStore({
    expenses: [{ id: 1, amount: 500 }, { id: 2, amount: 1500 }],
    filters: { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
  });

  const renderer = new ReactShallowRenderer();

  // Wrap the component with the Provider and pass the mock store
  renderer.render(
    <Provider store={store}>
      <ExpensesSummary expenseCount={35} expensesTotal={51648453} />
    </Provider>
  );

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});


// test('should render expensesSummary with 1 expense',()=>{
//     const renderer=new ReactShallowRenderer()
//     renderer.render(<ExpensesSummary expenseCount={1} expensesTotal={500}/>)
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
// })

test('should render ExpensesSummary with 1 expense', () => {
    // Define mock Redux state
    const store = mockStore({
      expenses: [{ id: 1, amount: 500 }],
      filters: { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }
    });
  
    // Initialize shallow renderer
    const renderer = new ReactShallowRenderer();
  
    // Wrap the component in the Provider with the mock store
    renderer.render(
      <Provider store={store}>
        <ExpensesSummary expenseCount={1} expensesTotal={500} />
      </Provider>
    );
  
    // Verify the rendered output
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });