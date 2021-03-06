import { useSelector } from 'react-redux';
import TopBar from './TopBar';
import { marked } from 'marked';
import Prism from 'prismjs';

const Preview = (props) => {
  const { editor, windowSize } = useSelector((state) => state);

  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    },
  });

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  const window = windowSize === 'EDITOR' ? {display: 'none'} : null;

  return (
    <div id='preview' style={window}
    >
      <TopBar title='PREVIEW' />
      <div
        id='injected'
        dangerouslySetInnerHTML={{
          __html: marked(editor, { renderer: renderer }),
        }}
      ></div>
    </div>
  );
};

export default Preview;
