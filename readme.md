![enter image description here](https://b2bmarketplace.procolombia.co/sites/default/files/styles/max_325x325/public/companies/logo-meico.jpg)

## Proyecto "demo-meico"

El proyecto "demo-meico" es una aplicación web desarrollada en TypeScript con React y Vite. Su objetivo es principal es proporcionar una pequeña demostración para la empresa Meico de mis capacidades como desarrollador. Abarca los puntos 4 y 8 del archivo "Assesment desarrollador de software con respuesta V3.docx", enviado para el proceso de selección.

### Características del proyecto:

- Utiliza Vite como herramienta de construcción y desarrollo.
- Está escrito en TypeScript para aprovechar la verificación de tipos estática.
- Utiliza React y React DOM para la creación de componentes y la manipulación del DOM.
- Implementa React Router DOM para gestionar la navegación en la aplicación.
- Utiliza Moment.js para el manejo de fechas y horas.

El proyecto está estructurado bajo el patron de diseño "Clean Architecture":
````
application  
├── hooks  

cross-cutting  
├── constants  
├── helpers

data  
├── models

infrastructure  
├── assets  
├── routes  
├── theme

ui  
├── components  
├── pages
````
## Descripción de la arquitectura que usé para este proyecto

A continuación se muestra la estructura de carpetas del proyecto:

### application
- **hooks**: Contiene los hooks personalizados utilizados en la aplicación.

### cross-cutting
- **constants**: Contiene las constantes utilizadas en el proyecto.
- **helpers**: Contiene las funciones de ayuda y utilidades compartidas.

### data
- **models**: Contiene los modelos de datos utilizados en la aplicación.

### infrastructure
- **assets**: Contiene los archivos estáticos, como imágenes y archivos de estilo.
- **routes**: Contiene las definiciones y configuraciones de las rutas de la aplicación.
- **theme**: Contiene los archivos relacionados con el tema y la apariencia de la aplicación.

### ui
- **components**: Contiene los componentes reutilizables utilizados en la interfaz de usuario.
- **pages**: Contiene las páginas de la aplicación, que representan diferentes vistas.



### Scripts disponibles:

- `dev`: Inicia el servidor de desarrollo de Vite.
- `build`: Compila el proyecto a través de TypeScript y genera una versión optimizada para producción.
- `lint`: Ejecuta ESLint para analizar y corregir problemas de linting en los archivos de código fuente.
- `preview`: Inicia un servidor de desarrollo para previsualizar la versión compilada del proyecto.

### Dependencias principales:

- `react` y `react-dom`: Librerías principales de React para la construcción de componentes y la manipulación del DOM.
- `react-router-dom`: Librería para el enrutamiento de la aplicación.
- `moment`: Librería para el manejo de fechas y horas.

### Dependencias de desarrollo:

- `typescript`: Compilador de TypeScript para proporcionar verificación de tipos estática.
- `vite`: Herramienta de construcción y desarrollo rápida para proyectos de React y TypeScript.
- `eslint`: Herramienta de linting para mantener la consistencia y calidad del código.
- `@typescript-eslint/parser` y `@typescript-eslint/eslint-plugin`: Plugins de ESLint específicos para TypeScript.
- `eslint-plugin-react-hooks`: Plugin de ESLint para detectar y corregir problemas comunes relacionados con los hooks de React.
- `eslint-plugin-react-refresh`: Plugin de ESLint para mejorar la compatibilidad con React Refresh.
