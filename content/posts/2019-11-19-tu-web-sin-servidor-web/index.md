---
title: "Tu web sin servidor web"
date: "2019-11-19"
template: post
draft: false
slug: "tu-web-sin-servidor-web"
category: "desarrollo web"
tags:
  - "desarrollo web" 
description: "Si quieres publicar tu sitio web personal, un blog sobre tus aficiones o cualquier proyecto web sencillo sin funcionalidades complejas como comercio electrónico, que no exija un nivel alto de interacción con tus usuarios, puedes optar por tres servicios sencillos (y seguramente gratuitos) que te proporcionarán todos las prestaciones que tu proyecto web necesita: Github Pages, Netlify y Zeit."
---
Si quieres publicar tu sitio web personal, un blog sobre tus aficiones o cualquier proyecto web sencillo sin funcionalidades complejas como comercio electrónico, que no exija un nivel alto de interacción con tus usuarios, puedes optar por tres servicios sencillos (y seguramente gratuitos) que te proporcionarán todos las prestaciones que tu proyecto web necesita: **Github Pages**, **Netlify** y **Zeit**.

## Tu flamante sitio web

En primer lugar necesitamos disponer de un sitio web, lo cual, para muchas y muchos es algo muuuuy complicado, difícil de entender y lejos del alcance de un ser humano medio. Pues no. Nada de eso. Tener un sitio web hoy en día es muy fácil, y no solamente me refiero (que también) a tener una cuenta gratuita o de pago en cualquier plataforma que proporcione un sitio web editable desde el navegador web, como [Wordpress](https://www.wordpress.com) o similar. Me refiero a tener tu propio sitio web gestionado por ti, diseñado por ti y, con estas tres sencilla plataformas que aquí te presento, alojado por ti.

### Configurar un repositorio Git

Para integrar el código fuente de nuestro proyecto con los servicios que hemos indicado usaremos un repositorio **Git**. Si estás leyendo esto seguramente sabes lo que es Git, pero para aquellos que todavía no lo conocen se trata de un software para gestionar las versiones de una carpeta o conjunto de carpetas. Obviamente su uso principal es con proyectos de Software, pero en el pasado ya he hablado sobre el uso de Git para proyectos de distinta naturaleza, no solamente software.

Para crear un repositorio y conectarlo con vuestra carpeta local os recomiendo la documentación oficial de Github: (<https://help.github.com/es/github/creating-cloning-and-archiving-repositories/creating-a-new-repository).>

Ahora que ya tenemos nuestro repositorio de Github y la carpeta local conectada lo tenemos que hacer es instalar en nuestro ordenador el software necesario. A modo de ejemplo usaré el mismo software que utilizo para alojar este sitio web que estás consultando, [GatsbyJS](gatsbyjs.org/).

### Instalar GatsbyJS

Desde una terminal ejecuta el siguiente comando:

``npm install -g gatsby-cli``

Si estás usando un sistema operativo Windows tendrás que buscar la manera de ejecutar una máquina virtual Linux, porque está fuera del alcance de este artículo explicar cómo se instalan paquetes de NodeJS en Windows. Aquí creo que lo resuelven con bastante dignidad: <https://www.gatsbyjs.org/docs/gatsby-on-windows/.>

Tras instalar el cliente de Gatsby simplemente tendrás que ejecutar otro comando más para tener tu sitio web. En mi caso estoy utilizando la plantilla **Gatsby Starter Lumen V2**, <https://www.gatsbyjs.org/docs/gatsby-on-windows/,> así que tendríais que ejecutar lo siguiente desde la carpeta local que has sincronizado con tu repositorio:

``gatsby new . https://www.gatsbyjs.org/docs/gatsby-on-windows/``

Ya tenéis en la carpeta de nuestro ordenador vuestro nuevo sitio web.

### El contenido de tu sitio web

En el archivo **gatsby-config.js** encontraréis las principales opciones a configurar en el sitio: enlaces, título, etc. No voy a entrar en detalle y os emplazo a alguno de los muchos tutoriales sobre Gatsby que podéis encontrar en la web.

La parte interesante sucede en la carpeta ``/src/pages`` tanto en la subcarpeta **pages** como en la subcarpeta **articles**.

En la primera, **pages**, incluiremos las páginas estáticas de nuestro sitio, la típica página **sobre mí**, **contacto**, etc.

En la carpeta **articles**, en formato Markdown ([Markdown](https://markdown.es/)), podremos componer los artículos de nuestro blog. Es un lenguaje de marcas sencillo que resulta fácil de aprender y que sobre todo es **totalmente legible** para un ser humano.

Pues bien, una vez que tenemos nuestro sitio web más o menos con el contenido que queremos comienza la magia. Directamente desde nuestra terminal podremos desplegar nuestro sitio web a una URL pública haciéndolo accesible desde internet.

## Publicar tu sitio web

## En Github pages

Github incluye una característica que te permite publicar con una URL pública el contenido de tu repositorio siempre que éste se pueda leer desde un navegador web.

Para habilitar la funcionalidad de usar Github Pages con tu proyecto tendrás que instalar el paquete **gh-pages**, con el siguiente comando, una vez que te encuentres en el directorio raíz de tu proyecto:

``npm install gh-pages --save-dev``

Para usar la funcionalidad de Github Pages la manera más sencilla es llamar a tu repositorio de la siguiente manera:

``nombredeusuario.github.io``

Utilizando este nombre para tu repositorio automáticamente la rama **master** se conecta con la funcionalidad de Github para publicar sitios web. Pero también puedes utilizar cualquier otro nombre para tu repositorio y definir en el apartado **settings** de tu repositorio cual es la fuente que quieres utilizar para tu página web, siendo las opciones:

- Ninguna
- La rama master de tu repositorio
- La carpeta **docs** de la rama master

Vamos a suponer que nuestro repositorio tiene un nombre diferente a ``nombredeusuario.github.io``. Para ello tendremos que indicar dentro del archivo ``gatsby-config.js`` la opción ``pathPrefix`` con el nombre de tu repositorio. De manera que la URL en la que se va a publicar tu sitio web será: ``nombredeusuario.github.io/nombredeturepositorio``.

````js
module.exports = {
  pathPrefix: "/nombredeturepositorio",
}
````

A continuación modificaremos el archivo ``package.json`` para que incluya una opción **deploy** que directamente publique nuestro sitio web ya compilado en la rama **gh-pages**.

````json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
````

Pues bien, de esta manera todos los contenidos en el directorio **public** se moverán a la rama **gh-pages**.

Así pues, los pasos a seguir para publicar tu sitio web serían:

``gatsby build && gatsby deploy``

## En Netlify

Nuestra plantilla incorpora un archivo de configuración para Netlify que nos automatizará parte del proyecto. Básicamente lo que tenemos que hacer es crear una cuenta en [Netlify](https://netlify.com) y hacer click en el botón derecho superior que indica **New site from Git**.

En el menú que nos aparece indicaremos **Github** como proveedor de **despliegue contínuo y elegiremos nuestro repositorio.

A continuación nos pedirá una serie de parámetros como la rama que queremos utilizar, que será **master** en nuestro caso, y el comando a ejecutar, que será:

``gatsby build``

El directorio **public** será el contenido publicado, que se configurará automáticamente, al igual que el comando de compilación, ya que nuestra plantilla incluye el archivo **netlify.toml**:

````toml
[build]
  publish = "public"
  command = "gatsby build"
[build.environment]
  YARN_VERSION = "1.3.2"
  YARN_FLAGS = "--no-ignore-optional"
````

Ya está. Ya tenemos nuestro sitio publicado en al URL que nos indicará la interfaz web de Netlify una vez termine el proceso de compilación.

## En Zeit Now

En Zeit procederemos de una manera similar a Netlify, una vez hayamos accedido a la consola en <https://zeit.com> y haya mos conectado nuestra cuenta de Github elegiremos la opción de **Create New Project**

A continuación elegiremos **New Project From Github**, seleccionando nuestro repositorio, importando de esta manera el contenido de nuestro repositorio.

Ta-chan, la mágia sucede, nuestro proyecto comenzará a compilarse automáticamente en unos minutos podremos acceder a nuestro sitio web a través de la URL pública que nos indicará la consola de Zeit.

No hay magia ninguna, simplemente Zeit reconoce por el formato de nuestro proyecto que se trata de un proyecto de Gatsby y ejecuta el comando

``gatsby build``

## En resumen

Hemos visto como con estos tres servicios gratuitos que perfectamente pueden cubrir las necesidades de nuestro proyecto web personal, nuestro blog, etc. podemos tener una página web con las últimas tecnologías sin apenas tener conocimientos de programación web. Quizá lo más complicado sea la instalación del software en tu ordenador o la creación y gestión del repositorio de Github, pero creo que son dos habilidades que merece la pena ejercitar pues te abrirán las puertas al mundo del desarrollo web moderno.
