import './codigo2.css';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

function codigoshigh3() {

  const codeSnippet2 = `import wixData from 'wix-data';

  $w('#button1').onClick(async () => {
    const valorInput = $w('#input1').value;
    try {
      const buscar = await wixData.query('ejemplo')
        .eq('nombre', valorInput)
        .find();      
      if (buscar.items.length > 0) {
        console.log('El nombre ya existe. Por favor intenta con otro nuevamente.');
      } else {
        const user = {
          nombre: valorInput
        };
        const nuevoUsuario = await wixData.insert('NombreDeLaTabla', user);
        console.log('Usuario registrado con exito. ID del nuevo usuario:', nuevoUsuario._id);
      }
    } catch (error) {
      console.error('Error al realizar la consulta o la inserción:', error);
    }
  });`;

    return (
        <SyntaxHighlighter language='javascript' style={xonokai} className="syntax-highlighter-container">
        {codeSnippet2}
      </SyntaxHighlighter>
    )
}

export default codigoshigh3;