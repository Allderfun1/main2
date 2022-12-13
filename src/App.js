import './App.css';

import {NewComponent1} from './new_component/component1.js';
import {NewComponent2} from './new_component/component2.js';
import {NewComponent3} from './new_component/component3.js';
import { Link, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <nav>
        <Link to="a">Home</Link>
        <Link to="b">Form</Link>
        <Link to="c">Form view</Link>
      </nav>
      <Routes>
        <Route path="a" element={<NewComponent1></NewComponent1>}></Route>
        <Route path="b" element={<NewComponent2></NewComponent2>}></Route>
        <Route path="c" element={<NewComponent3></NewComponent3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
