import { useState } from 'react';
import Markdown from './Markdown';
import Preview from './Preview';

const App = () => {

  const [state, setState] = useState({
    input: '',
    preview:''
  })

  return (
    <div className='app'>
      <Markdown 
      input={state.input}
      onChange={()=> console.log('ONCHANGE')}
      />
      <Preview 
      input={state.input}
      onChange={()=> console.log('ONCHANGE')}
      />
    </div>
  );
};

export default App;
