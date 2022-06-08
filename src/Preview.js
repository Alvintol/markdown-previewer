import { useSelector } from 'react-redux';
import TopBar from './TopBar';

const Preview = (props) => {
  const { editor } = useSelector((state) => state);

  return (
    <div id='preview'>
      <TopBar title='PREVIEW' />

      {editor}
    </div>
  );
};

export default Preview;
