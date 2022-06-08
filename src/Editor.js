import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopBar from './TopBar';

const Editor = (props) => {
  // const { editor, preview } = useSelector((state) => state);
  // const dispatch = useDispatch();


  const changeEditor = (input) => console.log(input);

  return (
    <div id='mark-down'>
      <TopBar title='EDITOR' />
      <textarea
        id='editor'
        value={props.editor}
        onChange={(e) => changeEditor(e.target.value)}
      />
    </div>
  );
};

export default Editor;
