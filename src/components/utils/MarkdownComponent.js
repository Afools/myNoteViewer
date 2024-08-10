import React, { useEffect, useState } from 'react';
import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';

// 将Markdown文件作为静态资源导入
// const markdownContent = require('../notes/README.md');

function MarkdownComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Afools/pictureRepo/main/developNote_myTestSite.md')
      .then((response) => response.text())
      .then((text) => {
        setHtmlContent(text);
      });
      
  
  }, []);
  return (
  <ReactMarkdown className={'markdown-body'}
    children={htmlContent}
  />
  );

}

export default MarkdownComponent;