---
title: "EduCaaS y la soberanía tecnológica (2)"
date: "2017-01-13"
layout: post
path: "/educaas-soberania-digital-2/"
category: "desarrollo web"
description: "En este post abordaré algunas cuestiones técnicas relativas a la arquitectura de EduCaaS y como ayudan a avanzar hacia un mayor control del usuario sobre los contenidos y las aplicaciones que construye. Docker es una herramienta fundamental en la nueva web programable. Bajo el lema de run, ship and build el uso de los contenedores facilita el diseño de arquitecturas complejas y modulares basadas en elementos compactos fáciles de gestionar y combinar."
---
## Build, ship and run

La web no es la misma desde que la arquitectura basada en contenedores hizo su aparición. Como todos los procesos de innovación tecnológica que suceden en la web su genealogía no es lineal, y el mérito de la disrupción lo tiene más quien supo comercializar y distribuir el producto que el que originalmente lo diseñó. Salvando estos detalles podemos afirmar que [Docker](https://www.docker.com) ha sido el principal responsable de ese cambio radical en la manera de construir aplicaciones en la web, y en la manera de gestionar su despliegue en la nube.

El lema de Docker, desde que comenzó su andadura en la web hace unos tres años, simpre fue: "**build, ship and run any app, anywhere**". A mí, reconozco que me costaba comprender la naturaleza de estos tres elemenentos en relación con la potencia de Docker para instalar software en la web. Pero bueno, pensaba yo, si los desarrolladores lo tenían claro y los responsables de marketing del proyecto habían apostado de manera tan explícita por ese lema... por algo sería!!

Analizemos pues con detalle cada uno de estos tres componentes del lema de Docker para ver cual es la potencia que encierra:

- **Run**: Con Docker podremos **ejecutar** todo tipo de software **en un entorno aislado**. Como su nombre claramente indica Docker, o estibador en castellano, es un agente que se encarga de mover y transportar contenedores. Todo lo que ejecutemos estará contenido **dentro** de un contenedor. No cabe aquí entrar en detalle pero podemos decir _a grosso modo_ que un contenedor es un entorno virtual dentro de un sistema operativo que aisla el uso de los recursos. Para una descripción mejor y más completa: https://www.youtube.com/watch?v=Av2Umb6nELU. Ejecutar nuestras aplicaciones dentro de un contenedor simplifica mucho el despliegue y el diseño de nuestros proyectos.

- **Ship**: Precisamente por la naturaleza aislada del entorno que estamos construyendo podemos moverlo y desplazarlo sin poner en riesgo ningún tipo de dependencia con el sistema anfitrión. Esto, que parece complejo para aquellas personas que no estáis familiarizadas a oir hablar de sistemas anfitriones, contenedores y clientes, es algo parecido a lo que siempre deseamos muchos cuando en los años 90 nos peleábamos con las aplicaciones en nuestro PC de escritorio: ¿si mi amigo tenía el juego instalado en su PC... por qué no podía yo hacer una copia del juego e instalarlo en el mí? Necesitábamos el soporte original para hacer la instalación desde el CD o desde los diskettes para generar de nuevo las dependencias necesarias con las librerías de nuestro sistema operativo. En el caso de las aplicaciones web el caso es similar: si queremos cambiar nuestras aplicaciones de servidor, o queremos aumentar la capacidad del servidor, nos encontraremos con un montón de dependencias que habrá que resolver en la **nueva máquina**, algo que si usamos los contenedores para nuestros despliegues no es necesario pues: **cada contenedor contiene todas las dependencias necesarias para ejecutarse**. Así pues, ya no tenemos esa dependencia de nuestro proveedor de infraestructura pues podremos migrar nuestras aplicaciones con facilidad.

- **Build**: Este tercer elemento fue el que más tiempo me costó comprender como una palanca que promoviese la autonomía de nuestros proyectos. Hasta que visualicé el despliegue total de toda la infraestructura de EduCaaS como un **LEGO** construido con piezas compactas (los contenedores) que se organizan **de manera creativa pero sometidas a unas reglas básicas y fáciles de aprender**. Esto es muy relevante en el empoderamiento del usuario y del desarrollador _junior_ pues permite producir entornos complejos, resilientes y escalables con unos conocimientos técnicos asequibles para cualquier persona que pueda editar un archivo de texto con unas reglas básicas de construcción. Como ejemplo aquí pego el contenido de una de las plantillas de despliegue más complejas que hay en el catálogo de EduCaaS, la de Open edX, un proyecto cuyo despliegue convencional incluye **cientos** de comandos:

````
db:
    image: mysql:5.7
    environment:
        MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
        MYSQL_DATABASE: edxapp
        MYSQL_USER: ${MYSQL_EDXAPP_USER}
        MYSQL_PASSWORD: ${MYSQL_EDXAPP_PASSWORD}
    volumes:
     - ${EDX_DATA_ROOT}/mysql/data:/var/lib/mysql
    volume_driver: ${volume_driver}

mongo:
    image: mongo:3.3
    volumes:
     - ${EDX_DATA_ROOT}/mongo/data:/data/db
    volume_driver: ${volume_driver}
    command: /entrypoint.sh mongod --auth

# Need to build our own for ES 0.9
es:
    image: dalareo/elasticsearch:opensaas
    volumes:
     - ${EDX_DATA_ROOT}/elasticsearch/data:/data
    volume_driver: ${volume_driver}
    command: ["/usr/share/elasticsearch/bin/elasticsearch","-f"]

memcache:
    image: memcached:1.4.24
    volumes:
     - ${EDX_DATA_ROOT}/memcache/data:/data
    volume_driver: ${volume_driver}

nginx:
    image: dalareo/nginx:opensaas
    volumes:
     - ${EDX_DATA_ROOT}:/edx/var
    volume_driver: ${volume_driver}
    command: |
      /bin/bash -c "nginx -g 'daemon off;'"

rabbitmq:
    image: rabbitmq:3.5.3
    volumes:
     - ${EDX_DATA_ROOT}/rabbitmq/data:/var/lib/rabbitmq
    volume_driver: ${volume_driver}
    environment:
        RABBITMQ_DEFAULT_USER: ${CELERY_EDXAPP_USER}
        RABBITMQ_DEFAULT_PASS: ${CELERY_EDXAPP_PASSWORD}

forums:
    image: dalareo/edx-forum:opensaas
    volumes:
     - ${EDXAPP_CS_COMMENTS_ROOT}:/edx/app/forum/cs_comments_service
    volume_driver: ${volume_driver}
    command: ["/edx/app/supervisor/venvs/supervisor/bin/supervisord", "-n", "--configuration", "/edx/app/supervisor/supervisord.conf"]

xqueue:
    image: dalareo/edx-xqueue:opensaas
    command: ["/edx/app/supervisor/venvs/supervisor/bin/supervisord", "-n", "--configuration", "/edx/app/supervisor/supervisord.conf"]
    volumes:
     - ${DOCKER_EDX_CODE_ROOT}/xqueue:/edx/app/edxapp/xqueue
     - /dev/log:/dev/log

lms:
    image: dalareo/edxapp_lms:opensaas
    volumes:
     - ${EDXAPP_EDX_CODE_ROOT}/edx-platform:/edx/app/edxapp/edx-platform
     - /dev/log
    volume_driver: ${volume_driver}

cms:
    image: dalareo/edxapp_cms:opensaas
    volumes:
     - ${EDXAPP_EDX_CODE_ROOT}/edx-platform:/edx/app/edxapp/edx-platform
     - /dev/log
    volume_driver: ${volume_driver}

edxworker:
    image: dalareo/edxworker:opensaas
    volumes:
     - ${EDXAPP_EDX_CODE_ROOT}/edx-platform:/edx/app/edxapp/edx-platform
     - /dev/log
    volume_driver: ${volume_driver}
    command: ["/edx/app/supervisor/venvs/supervisor/bin/supervisord", "-n", "--configuration", "/edx/app/supervisor/supervisord.conf"]

edxconfig:
    image: dalareo/edxconfig:opensaas
    command: /bin/false

lb:
    ports:
     - ${EXPOSED_PORT}:80
    labels:
        io.rancher.loadbalancer.target.nginx: preview.${EDX_DOMAIN_NAME}:${EXPOSED_PORT}/static=80,${EDX_DOMAIN_NAME}:${EXPOSED_PORT}/static=80,${STUDIO_DOMAIN_NAME}:${EXPOSED_PORT}/static=80
        io.rancher.scheduler.global: 'true'
        io.rancher.loadbalancer.target.lms: ${EDX_DOMAIN_NAME}:${EXPOSED_PORT}=8000,preview.${EDX_DOMAIN_NAME}:${EXPOSED_PORT}=8000
        io.rancher.loadbalancer.target.cms: ${STUDIO_DOMAIN_NAME}:${EXPOSED_PORT}=8010
    tty: true
    links:
     - nginx:nginx
     - cms:cms
     - lms:lms
    image: rancher/load-balancer-service
    stdin_open: true

````

Que la plantilla no te confunda si no estás familiarizado con el código, en la plantilla anterior: ¡solamente tenemos que modificar 16 valores! Además podremos asumir los valores por defecto sin problema si son aptos para nuestro despliegue, por lo que instalar Open edX se convierte en algo tan complejo como **hacer click en el botón de instalar**.

![instalación](../images/instalar_openedx.png)
