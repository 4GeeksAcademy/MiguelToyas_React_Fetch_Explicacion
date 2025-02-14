// ==========================================
// 🗑️ COMPONENTE DELETE - Borrar Datos
// ==========================================
// Este componente muestra cómo eliminar datos existentes en una API.
// Es como cuando le pides al camarero que cancele tu pedido.

import React, { useState, useEffect } from 'react';

const DeleteExample = () => {
  // 🎯 PASO 1: Definimos los estados necesarios
  const [posts, setPosts] = useState([]); // Lista de posts
  const [message, setMessage] = useState(''); // Mensajes para el usuario
  const [isError, setIsError] = useState(false); // Control de errores

  // 🎯 PASO 2: Cargamos los posts cuando el componente se monta
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 👉 Hacemos la petición GET inicial para obtener los posts
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Error al obtener los posts');
        const data = await response.json();
        setPosts(data.slice(0, 3)); // Solo tomamos 3 posts para el ejemplo
      } catch (error) {
        setMessage(error.message);
        setIsError(true);
      }
    };

    fetchPosts();
  }, []);

  // 🎯 PASO 3: Función para borrar un post
  const handleDelete = async (postId) => {
    // Primero pedimos confirmación al usuario
    // Es importante siempre confirmar antes de borrar algo
    if (!window.confirm('¿Estás seguro de que quieres borrar este post?')) {
      return;
    }

    try {
      // 👉 Hacemos la petición DELETE
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: 'DELETE', // 👈 Especificamos que es DELETE
        }
      );

      if (!response.ok) throw new Error('Error al borrar el post');

      // Si todo va bien, actualizamos la lista local
      // Esto se llama "Optimistic Update" - actualizamos la UI antes de
      // tener confirmación del servidor, asumiendo que todo irá bien
      setPosts(posts.filter(post => post.id !== postId));
      setMessage('¡Post borrado con éxito!');
      setIsError(false);
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  // 🎯 PASO 4: Renderizamos la interfaz usando componentes de Bootstrap
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">🗑️ Ejemplo DELETE</h2>
      </div>
      <div className="card-body">
        {/* Lista de posts con botón de borrar */}
        <div className="list-group">
          {posts.map(post => (
            <div key={post.id} className="list-group-item">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{post.title}</h5>
                  <p className="mb-1">{post.body}</p>
                </div>
                {/* Botón para borrar con estilo danger de Bootstrap */}
                <button
                  onClick={() => handleDelete(post.id)}
                  className="btn btn-danger btn-sm"
                >
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mensajes de éxito o error */}
        {message && (
          <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteExample;

// ==========================================
// 📝 NOTAS FINALES Y MEJORES PRÁCTICAS
// ==========================================

// 1. Gestión de Errores
// ---------------------
// - Siempre verifica response.ok antes de procesar la respuesta
// - Muestra mensajes de error claros al usuario
// - Usa try/catch para manejar errores de red
// - Considera implementar reintentos para errores temporales

// 2. Estados de Carga
// ------------------
// - Muestra indicadores de carga mientras se procesa la petición
// - Usa el spinner de Bootstrap para indicar carga
// - Deshabilita botones mientras se procesa una acción

// 3. Experiencia de Usuario
// ------------------------
// - Confirma antes de acciones destructivas (DELETE)
// - Muestra mensajes de éxito/error
// - Actualiza la UI de forma optimista cuando tiene sentido
// - Usa clases de Bootstrap para feedback visual

// 4. Organización del Código
// -------------------------
// - Separa la lógica de la UI
// - Usa constantes para URLs
// - Considera crear hooks personalizados para la lógica de fetch
// - Mantén los componentes enfocados en una sola responsabilidad

// 5. Seguridad
// -----------
// - Valida datos antes de enviarlos
// - Sanitiza datos recibidos antes de mostrarlos
// - Usa HTTPS para todas las peticiones
// - Maneja tokens de autenticación cuando sea necesario

// 6. Optimizaciones
// ----------------
// - Implementa caché cuando sea apropiado
// - Considera usar SWR o React Query para gestión de datos
// - Limita el número de peticiones
// - Implementa paginación para grandes conjuntos de datos

// ==========================================
// 🎓 EJERCICIOS SUGERIDOS PARA PRÁCTICA
// ==========================================

// 1. Implementa paginación en el componente GET
// 2. Añade validación de formularios en POST y PUT
// 3. Implementa búsqueda en la lista de posts
// 4. Añade un sistema de filtros
// 5. Implementa un sistema de ordenación
// 6. Añade un historial de acciones (undo/redo)
// 7. Implementa un sistema de caché básico
// 8. Añade animaciones a las transiciones

// ¡Feliz coding! 🚀