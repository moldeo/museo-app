# museo-app
Aplicación de Bienvenida para el Museo de San Nicolás

Clonar el repositorio e instalar los paquetes mediante:

```
npm install
```

Iniciar la App usando:

```
ng serve
```

La App se mostratrá en localhost:4200.

La carga de datos mediante JSON puede requerir permirsos del CORS en caso de visualizarse en Chrome.
La App está pensada para funcionar sobre Electron, para esto es necesario hacer un build de la siguiente manera:

```
ng build --prod --base-href ./
```

Mover carpeta "dist" a un proyecto de Electron y configurarlo para utilizar el index.html de dicha carpeta.
