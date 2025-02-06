import React, { useEffect, useState } from 'react';
import {marked} from 'marked';
import {markedHighlight} from 'marked-highlight';
import ReactMarkdown from 'react-markdown';
import { Container,Row,Col } from 'react-bootstrap';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

  const rendererMD = new marked.Renderer();
  // Configure `marked` options
  marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'shell'
    return hljs.highlight(code, { language }).value
  }
}));
  marked.setOptions({
      renderer: rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,

  });
function MarkdownComponent(props) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.text())
      .then((text) => {
        const renderedhtml=marked(text);
        setHtmlContent(renderedhtml);
      });
      
  
  }, []);
  return (
  <Container className="note-body">
    <Row>
      <Col>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Col>
    </Row>
  </Container>
);

}
export default MarkdownComponent;