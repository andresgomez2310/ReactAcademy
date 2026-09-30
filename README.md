# ReactAcademy — (Rutas y Navegación)

Aplicación web desarrollada con **React**, **Vite** y **React Router DOM**.

El objetivo del proyecto fue transformar la landing page en una **Single Page Application (SPA)** modularizada en varias vistas independientes, respetando la jerarquía visual del diseño original, aplicando buenas prácticas de desarrollo y cumpliendo con los requisitos técnicos de enrutamiento, paso de props y manejo de estado.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript
- CSS

## Rutas implementadas

| Ruta | Vista | Descripción |
| :--- | :--- | :--- |
| `/` | `inicio.jsx` | Portada principal con sección Hero y contador interactivo |
| `/cursos` | `cursos.jsx` | Catálogo de cursos renderizado dinámicamente con `.map()` |
| `/nosotros` | `nosotros.jsx` | Información institucional y pilares de la academia |
| `/login` | `login.jsx` | Formulario de acceso con estados de bloqueo |
| `*` | `noencontrada.jsx` | Manejo de error 404 para rutas inexistentes |