---
title: 'Crea tu propia red de WordPress'
publishDate: 2015-02-05T00:00:00Z
template: post
draft: false
slug: 'crea-tu-propia-red-de-wordpress'
category: 'desarrollo web'
excerpt: 'Desde la versión 3.0 WordPress, el gestor de contenidos más popular en la web (alcanzando casi el 50% de todos los sitios web publicados)), nos permite configurar una red de blogs'
---

Desde la versión 3.0 [WordPress](https://wordpress.org/ 'Wordpress'), **el gestor de contenidos más popular en la web** (alcanzando casi el 50% de todos los sitios web publicados [http://trends.builtwith.com/cms](http://trends.builtwith.com/cms 'CMS Technologies Web Usage Statistics')), nos permite configurar una **red de blogs**, una funcionalidad anteriormente disponible en [WordPress Multisite](https://mu.wordpress.org/ 'Multisite Wordrpess'). Esta funcionalidad tiene especial interés si queremos construir **una comunidad de sitios web similar a WordPress.com**, asignando a cada uno de los sitios una URL personalizada, pero compartiendo todos ellos un mismo dominio. Imagina una **web corporativa** en la que queremos incluir distintos blogs, de temáticas diferentes, o de autores diferentes, identificados en la **URL con subdominios diferentes** pero todos ellos compartiendo el mismo dominio, algo así como:

    tecnología.dominio.com
    emprendimiento.dominio.com
    formacion.dominio.com`

Pues bien, para ello tendríamos que **hacer que cada subdominio apuntase a un blog diferente**, todos ellos relacionados y formando una única red que se podría administrar conjuntamente, especificando los plugins disponibles, los temas y otros elementos comunes.

Si sabemos de antemano el número de blogs que vamos a crear tendremos que **añadir a la configuración de Apache el nombre de los subdominios**, como por ejemplo en:

    ServerName dominio.com
    ServerAlias dominio.com subdominio1.domain.com
    subdominio2.dominio.com
    DocumentRoot
    /var/www/directorio_en_el_que_está_instalado_wordpress`

Pero quizá **querramos ir creando distintos blogs**, o bien **permitir que los usuarios creen su propio blog sin tener que estar modificando la configuración de nuestro servidor web**. Para ello incluiremos un **wildcard** en el nombre del servidor, quedando la configuración de la siguiente manera:

    ServerName wordpress.dev
    ServerAlias *.wordpress.dev
    ServerAdmin webmaster@localhost
    DocumentRoot
    /var/www/html/directorio_en_el_que_está_instalado_wordpress`

Recuerda además de **incluir las siguientes directivas** en el directorio en el que quieres instalar WordPress:

    <Directory
    /var/www/html/directorio_en_el_que_está_instalado_wordpress>
    AllowOverride Fileinfo Options
    AllowOverride All
    </Directory>`

Ahora el siguiente paso será **editar tu archivo wp-config.php** para incluir lo siguiente:

    /* Multisite */
    define( 'WP_ALLOW_MULTISITE', true );
    define('MULTISITE', true);
    define('SUBDOMAIN_INSTALL', true);
    define('DOMAIN_CURRENT_SITE', 'dominio.com');
    define('PATH_CURRENT_SITE', '/');
    define('SITE_ID_CURRENT_SITE', 1);
    define('BLOG_ID_CURRENT_SITE', 1);`

Eso es todo. Ya tenemos nuestra red de WordPress activa y cada uno de los distintos blogs asignado a un subdominio diferente.
