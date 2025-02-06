import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { Container,Row,Col } from 'react-bootstrap';
import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {nord} from 'react-syntax-highlighter/dist/esm/styles/prism';


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
      <Col>
        {/* <div className="markdown-body" dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          children={htmlContent}
          className="markdown-body"
          components={{
            code(props) {
              const {children, className, node, ...rest} = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={nord}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </Col>
    </Row>
  </Container>
);

}
export default MarkdownComponent;