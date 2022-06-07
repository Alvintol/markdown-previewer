import TopBar from './TopBar';

const Editor = props => {
  
  const changeEditor = (input) => console.log(input);

return (
  <div id='mark-down'>
    <TopBar
    title='EDITOR'
    />
    <textarea
    id='editor'
    value={props.editor}
    onChange={e => changeEditor(e.target.value)}
    />
  </div>
)
};

export default Editor;