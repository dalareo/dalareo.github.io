---
title: "Crear imágenes de Docker que se actualizan automáticamente"
date: "2017-01-31"
layout: post
draft: false
path: "/imagenes-docker-actualizadas-automaticamente/"
category: "desarrollo web"
description: "Muchas veces construimos imágenes en Docker de nuestros proyectos
favoritos para personalizarlas con alguna característica que nuetros usuarios o
nuestros clientes necesitan. Sin embargo, esa personalización, como cualquier
otro hackeo, puede convertirse en un impediemento para mantener la aplicación
actualizada cuando el desarrollador publique nuevas versiones del proyecto
original. Aquí explico como crear imágenes en Docker que se actualicen
automáticamente con cada nueva versión."
---
Recientemente he creado una imagen de [Wordpress](https://wordpress.org/)
personalizada para [EduCaaS](http://educaas.io). Esta imagen incorpora la
posibilidad de instalar plugins que nos permitan integrar nuestro directorio de
usuarios con un servidor LDAP, lo cual es muy útil cuando queremos tener una
gestión integrada de nuestros usuarios para diversas aplicaciones, con un
control granular de los permisos y características de cada usuario.

El problema no está en personalizar la imagen original, lo cual se puede hacer
visitando el repositorio oficial, https://github.com/docker-library/wordpress,
en el que incluso he hecho una pull request para integrar el cambio. Allí
simplemente editando el Dockerfile original, modificando el aprovisionamiento
del servidor PHP y añadiendo las librerías necesarias para conectar con el
servidor LDAP... asunto resuelto. Pero ahora tendremos una imagen personalizada
de Wordpress que habrá que actualizar cada vez que salga una nueva versión
de Wordpress. No es un infierno. Pero lo puede ser si, como en EduCaaS,
gestionas un catálogo de decenas de aplicaciones que cada usuario puede instalar en su
espacio privado.

Por recomendación de Tianon Gravi, uno de los que mantienen el proyecto oficial
creé [otro repositorio](https://github.com/dalareo/docker-wordpress-ldap-support)
conectado al registro de Docker mediante la función que ellos denominan
[automatic build](https://docs.docker.com/docker-hub/builds/), con el siguiente
código en el archivo Dockerfile:

````
FROM wordpress

RUN set -x \
	&& apt-get update \
	&& apt-get install -y libldap2-dev \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ \
	&& docker-php-ext-install ldap \
&& apt-get purge -y --auto-remove libldap2-dev
````
Además en la configuración del **constructor automático** indiqué una dependencia
con la imagen original de Wordpress, por lo que una nueva versión de mi imagen
se ejecutará cada vez que el repositorio original se actualice.

De esta manera tengo una imagen personalizada que siempre se mantendrá
actualizada y que permitirá a los usuarios de **EduCaaS** tener las características
avanzadas que proporciona la plataforma.
