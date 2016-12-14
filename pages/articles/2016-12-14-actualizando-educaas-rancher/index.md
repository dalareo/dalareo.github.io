---
title: "Actualizando EduCaas con Rancher 1.2"
date: "2016-12-14"
layout: post
path: "/actualizando-educaas-rancher-nueva-version/"
category: "desarrollo web"
description: "Desde hace aproximadamente un año estoy metido hasta las orejas en EduCaaS, un proyecto que busca proporcionar a instituciones y equipos que aprenden una infraestructura digital ágil y autónoma. EduCaaS está basado en Rancher, un software de código abierto para montar tu propio servicio de contenedores en la nube. Rancher acaba de actualizarse a la versión 1.2 y la actualización es un proceso sencillo pero con algunos pasos clave."
---
Desde hace aproximadamente un año estoy metido "hasta las orejas" en [**EduCaaS**](http://educaas.io), un proyecto que busca proporcionar a instituciones y equipos que aprenden una infraestructura digital ágil y autónoma. **EduCaaS** está basado en [**Rancher**](https://rancher.com), un software de código abierto para montar tu propio servicio de contenedores en la nube. Rancher acaba de actualizarse a la versión 1.2 y la actualización es un proceso sencillo pero con algunos pasos clave.

EduCaaS utiliza el backend de Rancher "as-it-is", sin ningun hackeo ni ninguna modificación en la API, pero sin embargo en la interfaz de usuario hemos hecho algunos **cambios sustanciales** que hacen que la actualización o la incorporación de las nuevas funcionalidades en [**nuestro fork**](https://github.com/educaas/ui)** no sea automática y haya que resolver algunos conflictos a mano.

## Actualización del backend

En EduCaaS estamos utilizando un nuevo servicio de contenedores de **Rackspace** que se llama [**Carina**](https://ui.getcarina.com/) y que nos está dando muy buenos resultados en cuanto a la estabilidad y la capacidad. El coste, **gratis mientras que está en BETA**, es otra de las ventajas, obviamente. Utilizamos Carina para alojar el nodo principal del cluster de servidores que componen EduCaaS. Ese nodo contiene el servidor de Rancher y la base de datos general, que maneja la información de los usuarios y la configuración del entorno: autenticación de los usuarios, catálogos disponibles, etc.

Existen varias configuraciones posibles. Nosotros hemos optado por alojar la base de datos en un contenedor independiente, siguiendo los pasos indicados en la documentación oficial de Rancher: https://docs.rancher.com/rancher/v1.2/en/installing-rancher/installing-server/#single-container-external-database

Aprovisionamos el usuario y la base de datos directamente al lanzar el contenedor con un comando similar a este:

````
docker run --name educaas_db -e MYSQL_NAME=database_name MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:tag
````

De esta manera podremos enlazar el contenedor que ejecuta el servidor de Rancher a esta base de datos externa.

Pues bien, con esta configuración actualizar el servidor de Rancher es tan sencillo como parar el contenedor actual (y borrarlo) y lanzar un nuevo contenedor con la misma configuración tras descargar la última versión de Rancher con el comando:

````
docker pull rancher/server:latest
````

## Actualización del frontend

Aquí la actualización no es tan sencilla. En la versión original de Rancher la interfaz de usuario está integrada en el servidor pero en nuestro caso hemos instalado una versión personalizada. La personalización es un proceso que se describe con detalle en el archivo README.md original del proyecto: https://github.com/EduCaaS/UI#hosting-remotely

Primero actualizaremos la UI para integrar los cambios de la última versión de Rancher y luego exportaremos los archivos estáticos a nuestro servidor en la misma localización que la versión anterior para que el servidor siga apuntando a la interfaz correcta. Esto sería:

1. Creamos una rama en nuestro repo con la última versión de Rancher: _git branch -b rancher-master_
2. Integramos en esa rama la última versión de nuestra interfaz: _git pull https://github.com/educaas/ui master_
3. Resolvemos los conflictos editando manualmente los archivos que Git no es capaz de integrar de manera automática
4. Subimos los cambios a nuestro repositorio como una rama nueva: _git push origin new-branch_
5. Una vez que tenemos las dos ramas en el repositorio y hemos comprobado que la nueva versión funciona hacemos un merge e integramos los cambios en la rama master y borramos la nueva rama.

De esta manera tenemos ya nuesta plataforma actualizada a la última versión de Rancher, que incorpora [**muchas nuevas funcionalidades**](https://github.com/rancher/rancher/releases/tag/v1.2.0) que todavía no hemos explorado con detalle pero que seguro que permitirá mejorar la experiencia de nuestros usuarios, sobre todo por la posibilidad de integrar el servicio de **registro único** también con el nodo principal de EduCaaS y la funcionalidad de **gestión de volúmenes mejorada**, que contribuirá a proporcionar más seguridad y fiabilidad al entorno.
