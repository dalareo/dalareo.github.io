---
title: 'Docker Compose y WordPress: juntos pero no revueltos'
publishDate: 2015-09-22T00:00:00Z
template: post
draft: false
slug: 'docker-compose-y-wordpress-juntos-pero-no-revueltos'
category: 'desarrollo web'
excerpt: 'Una manera ágil y sencilla de instalar Wordpress en tu servidor sin complicaciones.'
---

Desde hace ya algunos meses estamos trabajando con [Docker](https://www.docker.com/), **un software/plataforma para desarrolladores y administradores de sistema** usado también por los **peces gordos de la web** como [Spotify](https://www.spotify.com/es/) o [Taiga](https://taiga.io/), una alternativa a [Trello](https://trello.com/) con software libre que también usamos desde hace un tiempo.

Quizá aquellas que aún no conocen Docker se pregunten qué es lo que esta nueva plataforma viene a solucionar o a mejorar. Destacamos **sus principales ventajas** en los siguientes puntos:

&#8211; **Agilidad**: El despliegue de una aplicación con Docker es mucho **más rápido y sencillo**.

&#8211; **Portabilidad**: Nuestras aplicaciones se podrán ejecutar en cualquier otra máquina en la que esté instalado Docker.

&#8211; **Flexibilidad**: Docker se adapta a nuestros requisitos, pues &#8220;viene con las pilas puestas, pero se pueden sacar&#8221;, esto es, **incorpora soluciones nativas** pero es susceptible de integrarse con otras.

&#8211; **Escalabilidad**: Una de las bazas más interesantes de Docker es la **facilidad con la que escala, tanto horizontal como verticalmente**. En relación a la escalabilidad de Docker es especialmente interesante [Docker Swarm](https://docs.docker.com/swarm/).

&#8211; **muchas más** que puedes descubrir tú misma&#8230;

**Docker** tiene un **repositorio propio de aplicaciones** ([Registry Hub](https://hub.docker.com/)) en el que podemos encontrar imágenes de nuestras aplicaciones preferidas, incluyendo [WordPress](https://hub.docker.com/_/wordpress/), por supuesto. Sin embargo, nuestra experiencia usando **Docker** y **WordPress** conjuntamente nos ha enseñado que la solución oficial no resuelve todos los problemas que el diseñador o desarrollador se encuentra. El principal es la posibilidad de **instalar nuevos plugins y temas**, así como modificar los existentes sin necesidad de modificar la imagen original, esto es, de manera que los cambios que realicemos en el código se incorporen al proyecto automáticamente, como haríamos con cualquier instalación de WordPress. Otra cuestión relevante que creemos que se puede mejorar es el proceso de creación de los contenedores, esto es, el despliegue de la aplicación o su instalación en un determinado host. Pero no nos vamos muy lejos, pues la solución viene de la mano de Docker, con [Docker Compose](https://docs.docker.com/compose/), una aplicación de reciente incorporación a la caja de herramientas de Docker, junto a Swarm (que ya hemos mencionado) y [Docker Machine](https://docs.docker.com/machine/).

Excede el alcance de este pequeño post explicar con detalles las características de Docker, así como las posibilidades que se abren y que constantemente dan lugar a nuevas aplicaciones. Explico pues cual es el **proceso para tener una instalación de WordPress dockerizada**.

En **primer lugar** deberemos instalar en nuestro host [Docker](https://docs.docker.com/installation/) y [Docker Compose](https://docs.docker.com/compose/install/).

A continuación descargaremos la última versión de WordPress disponible con este comando:

`$ curl https://wordpress.org/latest.tar.gz | tar -xvzf -`

En el directorio en el que hemos descomprimido WordPress crearemos ahora un par de archivos:

**a) docker-compose.yml**

Este archivo nos permitirá definir como queremos que se integren los dos contenedores que necesitamos, WordPress y una base de datos MySql, y también nos permitirá definir un volumen de datos para poder modificar los archivos de nuestra aplicación: instalar plugins, modificar el _wp-config.php_, etc.

El contenido de este archivo será el siguiente:

    wordpress:
       image: wordpress
       volumes:
       - .:/var/www/html
       links:
       - db:mysql
       ports:
       - 8080:80
    db:
       image: mariadb
       environment:
       MYSQL_ROOT_PASSWORD: password

Sin entrar en detalles acerca de la sintaxis de este archivo, solamente indicar que en él estamos indicando los dos contenedores (_wordpress_ y _db_) que formarán nuestra aplicación con Docker, así como la imágenes de las que dependen (_wordpress_ y _mariadb_), estableciendo un enlace entre ellos, redirigiendo el puerto _8080_ de nuestro host al puerto _80_ de la aplicación y montando el directorio actual del _host_ en la ruta _/var/www/html_ del contenedor, esto es, donde están los archivos de WordPress, de manera que estamos utilizando los archivos que previamente hemos descargado de la web oficial de WordPress.

**b) wp-config.php**

Este archivo lo podemos obtener copiando el existente wp-config-sample.php pero modificando algunos datos, de manera que el archivo definitivo sea algo parecido a:

define(&#8216;DB_NAME&#8217;, &#8216;wordpress&#8217;);

define(&#8216;DB_USER&#8217;, &#8216;root&#8217;);

define(&#8216;DB_PASSWORD&#8217;, &#8216;password&#8217;);

define(&#8216;DB_HOST&#8217;, &#8220;mysql&#8221;);

define(&#8216;DB_CHARSET&#8217;, &#8216;utf8&#8217;);

define(&#8216;DB_COLLATE&#8217;, &#8221;);

define(&#8216;AUTH_KEY&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;SECURE_AUTH_KEY&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;LOGGED_IN_KEY&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;NONCE_KEY&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;AUTH_SALT&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;SECURE_AUTH_SALT&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;LOGGED_IN_SALT&#8217;, &#8216;put your unique phrase here&#8217;);

define(&#8216;NONCE_SALT&#8217;, &#8216;put your unique phrase here&#8217;);

$table_prefix = &#8216;wp\_&#8217;;

define(&#8216;WPLANG&#8217;, &#8221;);

define(&#8216;WP_DEBUG&#8217;, false);

if ( !defined(&#8216;ABSPATH&#8217;) )

define(&#8216;ABSPATH&#8217;, dirname(\_\_FILE\_\_) . &#8216;/&#8217;);

require_once(ABSPATH . &#8216;wp-settings.php&#8217;);

Una vez que hayamos incorporado estos dos archivos, y habiendo instalado ya Docker y Docker Compose en nuestra máquina solamente tendremos que ejecutar el siguiente comando para instalar WordPress

`docker-compose up`

y ya podremos acceder a nuestra instalación desde la url

`http://localhost:8080`

Un último detalle importante si queremos que nuestra instalación de WordPress sea operativa es cambiar los permisos en el directorio principal, permitiendo lectura y escritura al daemon de Docker

`sudo chmod -R 777 wordpress`
