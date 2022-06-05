import TopBar from './TopBar';

const Editor = props => {
return (
  <div id='mark-down'>
    <TopBar
    title='EDITOR'
    />
    <textarea
    id='editor'></textarea>
  </div>
)
};

export default Editor;