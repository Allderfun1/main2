import './App.css';

import {NewComponent} from './new_component/component.js';


function App() {
  return (
    <div>
      <NewComponent name="argument_value">
        <p>Children Element</p>
      </NewComponent>
      <NewComponent name="qwerty">
        <p>Children Element</p>
      </NewComponent>
    </div>
  );
}

export default App;
