// ==========================================
// 📥 COMPONENTE GET - Obtener Datos
// ==========================================
// Este componente muestra cómo obtener datos de una API.
// Es como pedirle al camarero que te traiga la carta.

import React, { useState, useEffect } from 'react';

const GetExample = () => {
  // 🎯 PASO 1: Definimos los estados que necesitamos
  // posts: Aquí guardaremos la lista de posts que nos devuelva la API
  const [posts, setPosts] = useState([]);
  // error: Para guardar cualquier error que ocurra
  const [error, setError] = useState(null);
  // loading: Para mostrar un mensaje mientras esperamos la respuesta
  const [loading, setLoading] = useState(true);

  // 🎯 PASO 2: Usamos useEffect para hacer la petición cuando el componente se monte
  useEffect(() => {
    // Creamos una función async porque fetch devuelve una promesa
    const fetchPosts = async () => {
      try {
        // 👉 Hacemos la petición GET
        // fetch por defecto hace una petición GET, por eso no necesitamos especificar el método
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // 👉 Verificamos si la petición fue exitosa
        if (!response.ok) {
          throw new Error('¡Vaya! No hemos podido obtener los posts');
        }
        
        // 👉 Convertimos la respuesta a JSON
        const data = await response.json();
        
        // 👉 Guardamos los datos en el estado
        setPosts(data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // El array vacío significa que solo se ejecuta cuando el componente se monta

  // 🎯 PASO 3: Manejamos los diferentes estados de la interfaz

  // Si hay un error, mostramos el mensaje usando el componente alert de Bootstrap
  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  // Si está cargando, mostramos el spinner de Bootstrap
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  // 🎯 PASO 4: Renderizamos los datos usando componentes de Bootstrap
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">📥 Ejemplo GET</h2>
      </div>
      <div className="card-body">
        {/* Usamos list-group de Bootstrap para mostrar los posts */}
        <div className="list-group">
          {posts.map(post => (
            <div key={post.id} className="list-group-item">
              <h5 className="mb-1">{post.title}</h5>
              <p className="mb-1">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetExample;