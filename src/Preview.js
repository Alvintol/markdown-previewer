import { useSelector } from 'react-redux';
import TopBar from './TopBar';
import marked from 'mark.js';

const Preview = (props) => {
  const { editor } = useSelector((state) => state);

  return (
    <div id='preview'>
      <TopBar title='PREVIEW' />

      {marked(editor)}
    </div>
  );
};

export default Preview;
