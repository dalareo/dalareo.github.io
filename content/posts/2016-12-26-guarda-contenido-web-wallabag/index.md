---
title: "Guarda el contenido de la web con Wallabag"
date: "2016-12-26"
template: post
draft: false
slug: "guarda-contenido-web-wallabag"
category: "desarrollo web"
description: "¿Alguna vez has visto como las pestañas de tu explorador crecían y crecían indefinidamente esperando poder leer con detalle ese artículo o esa nuevo proyecto que has descubierto por la noche con el móvil fuera de casa? No eres el único. Sin embargo una avería en el móvil o borrar la caché por error te puede dejar sin toda esa información. A mí me ha pasado. Sniff. Así que escapando de soluciones alojadas que no respeten mi privacidad decidí instalar Wallabag en mi propio servidor y así sincronizar el contenido desde mi PC y desde el móvil."
---
¿Alguna vez has visto como las pestañas de tu explorador crecían y crecían indefinidamente esperando poder leer con detalle ese artículo o esa nuevo proyecto que has descubierto por la noche con el móvil fuera de casa?

¿Estás cansado de herramientas de sincronización de pestañas que no puncionan en el móvil?

¿Usas Google Chrome, Safari o Firefox indiferentemente y quieres compartir el contenido de las páginas web que vas encontrando cuando navegas?

No eres el único. Sin embargo una avería en el móvil o borrar la caché por error te puede dejar sin toda esa información. A mí me ha pasado. Sniff. Así que escapando de soluciones alojadas que no respeten mi privacidad (**Pocket, iSync, Firefox Sync, Google Sync**) decidí instalar [**Wallabag**](https://www.wallabag.org/) en mi propio servidor y así sincronizar el contenido desde mi PC y desde el móvil.

<iframe src="https://player.vimeo.com/video/167435064" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

[**Wallabag**](https://www.wallabag.org/) es una alternativa de código abierto a **Pocket**, que es ahora mismo la solución independiente (que no pertenezca a Google, Apple o Microsoft), más utilizada.

## Cómo lo hago

Para poner en marcha tu propio servicio para guardar contenido web y poder leerlo cómodamente más tarde desde cualquier dispositivo necesitas:

- Un servidor en el que poder ejecutar un contenedor **Docker**. Existen muchos servicios que te permiten hacerlo de manera gratuita, nuestro preferido es [**Carina**](https://getcarina.com/) que mientras que está en BETA nos permite usar sus servicios sin coste. Nosotros para Wallabag usamos un servidor virtual en [**Digital Ocean**](https://www.digitalocean.com/) que por su sencillez y coste nos parece el más adecuado para la mayor parte de los proyectos.

- Una instalación de **Wallabag**, que, en el caso de que hagamos el despliegue con Docker y utilicemos la opción más sencilla que utiliza como backend SQLite y se ejecuta con el siguiente comando:

````
docker run -p 80:80 wallabag/wallabag
````

- Cambiar el usuario/contraseña que viene por defecto (wallabag/wallabag) por uno privado

- Crear un cliente en la API para poder conectarlo a las extensiones de los navegadores: las instrucciones **http://doc.wallabag.org/en/master/developer/api.html?highlight=api#creating-a-new-api-client**

- Instalar la extensión en tu navegador o la aplicación móvil en tu teléfono: **https://www.wallabag.org/pages/download-wallabag.html**

Ya dispones de un servicio propio para guardar ese contenido que quieres revisar al salir del evento, o esa referencia que has apuntado en una reunión y quieres leer con detalle al llegar a casa.

## Otras características

Wallabag permite importar el contenido que ya tenías guardado en otros servicios de terceros, como: **Pocket, Readability, Instapaper, Firefox Sync, Google Sync** y además una posibilidad que nos ha parecido muy útil para integrar el flujo de trabajo, la posibilidad de generar un feed para leer desde tu cliente de noticias favorito, que yo he añadido a mi cuenta de [**Feedly**](https://feedly.com), el lector de RSS que utilizo desde que cerró **Google Reader**.

Todo ventajas. En tu servidor y de código abierto. ¡Adiós a las pestañas infinitas en el navegador!
