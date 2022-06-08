import { combineReducers } from 'redux';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://atolentino.netlify.app/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Dog holding a thank you card](https://images.freecreatives.com/wp-content/uploads/2017/01/Funny-Thank-You-Clipart.jpg)
`;


const editorReducer = (state = placeholder, action) => {
  switch (action.type) {
    case 'input':
      return action.payload;
    default:
      return state;
  }
};

const windowSizeReducer = (state = 'EVEN', action) => {
  switch (action.type) {
    case 'change':
      return action.payload;
    default:
      return state;
  }
};


const reducers = combineReducers({
  editor: editorReducer,
  windowSize: windowSizeReducer
});

export default reducers;