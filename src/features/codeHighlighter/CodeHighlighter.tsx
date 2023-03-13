import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type Props = {
  code: string;
  size?: number;
}

export const CodeHighlighter = React.memo(({ code, size = 16 }: Props) => {
  return (
    <div style={{ textAlign: 'start', fontSize: `${size}px` }}>
      <SyntaxHighlighter language="typescript" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
});
