---
title: 'OpenedX en contenedores Docker'
publishDate: 2016-12-30T00:00:00Z
template: post
draft: false
slug: 'openedx-contenedores-docker'
category: 'desarrollo web'
excerpt: 'Open edX es la plataforma de código abierto que alimenta los cursos de edX, el mayor proveedor de MOOCs formado por un consorcio de universidades de todo el planeta.  El código fuente de edX está de este modo disponible para toda la comunidad gracias al compromiso del consorcio con el software libre. Cualquier institución puede alojar su propia instancia de Open edX y ofrecer sus propios cursos. Pero la instalación y el despliegue de Open edX dista mucho de ser pan comido. Gracias a Docker y el trabajo de algunos de los miembros más activos de la comunidad hemos podido ofrecer Open edX de manera ágil y sencilla. Ha sido un viaje duro...'
---

[Open edX](https://open.edx.org) es la plataforma de código abierto que alimenta los cursos de [edX](https://www.edx.org/), el mayor proveedor de MOOCs formado por un consorcio de universidades de todo el planeta. El código fuente de edX está de este modo disponible para toda la comunidad gracias al compromiso del consorcio con el software libre. Cualquier institución puede alojar su propia instancia de Open edX y ofrecer sus propios cursos. Pero la instalación y el despliegue de Open edX dista mucho de ser pan comido. Gracias a Docker y el trabajo de algunos de los miembros más activos de la comunidad hemos podido ofrecer Open edX de manera ágil y sencilla. Ha sido un viaje duro...

## El código

Sí, vale, de **código abierto**, bien. Pero, ¿cómo leches accedo al código de un proyecto que me dicen que es de código abierto? Bueno, pues existen muchas herramientas para compartir el código de un proyecto de software, pero la más común ahora mismo es [Github](htttps://github.com). Github se ha convertido en los últimos cinco años en el principal fuente a la hora de alojar y colaborar en el software de código abierto, aunque, paradójicamente, el código de Github no está disponible. En [este post](https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/) el CEO de [Gitlab](https://about.gitlab.com/), principal alternativa libre a Github, nos amplia este "pequeño detalle".

En el caso de Open edX disponemos de un gran número de repositorios disponibles en su perfil de Github: https://github.com/edx. El perfil es de los más activos que he visto, con modificaciones cada hora e incluso cada minuto, lo cual nos indica que el compromiso de Open edX con la comuniad de sofware abierto es alto y que su equipo es muy activo.

El respositorio que contiene el código de la plataforma es https://github.com/edx/edx-platform pero el repositorio que nos interesa para instalar o personalizar nuestra instalación es https://github.com/edx/configuration. En él podremos encontrar recursos para proceder a la instalación de la plataforma, tanto en su versión de **desarrollo**, como la versión de **producción**

## Desarrollo, producción, nativa, vagrant,...

En la documentación del proyecto, que está un poco "desperdigada" entre [Atlassian Confluence](https://openedx.atlassian.net/wiki/display/OpenOPS/Open+edX+Operations+Home), la [Wiki de Github](https://github.com/edx/configuration/wiki) y una [web propia de documentación](http://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/), podemos encontrar varias propuestas para proceder a la instalación de la plataforma Open edX: https://openedx.atlassian.net/wiki/display/OpenOPS/Open+edX+Installation+Options

Básicamente hay dos modalidades de instalación:

- **Devstack**: Interesante si vas a hacer modificaciones en el código de Open edX y más ligera, con menos servicios
- **Fullstack**: Instalación que integra todos los servicios necesarios para tener Open edX en producción: lms, cms, forum, analytics, etc.

También hay otras opciones de instalación disponibles en la Wiki, incluyendo una instalación nativa en Ubuntu 12.04, así como una máquina virtual de Bitnami. Desde hace unos días también hay instrucciones para hacer la instalación en Ubuntu 16.04: https://openedx.atlassian.net/wiki/display/OpenOPS/Native+Open+edX+Ubuntu+16.04+64+bit+Installation. Los requisitos para la instalación son una máquina con al menos 4GB de RAM, una CPU de 2,00GHz y un mínimo de 25GB de RAM. Con estos requisitos nos podemos ir olvidando de instalar Open edX en un servidor compartido o en un droplet baratito de [Digital Ocean](https://www.digitalocean.com/). Estos requisitos implican alquilar un servidor cuyo **coste será de 50€/mes**, aproximadamente.

La opción más sencilla para disponer de una instalación de Open edX operativa es utilizar [Vagrant](https://www.vagrantup.com/) para aprovisionar una máquina virtual que contenga todos los servicios necesarios. La instalación **fullstack** con Vagarant está descrita aquí: https://openedx.atlassian.net/wiki/display/OpenOPS/Running+Fullstack. Estas instrucciones indican además algunos usuarios de ejemplo para poder comenzar a utilizar Open edX. Este método puede ser útil para probar en nuestro servidor local o para una instalación sin muchas pretensiones, pero tener en producción todos los servicios en una máquina virtual no es lo más deseable. La razón fundamental es que si nos falla esa máquina... se caerá todo el sistema!! La otra razaón fundamental es que nos encontraremos con una infraestructura muy grande y su manejo no será muy ágil, en relación a escalado, copias de seguridad, etc.

## Y en esto llegó Docker

Los que seguís mi actividad en las redes sociales sabéis que desde que me encontré con Docker, hace ya tres años, no dejo de hacer apología de su uso, pues considero que sus ventajas son infinitas frente a los métodos convencionales de ejecutar, construir y aprovisionar software. Existen sin duda motivos para no ser demasiado optimistas y razones para no "entregarnos totalmente a Docker", como la dependencia de un único fabricante -recordemos que Docker no es un standar, sino un proyecto open source desarrollado por una compañía privada- o la existencia de otros proyectos similares que podrían tener las mismas prestaciones si contaran con los recursos suficientes, como https://github.com/opencontainers/runc o https://github.com/lxc/lxc.

Sin embargo, más allá de estas cuestiones de "gobernanza" que, no siendo poco relevantes, no afectan a la utilidad de Docker como herramienta, Docker es la principal apuesta de la comunidad open source para ejecutar y aprovisionar software en la nube. Una prueba de ello es la proliferación de servicios CAAS, las siglas de "Container as a Service". Tanto Amazon con su [EC2 Container Service](https://aws.amazon.com/es/ecs/) como Rackspace con [Carina](https://getcarina.com/), un proyecto que utilizamos en [EduCaaS](http://educaas.io) en su fase beta, o Microsoft y su recientemente anunciado [servicio de contenedores](https://azure.microsoft.com/es-es/services/container-service/) cuentan con plataformas en la nube basadas en Docker o en alguna de sus alternativas comerciales, como [Kubernetes](http://kubernetes.io/) (de Google) o [Mesos](http://mesos.apache.org/) (de Apache).

## La dockerización de Open edX

La comunidad de desarrolladores alrededor de Open edX lleva ya años avanzando en el diseño de un método de instalación basado en Docker. Existe un canal de comunicación en el [Slack oficial del proyecto](https://openedx-slack-invite.herokuapp.com/) dedicado en exclusividad a este menester, pero no es todo lo activo que muchos desearíamos. Los avances en el repositorio oficial de Open edX no son muy grandes. Existen algunas indicaciones en la wiki del proyecto en relación a los avances ya realizados y las necesidades: https://openedx.atlassian.net/wiki/display/OpenOPS/Open+edX+on+Docker

En el repositorio oficial ya se incorporan desde hace algunos meses métodos para aprovisionar los distintos servicios usando Docker: https://github.com/edx/configuration/tree/master/docker/build. Además, gracias a la colaboración del equipo de [Appsembler](http://www.appsembler.com/), el principal proveedor a nivel internacional de servicios tecnológicos relacionados con Open edX, contamos con algunas imágenes "out-of-the-box" que nos permiten ejecutar Open edX en un único contenedor. Esta es la imagen que utilizamos desde hace ya tiempo en la instalación de pruebas que tenemos dispobile en [FricolaB](http://fricolab.com) [aquí](http://mooc.fricolab.com). Me gustaría desde aquí aprovechar para agradecer personalmente a su CEO, Nate Aune, por su compromiso con el proyecto y su apoyo.

Sin embargo, es desde el otro lado del mundo desde el que me ha llegado la inspiración y el talento para poder construir una instalación de Open edX basada en Docker y lo suficientemente estable y potente para alimentar una plataforma en producción. Descubrir este proyecto de [Josh Calder](https://github.com/borisno2) (fundador de http://www.opensaas.com.au/) ha sido fundamental: https://github.com/OpenSaasAU/edx-docker-ansible. En él, Josh utiliza una nueva tecnología **ansible-container** que integra la capacidad de [Ansible](https://www.ansible.com/) para diseñar los aprovisionamientos con la potencia de **Docker**. De esta manera podemos reutilizar el repositorio oficial de Open edX y sus **playbooks** para construir una image independiente de cada uno de los servicios de los que está compuesto Open edX.

## ¿Open edX en EduCaaS?

Pero Josh ha ido más lejos aún y ha diseñado también una plantilla para integrar esa instalación **dockerizada** de Open edX en [Rancher](http://rancher.com/), el backend que utiliza EduCaaS para orquestar y organizar el catálogo de aplicaciones disponible para nuestros clientes. En este proyecto, https://github.com/OpenSaasAU/RancherTemplates, podemos obtener las plantillas para **Rancher**, que en unos días integraremos en EduCaaS para poder incluir Open edX en nuestro [catálogo de aplicaciones](https://github.com/EduCaaS/catalog).
