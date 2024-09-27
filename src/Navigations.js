import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import AddExpense from './components/AddExpense'
import Help from './components/Help'
import PageNotFound from './components/PageNotFound'
import NavHeader from './components/NavHeader'
import EditExpense from './components/EditExpense'
import LoginPage from './components/LoginPage'
import { createBrowserHistory } from 'history'

export const history=createBrowserHistory();

const Navigations = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} history={history}>
      <NavHeader />
      <Routes>
        <Route path='/'Component={LoginPage} />
        <Route path='/dashboard'Component={Dashboard} />
        <Route path='/addExpense'Component={AddExpense} />
        <Route path='/editExpense/:id' Component={EditExpense}/>
        <Route path='/help' Component={Help} />
        <Route path='*' Component={PageNotFound}/>
      </Routes>      
    </BrowserRouter>
  )
}

export default Navigations
