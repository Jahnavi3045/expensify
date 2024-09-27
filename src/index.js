import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/configStore'
import '@fortawesome/fontawesome-free/css/all.css';
import { startSetExpenses } from './actions/expenses';
import { onAuthStateChanged } from 'firebase/auth';
import auth, { database } from './firebase/firebase';
import { login,logout } from './actions/auth';
import { get, ref } from 'firebase/database';
import Navigations from './Navigations';

const root = ReactDOM.createRoot(document.getElementById('root'));
const jsx=(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// root.render(<p>Loading...</p>);
let hasRendered=false;
const renderApp=()=>{
  if(!hasRendered){
    root.render(jsx);
    hasRendered=true;
  }
}
// store.dispatch(startSetExpenses()).then(()=>{
//   root.render(jsx);
// })

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in');
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(()=>{
      console.log('app rendering')
      renderApp()
      console.log('app rendered')
      get(ref(database,'expense')).then((snapshot)=>{
        console.log(snapshot.val())
      })
      
      window.location.pathname === '/' && (window.location.href = '/dashboard');
    })
    console.log('User is still signed in');
  } else {
    // No user is signed in
    store.dispatch(logout())
    console.log('logged out');
    renderApp()
    window.location.pathname !== '/' && (window.location.href = '/');
  }
});


