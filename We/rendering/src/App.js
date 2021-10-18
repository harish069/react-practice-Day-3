import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { useState } from 'react';
// import TodoApp from "./Components/TodoApp"

function App() {
  const [switchPage, setSwitchPage] = useState(false);
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {switchPage ? <Login /> : <SignUp />}
      <button onClick={() => setSwitchPage((e) => !(e))}>{switchPage ? "Signup" : "Login" }</button>
    </div>
  );
}

export default App;
