# React + Vite iNICIALIZACION TUTORIAL

1. Primero se pone en la terminal para agregar el vite: "npm create vite@latest . "
2. luego se pone "npm install" y ya de ahi puedes abrir el servidor "npm run dev" asi abriendolo desde localhost
3. La estructura se vera algo asi: 
mi-proyecto-react/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
4. Algunas cosas que hay que saber son: 
## useState: Es un Hook que te permite añadir estado a un componente funcional.
## count y setCount: Son la variable de estado y la función para actualizarla.
## <button onClick={...}>: Este botón incrementa el contador cuando se hace clic.

5. Una vez esta hecho y agregamos nuestros componentes saludos y agregamos estilos en index.css 
6. Cuando este listo contruimos el proyecto para produccion ejecutamos el comando "npm run build"