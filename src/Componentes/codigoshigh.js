import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function codigoshigh() {

    const codeSnippet = `const express = require('express');
  
  const app = express();
  const port = process.env.PORT || 3001;
    
  app.get('/', (req, res) => {
      res.send('Hola mundo :)');
    });
    
  app.listen(port, () => {
      console.log(\`Server en línea: http://localhost:\${port}\`);
    });`;

    return (
        <SyntaxHighlighter language='javascript' style={darcula}>
        {codeSnippet}
      </SyntaxHighlighter>
    )
}

export default codigoshigh;