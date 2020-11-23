---
title: "Desarrolla tu aplicación en HTML5"
date: "2014-11-7"
template: post
draft: false
slug: "aplicaciones-html5"
category: "desarrollo web"
description: "Desarrollar apps no es una tarea sencilla. Sin embargo existen algunas herramientas que te permitirán dar el salto a las plataformas móviles sin necesidad de aprender los diferentes lenguajes de programación nativos de cada una de ellas: Android, iOS, Windows Phone, etc. Simplemente precisaremos conocer HTML5, el lenguaje standard en la programación web, y utilizar algunos framewoks de programación que a continuación presentaremos."
---



Desarrollar apps no es una tarea sencilla. Sin embargo existen algunas herramientas que te permitirán dar el salto a las plataformas móviles sin necesidad de aprender los diferentes lenguajes de programación nativos de cada una de ellas: Android, iOS, Windows Phone, etc. Simplemente precisaremos conocer HTML5, el lenguaje standard en la programación web, y utilizar algunos framewoks de programación que a continuación presentaremos.

Para un freelance disponer de las herramientas adecuadas es fundamental para poder optimizar al máximo el tiempo dedicado a cada proyecto, pudiendo de esta manera ofrecer productos y servicios adaptados a las necesidades de los clientes por un precio ajustado. Si además dichas herramientas son flexibles y adaptables, como es el caso del software open source, y disponen una amplia documentación y comunidad de desarrollo, como las que aquí vamos a presentar, podremos además ofrecer soluciones flexibles y abiertas.

## Aplicaciones móviles en HTML5

Phonegap es una distribución de Apache Cordova, un proyecto de código abierto totalmente gratuito mantenido y mejorado por una amplia comunidad de desarrolladores con el apoyo de la Apache Foundation y Adobe. PhoneGap maneja una interfaz de programación (API) que nos permite lanzar funciones del dispositivo como la cámara, la agenda, los dispositivos de red y muchas otras. Para este fin utiliza lenguaje Javascript, por lo que podremos integrar funciones nativos en el teléfono sin necesidad de conocer el lenguaje específico de cada plataforma. Phonegap nos proporciona una serie de plugins para cada una de las funciones principales que deseamos incorporar en nuestra aplicación, constantemente mejorados y mantenidos por una amplia comunidad de desarrolladores y totalmente gratuitos.

Además otra característica es la posibilidad de integrar distintos frameworks CSS para gestionar el diseño de nuestra aplicación, haciéndola totalmente adaptable a los distintos dispositivos, modificando el layout en función del tamaño y la orientación de la pantalla. Nuestro preferido, por su sencillez y su flexibilidad es Twitter Bootstrap. Además de Bootstrap será posible integrar otros muchos frameworks como Jquery Mobile, Sencha Touch, Zurb Foundation, etc.
## Crea tu app en tres sencillos pasos

Phonegap dispone de una amplia documentación a tu alcance, que puedes consultar en http://docs.phonegap.com. Para crear tu app simplemente deberás seguir tres sencillos pasos:

1) Instala Phonegap:

Asegúrate de tener instalado NodeJS y ejecuta (en Linux y Mac como superusuario) npm install -g phonegap en tu línea de comandos.

2) Crea tu app:

Ve al directorio donde quieres mantener el código fuente de tu app y ejecuta cordova create hello com.example.hello HelloWorld. Una aplicación llamada HelloWorld habrá sido creada en el directorio hello.

3) Diseña tu contenido en HTML5:

En el subdirectorio www de tu recién creada app encontrarás un archivo index.html y unas subcarpetas CSS y JS con las librerías necesarias para ejecutar tu aplicación. Modifica dicho archivo a tu gusto y crea tu aplicación como si de una página web se tratase.

Exporta tu app a las distintas plataformas: Android, iOS, Windows Phone…

Una vez creada tu aplicación deberás seguir los siguientes pasos para poder adaptar tu contenido a las distintas plataformas móviles.

1) Añade las plataformas:

Desde el directorio de tu app ejecuta cordova platform add android, donde android es el nombre de la plataforma, que podrás sustituir por ios, firefoxos, wp7, etc.

2) Genera el código para cada plataforma:

El comando cordova build creará un subdirectorio en platform para cada una de las plataformas con el código específico.

Puedes gestionar tu flujo de trabajo de mil formas diferentes. Existen infinidad de complementos ya diseñados para proporcionar a tu aplicación funciones avanzadas. Puedes consultar algunos disponibles en la documentación oficial del proyecto.
