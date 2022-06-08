import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from './state/actionCreator';

const TopBar = (props) => {
  const { title } = props;

  const { windowSize } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { maxEditor, maxPreview, evenView } = bindActionCreators(
    actionCreator,
    dispatch
  );

  return (
    <div className='top-bar' data-id={title}>
      {title}
      <div className='top-container'>
        {windowSize === 'even' ? (
          <button onClick={() => console.log('clickedmax', title, 'button')}>
            <i className='max fa-solid fa-maximize'></i>
          </button>
        ) : (
          <button onClick={()=> evenView('even')}>
            <i className='min fa-solid fa-minimize'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
