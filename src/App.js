import { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './styling/sass/app.scss';

const App = () => {

  const [state, setState] = useState({
    editor: '',
    preview:''
  })

  return (
    <div id='app'>
      <Editor 
      editor={state.editor}
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
