import Editor from './Editor';
import Preview from './Preview';
import './styling/sass/app.scss';


const App = () => {

  return (
    <div id='app'>
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
