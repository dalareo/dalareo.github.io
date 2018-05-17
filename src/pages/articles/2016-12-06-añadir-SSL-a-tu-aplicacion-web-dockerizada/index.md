---
title: "Añadir SSL a tu aplicación web dockerizada"
date: "2016-12-06"
layout: post
draft: false
path: "/anadir-SSL-a-tu-aplicacion-web-dockerizada/"
category: "desarrollo web"
description: "Cada vez parece más claro que Google comenzará a penalizar aquellos sitios que no tengan una conexión segura. Por otro lado, la aparición de Lets Encrypt ha facilitado la configuración de un certificado SSL para tu sitio web, incorporando instalaciones automatizadas para los principales servidores web. Pero, ¿y si nuestra app está ya funcionando con Docker?"
---
Cada vez parece más claro que Google comenzará a [penalizar aquellos sitios que no tengan una conexión segura](https://moz.com/blog/https-tops-30-how-google-is-winning-the-long-war). Por otro lado, la aparición de Lets Encrypt ha facilitado la configuración de un certificado SSL para tu sitio web, incorporando instalaciones automatizadas para los principales servidores web. Pero, ¿y si nuestra app está ya funcionando con Docker?

Ese ha sido el caso de la app que hemos desarrollado en [Fricolab](https://fricolab.com) para el Concello da Coruña, en el contexto del proyecto [Co-Lab](http://colab.coruna.gal).

Para gestionar la documentación del proyecto creamos una aplicación web, la [Forja](https://forxa.colab.coruna.gal) basada en [Gogs](https://gogs.io/) que permita ir generando la documentación del proyecto de una manera abierta y colaborativa. Al principio fueron muchos los que pensaron (yo mismo en los "momentos grises") que no iba a funcionar, pues poner a personas que no pertenecen al ámbito tecnológico a trabajar usando Git y además haciéndolo a través de un cliente web no parecía algo fácil. Sin embargo, tanto el equipo del Co-Lab (formado por profesores universitarios de materias no tecnológicas, sociólogos, mediadoras, etc) como los participantes en el Obradoiro que sirvió como pistoletazo de salida al proyecto, han sido bastante activos en la aplicación web y hemos recibido numerosas muestras de agradecimiento y admiración por esa "original" forma de gestionar la documentación de un proyecto que nace para ser de "código abierto". Digo "original" pues Git es la herramienta standard en la gestión de contenidos en el ámbito del software libre y pienso que debería aspirar a extenderse a otros proyectos afines que comparten una misma necesidad y voluntad de apertura y transparencia.

El despliegue de nuestra aplicación lo hemos hecho utilizando en un servidor virtual de [DigitalOcean](https://www.digitalocean.com/). La aplicación está compuesta de dos microservicios que se ejecutan en [Docker](https://www.docker.com/) y cuyo archivo de configuración se puede consultar en el repositorio de la aplicación: https://github.com/ForxaCoLab/forxacolab/blob/master/docker-compose.yml

Inicialmente habíamos incluido solamente la aplicación y una base de datos MySql, reutilizando algunas plantillas que ya había por la web, pero más tarde añadimos un proxy con NGINX para poder servir la aplicación utilizando un certificado SSL proporcionado por [Lets Encrypt](https://letsencrypt.org/). Lets Encrypt permite desde hace un año, aproximadamente, asegurar los sitios web de manera gratuita y prácticamente automatizada, proporcionando scripts para los principales sistemas operativos y servidores web.

Así que pasamos de la configuración inicial de docker-compose:

    gogs:
    image: dalareo/forxacolab:latest
    ports:
    - "80:3000"
    - "10022:22"
    links:
    - mysql:db
    volumes:
    - ./data:/data

    mysql:
    image: mysql:latest
    ports:
    - "3306:3306"
    environment:
    MYSQL_ROOT_PASSWORD: password
    MYSQL_DATABASE: database

a otra más compleja en la que introducimos dos elementos muy interesantes y fáciles de configurar. Se trata de https://github.com/jwilder/nginx-proxy que incorpora un proxy que permite modificar la configuración de manera automática a medida que se arrancan los contenedores, y de https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion, un proyecto diseñado para acompañar al anterior y que nos proporciona un certificado SSL a través de Lets Encrypt y se encarga además de la renovación automática del mismo.

El docker-compose.yml definitivo será pues algo similar a:



    nginx-proxy:
        image: jwilder/nginx-proxy
        container_name: nginx-proxy
        ports:
          - "80:80"
          - "443:443"
        volumes:
          - /etc/nginx/vhost.d
          - /usr/share/nginx/html
          - /var/run/docker.sock:/tmp/docker.sock:ro

    letsencrypt-nginx-proxy-companion:
        image: jrcs/letsencrypt-nginx-proxy-companion
        volumes_from:
          - nginx-proxy
        volumes:
          - /var/run/docker.sock:/var/run/docker.sock:ro

    gogs:
        image: dalareo/forxacolab:latest
        expose:
            - "3000"
        ports:
            - "10022:22"
        links:
            - mysql:db
        volumes:
            - ./data:/data
        environment:
            - VIRTUAL_HOST=hostname
            - VIRTUAL_PORT=3000
            - LETSENCRYPT_HOST=hostname
            - LETSENCRYPT_EMAIL=user@domain.com
    mysql:
        image: mysql:latest
        environment:
            MYSQL_ROOT_PASSWORD: password
    MYSQL_DATABASE: database


La clave para poder configurar bien nuestra aplicación en Go ha sido incluir las variables de entorno necesarias para que el proxy apunte al puerto que usa nuestra aplicación (el 3000 en nuestro caso) y exponer ese puerto en el contenedor.

Otro aspecto importante es especificar el nombre del dominio, tanto a través de la variable VIRTUAL_HOST para que la confituración de NGINX sea la correcta, como a través de la variable LETSENCRYPT_HOST, para que Lets Encrypt se encarge de registrar y renovar el dominio adecuado.
