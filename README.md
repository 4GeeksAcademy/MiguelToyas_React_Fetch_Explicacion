# 🚀 Tutorial de Fetch API en React

## 📚 Índice
1. [Introducción](#introducción)
2. [Prerequisitos](#prerequisitos)
3. [Conceptos Básicos](#conceptos-básicos)
4. [Guía de la Clase](#guía-de-la-clase)
5. [Ejercicios Prácticos](#ejercicios-prácticos)
6. [Recursos Adicionales](#recursos-adicionales)

## 📖 Introducción

En esta clase vamos a aprender a conectar nuestras aplicaciones React con APIs REST. Veremos cómo obtener datos de un servidor, crear nuevos datos, modificar datos existentes y borrar datos. Para ello, utilizaremos la API Fetch, que viene integrada en los navegadores modernos.

### 🎯 Objetivos de la Clase
- Entender qué es una API REST y cómo funciona
- Aprender a usar Fetch para realizar peticiones HTTP
- Practicar con los métodos GET, POST, PUT y DELETE
- Implementar formularios para enviar datos
- Manejar estados de carga y errores

## 🛠 Prerequisitos

Para seguir esta clase, necesitas tener conocimientos básicos de:
- React (componentes, estados con useState, efectos con useEffect)
- JavaScript moderno (async/await, arrow functions, destructuring)
- HTML y CSS básico

## 🌟 Conceptos Básicos

### ¿Qué es una API REST?

Imagina que vas a un restaurante:
- Tú eres el **cliente** (tu aplicación React)
- El **camarero** es la API
- La **cocina** es el servidor

Cuando quieres algo:
1. Le pides al camarero (haces una petición a la API)
2. El camarero va a la cocina (la API se comunica con el servidor)
3. El camarero te trae lo que pediste (la API te devuelve los datos)

### Métodos HTTP

1. **GET** - Pedir información
   - Como pedir la carta en el restaurante
   - Solo recibe datos, no modifica nada
   - Ejemplo: Ver la lista de productos

2. **POST** - Crear algo nuevo
   - Como hacer un pedido nuevo
   - Envía datos para crear algo
   - Ejemplo: Crear una cuenta nueva

3. **PUT** - Modificar algo existente
   - Como cambiar tu pedido
   - Envía datos para actualizar algo
   - Ejemplo: Cambiar tu contraseña

4. **DELETE** - Borrar algo
   - Como cancelar tu pedido
   - Borra datos existentes
   - Ejemplo: Borrar una publicación

## 📝 Guía de la Clase

### 1. GET - Obtener Datos (45 minutos)

```jsx
// Ejemplo básico de GET
const [datos, setDatos] = useState([]);

useEffect(() => {
  const obtenerDatos = async () => {
    const respuesta = await fetch('https://api.ejemplo.com/datos');
    const datos = await respuesta.json();
    setDatos(datos);
  };
  
  obtenerDatos();
}, []);
```

**Puntos importantes:**
- useEffect para hacer la petición cuando el componente se monta
- async/await para manejar las promesas
- Manejo de estados de carga y errores

### 2. POST - Crear Datos (45 minutos)

```jsx
const crearDato = async (datos) => {
  const respuesta = await fetch('https://api.ejemplo.com/datos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });
  return await respuesta.json();
};
```

**Puntos importantes:**
- Cómo estructurar un formulario en React
- Headers y body en las peticiones
- Manejo de la respuesta

### 3. PUT - Modificar Datos (45 minutos)

```jsx
const actualizarDato = async (id, datos) => {
  const respuesta = await fetch(`https://api.ejemplo.com/datos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  });
  return await respuesta.json();
};
```

**Puntos importantes:**
- Selección del elemento a modificar
- Formularios pre-rellenados
- Actualización del estado local

### 4. DELETE - Borrar Datos (30 minutos)

```jsx
const borrarDato = async (id) => {
  const respuesta = await fetch(`https://api.ejemplo.com/datos/${id}`, {
    method: 'DELETE',
  });
  return respuesta.ok;
};
```

**Puntos importantes:**
- Confirmaciones antes de borrar
- Actualización de la UI después de borrar
- Manejo de errores

## 📚 Recursos Adicionales

- [Documentación de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de pruebas
- [React Documentation](https://react.dev/)
- [HTTP Status Codes](https://httpstatuses.com/)

## 🤔 Preguntas Frecuentes

### ¿Por qué usamos async/await?
Porque hace que el código asíncrono sea más fácil de leer y escribir. Es una forma más moderna y limpia de manejar promesas.

### ¿Cuándo debo usar PUT y cuándo PATCH?
- PUT: Cuando vas a actualizar un recurso completo
- PATCH: Cuando solo vas a actualizar algunos campos

### ¿Qué son los headers?
Son metadatos que enviamos con la petición. Por ejemplo, para indicar que enviamos JSON o para enviar tokens de autenticación.

## 📝 Notas Finales

- Siempre maneja los errores adecuadamente
- Muestra estados de carga al usuario
- Valida los datos antes de enviarlos
- Mantén el estado de tu aplicación sincronizado con el servidor
- Piensa en la experiencia del usuario!!!!

¡Mucha suerte y a programar! 🚀