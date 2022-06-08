import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from './state/actionCreator';
import TopBar from './TopBar';

const Editor = (props) => {
  const { editor } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { updateEditor } = bindActionCreators(actionCreator, dispatch);

  return (
    <div id='mark-down'>
      <TopBar title='EDITOR' />
      <textarea
        id='editor'
        value={editor}
        onChange={(e) =>
          updateEditor({
            type: 'change',
            payload: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Editor;
