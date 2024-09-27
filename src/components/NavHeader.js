import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogOut } from '../actions/auth'


export const NavHeader = ({startLogOut}) => {
  return (
    <div>
        <h2>Expensify</h2>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/addExpense'}>addExpense</NavLink>
        <NavLink to={'/help'}>Help</NavLink>
        <button onClick={startLogOut}>log out</button>
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>({
  startLogOut:()=>dispatch(startLogOut())
})
export default connect(undefined,mapDispatchToProps)(NavHeader);
