// ==========================================
// 🔄 COMPONENTE PUT - Actualizar Datos
// ==========================================
// Este componente muestra cómo actualizar datos existentes en una API.
// Es como cuando le pides al camarero modificar tu pedido.

import React, { useState, useEffect } from "react";

const PutExample = () => {
  // 🎯 PASO 1: Definimos todos los estados que necesitamos
  const [selectedPost, setSelectedPost] = useState(null); // Post seleccionado para editar
  const [title, setTitle] = useState(""); // Título editado
  const [body, setBody] = useState(""); // Contenido editado
  const [posts, setPosts] = useState([]); // Lista de posts
  const [message, setMessage] = useState(""); // Mensajes para el usuario
  const [isError, setIsError] = useState(false); // Si hay error o no

  // 🎯 PASO 2: Cargamos los posts cuando el componente se monta
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) throw new Error("Error al obtener los posts");
        const data = await response.json();
        setPosts(data.slice(0, 3));
      } catch (error) {
        setMessage(error.message);
        setIsError(true);
      }
    };

    fetchPosts();
  }, []);

  // 🎯 PASO 3: Función para seleccionar un post para editar
  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setTitle(post.title); // Rellenamos el formulario con los datos actuales
    setBody(post.body);
  };

  // 🎯 PASO 4: Función para actualizar el post
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // 👉 Hacemos la petición PUT
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`,
        {
          method: "PUT", // 👈 Especificamos que es PUT
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: selectedPost.id,
            title,
            body,
            userId: selectedPost.userId,
          }),
        }
      );

      if (!response.ok) throw new Error("Error al actualizar el post");

      const updatedPost = await response.json();
      setMessage("¡Post actualizado con éxito!");
      setIsError(false);

      // Actualizamos la lista local de posts
      setPosts(
        posts.map((post) =>
          post.id === selectedPost.id ? { ...post, title, body } : post
        )
      );

      // Limpiamos el formulario
      setSelectedPost(null);
      setTitle("");
      setBody("");
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    }
  };

  // 🎯 PASO 5: Renderizamos la interfaz usando componentes de Bootstrap
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="mb-0">🔄 Ejemplo PUT</h2>
      </div>
      <div className="card-body">
        {/* Lista de posts para seleccionar */}
        <div className="mb-4">
          <h3 className="h5 mb-3">Selecciona un post para editar:</h3>
          <div className="list-group">
            {posts.map((post) => (
              <button
                key={post.id}
                className={`list-group-item list-group-item-action ${
                  selectedPost?.id === post.id ? "active" : ""
                }`}
                onClick={() => handleSelectPost(post)}
              >
                <h5 className="mb-1">{post.title}</h5>
              </button>
            ))}
          </div>
        </div>

        {/* Formulario de edición */}
        {selectedPost && (
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="edit-title" className="form-label">
                Título:
              </label>
              <input
                type="text"
                className="form-control"
                id="edit-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edit-body" className="form-label">
                Contenido:
              </label>
              <textarea
                className="form-control"
                id="edit-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                rows="3"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Actualizar Post
            </button>
          </form>
        )}

        {/* Mensajes de éxito o error */}
        {message && (
          <div
            className={`alert ${
              isError ? "alert-danger" : "alert-success"
            } mt-3`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PutExample;
