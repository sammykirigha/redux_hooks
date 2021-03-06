import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import './App.css';
import allActions from './actions';



const App = () => {
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()

  const user = {name: "Caleb"}

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </> 
        : 
        <>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Caleb</button>
        </>
        }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>
    </div>
  )
}


export default App;
