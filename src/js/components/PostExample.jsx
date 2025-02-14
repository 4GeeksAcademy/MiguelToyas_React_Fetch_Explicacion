// ==========================================
// 📤 COMPONENTE POST - Crear Datos
// ==========================================
// Este componente muestra cómo enviar datos a una API para crear algo nuevo.
// Es como cuando le dices al camarero que quieres hacer un pedido.

import React, { useState } from 'react';

const PostExample = () => {
  // 🎯 PASO 1: Creamos estados para nuestro formulario
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // 🎯 PASO 2: Función que maneja el envío del formulario
  const handleSubmit = async (e) => {
    // Prevenimos que la página se recargue
    e.preventDefault();
    
    try {
      // 👉 Hacemos la petición POST
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // 👈 Especificamos que es POST
        headers: {
          'Content-Type': 'application/json', // 👈 Indicamos que enviamos JSON
        },
        // 👉 Convertimos nuestro objeto a string JSON
        body: JSON.stringify({
          title,      // El título que escribió el usuario
          body,       // El contenido que escribió el usuario
          userId: 1,  // Un ID fijo para el ejemplo
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el post');
      }

      const data = await response.json();
      setMessage('¡Post creado con éxito! ID: ' + data.id);
      setIsError(false);
      setTitle('');
      setBody('');
    } catch (error) {
      setMessage('Error: ' + error.message);
      setIsError(true);
    }
  };

  // 🎯 PASO 3: Renderizamos el formulario usando componentes de Bootstrap
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">📤 Ejemplo POST</h2>
      </div>
      <div className="card-body">
        {/* Formulario con estilos de Bootstrap */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Título:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Escribe un título"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Contenido:</label>
            <textarea
              className="form-control"
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows="3"
              placeholder="Escribe el contenido"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Post
          </button>
        </form>
        
        {/* Mensaje de éxito o error usando alerts de Bootstrap */}
        {message && (
          <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostExample;