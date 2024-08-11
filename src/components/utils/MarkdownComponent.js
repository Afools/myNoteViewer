import React, { useEffect, useState } from 'react';
import {marked} from 'marked';
import ReactMarkdown from 'react-markdown';
import { Container,Row,Col } from 'react-bootstrap';

// 将Markdown文件作为静态资源导入
// const markdownContent = require('../notes/README.md');

function MarkdownComponent(props) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.text())
      .then((text) => {
        setHtmlContent(text);
      });
      
  
  }, []);
  return (
  <Container className="note-body">
      <Row>
        <Col md={{offset:11}}>
        <button onClick={()=>props.setActivate(1)}>Back</button>
        </Col>
      </Row>
      <Row>
    <ReactMarkdown className={'markdown-body'}
      children={htmlContent}
    /></Row>
  </Container>
  );

}

export default MarkdownComponent;