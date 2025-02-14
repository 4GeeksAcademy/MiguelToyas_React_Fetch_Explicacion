// ==========================================
// 🌟 INTRODUCCIÓN A FETCH API EN REACT 🌟
// ==========================================
// En este tutorial, aprenderemos a realizar peticiones HTTP usando la Fetch API en React.
// Trabajaremos con JSONPlaceholder, una API de prueba gratuita que nos permite practicar
// las cuatro operaciones básicas de una API REST: GET, POST, PUT y DELETE.

// 📝 Conceptos importantes antes de empezar:
// 1. API REST: Es como un camarero en un restaurante. Tú (el cliente) pides algo, 
//    y el camarero (la API) te trae lo que pediste del servidor.
// 2. Métodos HTTP:
//    - GET: Pedir información (como pedir la carta)
//    - POST: Crear algo nuevo (como hacer un pedido)
//    - PUT: Actualizar algo existente (como modificar tu pedido)
//    - DELETE: Borrar algo (como cancelar tu pedido)

// App.jsx
import React from 'react';
import GetExample from '../components/GetExample';
import PostExample from '../components/PostExample';
import PutExample from '../components/PutExample';
import DeleteExample from '../components/DeleteExample';

const Home = () => {
  return (
    // Container es el contenedor principal de Bootstrap
    // py-4 añade padding vertical
    <div className="container py-4">
      <h1 className="display-4 mb-4">Tutorial de Fetch API</h1>
      {/* Sistema de grid de Bootstrap */}
      <div className="row g-4">
        <div className="col-12">
          <GetExample />
        </div>
        <div className="col-12">
          <PostExample />
        </div>
        <div className="col-12">
          <PutExample />
        </div>
        <div className="col-12">
          <DeleteExample />
        </div>
      </div>
    </div>
  );
};

export default Home;