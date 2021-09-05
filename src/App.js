import React, {Component} from 'react';
import './index.css';
import Person from './person.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Waalaikumas-salam warahmatullah I wabarakatuhu</h1>
     <Person name ="Gazibur Rahman" gender="male"></Person>
     <Person name="junaid" gender="female"> And I live at assam india</Person>
     <Person name= 'motibur' gender="male"></Person>
     <Person name='johura' gender="female"> And ven i live at guwahati india</Person>
      </div>
    );
  }
}

export default App;
