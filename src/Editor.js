import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleWindowSize } from './helper/helper_functions';
import * as actionCreator from './state/actionCreator';
import TopBar from './TopBar';

const Editor = (props) => {

  const { editor, windowSize } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { updateEditor } = bindActionCreators(actionCreator, dispatch);

  const window = windowSize === 'PREVIEW' ? {display: 'none'} : toggleWindowSize(windowSize);

  return (
    <div id='mark-down' style={window}>
      <TopBar title='EDITOR' />
      <textarea
        id='editor'
        value={editor}
        onChange={(e) => {
          updateEditor(e.target.value);
        }}
      />
    </div>
  );
};

export default Editor;
