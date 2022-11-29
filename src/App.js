
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/list';
import {useState} from 'react';


const App = () => {
  const [taskList, setTaskList] = useState([])

  const addTask = (newTask) => {
    setTaskList([...taskList, newTask])
  }



  return (
    <div className="App">
      <Header />
      <Form addTask={addTask}/>
      <List tasks={taskList}/>
    </div>
  );
}

export default App;
