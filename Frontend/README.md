# 🚀 ReactAcademy — Landing Page (Taller 03)

Aplicación web desarrollada con **React** y **Vite** para recrear una landing page, cumpliendo con la jerarquía visual, manejando buenas practicas de diseño y los requisitos técnicos de componentización, uso de props y manejo de estado.

---

## 📋 Requisitos A Tener En Cuenta

- [x] **Proyecto con Vite + React:**
- [x] **Un archivo `.jsx` por componente con su propio CSS:** Separación modular ubicada en `src/components/`.
- [x] **Gitignore configurado:** La carpeta `node_modules` no se incluye en el repositorio.

---

## 📁 Estructura del Proyecto

```text
src/
├── components/
│   ├── Navbar.jsx       # Barra de navegación (#inicio, #cursos, #nosotros)
│   ├── Navbar.css
│   ├── Hero.jsx         # Portada principal
│   ├── Hero.css
│   ├── Courses.jsx      # Contenedor y array de datos renderizado con .map()
│   ├── Courses.css
│   ├── CourseCard.jsx   # Componente reutilizable que consume props
│   ├── CourseCard.css
│   ├── Counter.jsx      # Componente interactivo con useState
│   ├── Counter.css
│   ├── Footer.jsx       # Pie de página y créditos
│   └── Footer.css
├── App.jsx              # Integración de todos los componentes
├── index.css            # Estilos globales y comportamiento de scroll suave
└── main.jsx             # Punto de entrada de la aplicación