# vrt-resemble 🚀
## Taller 6
Para la elaboración de este taller se generaron dos componentes, uno frontend (js) y otro back (node js express), el componente back es el encargado de realizar 
la ejecución de las pruebas VRT, usando los comandos para poder realizar la ejecución de Cypress para la toma de screenshots y después realizando la comparación
de estas con resemblejs y gurdando sus diferencias en una imagen.

### Pre-requisitos 📋
Para la instalación de este aplicación debes contar con lo siguiente:

* [npm](https://www.npmjs.com/get-npm) - npm
* [nodejs](https://nodejs.org/es/download/) - nodejs
* [live-server](https://www.npmjs.com/package/live-server) - live-server

### Instalación 🔧

Para poder realizar la instalación de esta aplicación basta con descargar este repositorio y ejecutar en la ruta donde se descargo el comando: 

```
npm install
``` 

Una vez finalice de descargar las dependencias puedes realizar la ejecución del componente back con el siguiente comando:
```
node index.js
```

Ahora es necesario levantar un web server donde correra el componente front de la aplicación, esto lo realiza usando el siguiente comando:
```
cd FrontEnd
npx live-server --port=8080
```

Por último para dar acceso a las imagenes que se van actualizando y generando de las pruebas, se debe subir un segundo web server, de la siguiente manera:
```
cd ..
npx live-server --port=8081
```
Ya con estos pasos aplicados podrar ir y navegar en la aplicación desde cualquier browser usando http://localhost:8080.

## Wiki 📖

Puedes encontrar las respuestas al taller 6 en nuestra Wiki en la cual mostramos la información adicional [Wiki](https://github.com/JeissonAvila/vrt-resemble/wiki)

## Autores ✒️

Los autores en este ejercicio son:

* **Luis Fernando Martinez** - [LuisFer](https://github.com/lui5f3r)
* **Jeisson Avila** - [JeissonAvila](https://github.com/JeissonAvila)
