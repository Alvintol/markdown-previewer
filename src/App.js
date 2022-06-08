import Editor from './Editor';
import Preview from './Preview';
import './styling/sass/app.scss';
import Prism from 'prismjs';
import Mark from 'mark.js';

const App = () => {


  console.log('MARK:', Mark)

  // Mark.setOptions({
  //   breaks: true,
  //   highlight: function (code) {
  //     return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  //   }
  // });
  
  // const renderer = new Mark.Renderer();
  // renderer.link = function (href, title, text) {
  //   return `<a target="_blank" href="${href}">${text}</a>`;
  // };
  


  return (
    <div id='app'>
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
