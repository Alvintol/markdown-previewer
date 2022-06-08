import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from './state/actionCreator';


const TopBar = (props) => {
  const { title } = props;

  const { windowSize } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { changeWindow } = bindActionCreators(actionCreator, dispatch);

  return (
    <div className='top-bar'>
      {title}
      <div className='top-container'>
        <button>
          <i className='fa-solid fa-maximize'></i>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
