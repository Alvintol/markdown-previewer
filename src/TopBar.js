import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from './state/actionCreator';

const TopBar = (props) => {
  const { title } = props;

  const { windowSize } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { maxWindow } = bindActionCreators(
    actionCreator,
    dispatch
  );

  return (
    <div className='top-bar' data-id={title}>
      {title}
      <div className='top-container'>
        {windowSize === 'EVEN' ? (
          <button onClick={() => maxWindow(title)}>
            <i className='max fa-solid fa-maximize'></i>
          </button>
        ) : (
          <button onClick={()=> maxWindow('EVEN')}>
            <i className='min fa-solid fa-minimize'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
