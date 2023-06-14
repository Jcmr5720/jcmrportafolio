import './codigo2.css';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

function codigoshigh2() {

    const codeSnippet2 = `//CREAR
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  email VARCHAR(50),
  edad INT
);

//INSERTAR
INSERT INTO usuarios (nombre, email, edad)
VALUES ('JCMR', 'jcmr@example.com', 27);

//LEER
SELECT * FROM usuarios;

//ACTUALIZAR
UPDATE usuarios SET edad = 28 WHERE id = 1;

//ELIMINAR
DELETE FROM usuarios WHERE id = 1;`;

    return (
        <SyntaxHighlighter language='javascript' style={xonokai} className="syntax-highlighter-container">
        {codeSnippet2}
      </SyntaxHighlighter>
    )
}

export default codigoshigh2;