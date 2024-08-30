import { useState } from 'react';

import './App.css';
import Input from './assets/components/InputComponents';
import Board from './assets/components/Board';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>02-Todo Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
}

export default App;
