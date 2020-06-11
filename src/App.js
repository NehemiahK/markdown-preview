import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'

const defaultText = `
# Markdown Previewer (React) - freeCodeCamp

## This project is powered by MarkedJs and React

Inline code is neat: \`<div>Inline FTW</div>\`

Code blocks are even **neater**. 

\`\`\`
function logSomething(param){
  console.log(param)
}
\`\`\`

- Eat
- Sleep
- Code
- Repeat

> The blockquote element is used to indicate the quotation of a large section of text from another source. Using the default HTML styling of most web browsers, it will indent the right and left margins both on the display and in printed form, but this may be overridden by Cascading Style Sheets (CSS).
[Source: Wikipedia](https://en.wikipedia.org/wiki/Blockquote_element)


![FreeCodeCamp](https://cdn.freecodecamp.org/platform/universal/fcc-twitter-1120X600-social-green.png)

`
  ;

function App() {

  const [markdownText, setMarkDownText] = useState(defaultText)

  const getMarkdownText = () => {
    const rawMarkup = marked(markdownText, {
      sanitize: true, gfm: true,
      breaks: false,
    });
    return { __html: rawMarkup };
  }

  const updateMarkdown = (e) => {
    setMarkDownText(e.target.value)
  }

  return (
    <div className="App">
      <div className='editor-wrapper'>
        <h3>Type your markdown text below</h3>
        <textarea id='editor' onChange={updateMarkdown} value={markdownText} />
      </div>

      <div className='preview-wrapper'>
        <h3>Behold the magic!</h3>
        <div id='preview' dangerouslySetInnerHTML={getMarkdownText()} />
      </div>

    </div>
  );
}

export default App;
