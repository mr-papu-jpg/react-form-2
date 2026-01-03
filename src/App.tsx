import { LoginForm } from './components';

/**
 * Componente principal de la aplicación.
 * * Este componente configura el diseño de la página, asegurando que 
 * el LoginForm esté centrado y visible.
 */
function App() {
  return (
    // Contenedor principal: ocupa toda la altura, fondo gris claro,
    // y usa flexbox para centrar el contenido (el formulario)
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* El componente LoginForm se importa desde la carpeta 'components'
        gracias al archivo 'index.ts' (el barrel).
      */}
      <LoginForm />
    </div>
  )
}

export default App;
