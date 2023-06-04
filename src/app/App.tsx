import React from 'react';
import {EasyComponent} from "../entities/ui/easy-counter/easy-component";
import {HardComponent} from "../entities/ui/hard-counter/hard-component";

const App = () => {
  return (
    <div className="App">
      <EasyComponent />
      <br />
      <HardComponent />
    </div>
  );
}

export default App;
