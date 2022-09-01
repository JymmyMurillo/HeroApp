# *HEROES APP*

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

----
## Organización de Carpetas

Dentro de *src*  se agregaron los siguientes elementos:

- *Components*: se encuentran los elementos más pequeños que unidos conformaran una página, para este desarrollo son los siguientes:

    1.  FiltersBar.jsx : contiene la funcionalidad en javascript y retorna html donde se visualizara un logo, una barra de búsqueda y filtros según poderes o apariencia aplicables a todos los Heroes.

     2. HeroCard.jsx : inicialmente presenta una imagen, nombre de supeheroe y nombre real (si existe), al hacer clic sobre la card, se despliega un modal con información de todos sus poderes y apariencia, incluyendo también una imagen.

- *Pages*: utiliza más de un componente y se ubican de forma que generan un dashboard o página de visualización, para esta aplicación se ha construido una única página:

    Heroes.jsx : aquí se unen los únicos componentes existentes ya nombrados, desde la barra de filtros se podrá buscar algún heroe especifico o buscar aquellos que poseen algún rasgo especifico en cuanto a poderes o apariencia, a la vez que se visualizan en pantalla al hacer clic en el botón BUSCAR.

- *Redux*: se implementó este observador de estados, que permite acceder desde cualquier componente a la información que queramos manejar, dentro se encuentran los diferentes archivos necesarios para su implementación.

---
---
## NOTAS 
### - Todos los estilos visualizados en el desarrollo de esta aplicacion fueron sustraídos de Bootstrap v5.2.0, por ende, cualquier hoja de estilos existente, esta vacía y puede ser usada a futuro.

### - Node Version 18.8.0