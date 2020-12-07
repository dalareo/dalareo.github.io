---
title: "Wordpress con LDAP en Docker"
date: "2017-01-09"
template: post
draft: false
slug: "wordpress-ldap-docker"
category: "desarrollo web"
description: "Si alguna vez has intentado activar algún plugin para la autenticación de tus usuarios en Wordpress con LDAP y tu instalación de Wordpress corre con Docker te habrás encontrado con un error de PHP que te impide ejecutar consultas LDAP. Hemos modificado la imagen oficial de Wordpress para que incluya de manera nativa soporte para LDAP. Aquí te lo cuento:"
---
[Wordpress](https://wordpress.org) no necesita presentación. Actualmente más del 25% de todos los sitios web funcionan con Wordpress. Su comunidad, su flexibilidad y su infinidad de plugins la han convertido en la plataforma web preferida para los que se inician en el desarrollo web y también para muchos otros proyectos de gran envergadura.

En [EduCaaS](http://educaas.io) usamos Wordpress como pasarela de entrada para nuestro catálogo de aplicaciones y estamos integrando el catálogo de EduCaaS en Wordpress para que nuestros usuarios puedan hacer los despliegues desde un entorno familiar que puedan personalizar y adaptar a sus necesidades.

Una de las características que nos ha hecho optar por **Wordpress** es la cantidad de plugins disponibles para ampliar sus funcionalidades. Poder utilizar un directorio de usuarios común para todas las aplicaciones web es una funcionalidad básica para nosotros, así que utilizamos un plugin de **Wordpress** que nos permita integrar sus usuarios con el directorio LDAP que nos proporciona nuestra solución de gestión de identidades digitales, [WSO2is](http://wso2.com/products/identity-server/), para la que hemos creado una solución dockerizada que puedes encontrar en nuestro catálogo de apps, https://github.com/EduCaaS/catalog.

## LDAP en Wordpress
Pero nos hemos encontrado con que la versión oficial de **Wordpress en Docker** no soporta LDAP, por lo que hemos construido una plantilla nueva que está disponible en nuestro [registro público](https://hub.docker.com/u/dalareo/), así como en el catálogo de **EduCaaS**.

Los cambios que hemos hecho en la imagen original, que siguen las indicaciones de https://github.com/docker-library/wordpress/issues/37, son los siguientes:

````
RUN \
    apt-get update && \
    apt-get install libldap2-dev -y && \
    rm -rf /var/lib/apt/lists/* && \
    docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ && \
    docker-php-ext-install ldap
````

De esta manera ya puedes instalar cualquier plugin que le proporcione a tu Wordpress la posibilidad de funcionar como cliente de un directorio de usuarios en LDAP.
