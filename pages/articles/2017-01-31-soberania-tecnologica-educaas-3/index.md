---
title: "EduCaaS y la soberanía tecnológica (3)"
date: "2017-01-31"
layout: post
path: "/educaas-soberania-digital-3/"
category: "desarrollo web"
description: "Este es el tercer post de usa serie en la que intento aclarar la relevancia de nuestro proyecto, EduCaaS, en el contexto de la soberanía tecnológica. En anteriores posts introduje la arquitectura del proyecto, su agilidad y sencillez a la hora de desplegar nuevas aplicaciones, así como aspectos relacionados con la tecnología en la que se basa. En este post explicaré, haciendo referencia al prototipo funcional que ya tenemos desplegado, algunas de las características, desde el punto de vista del usuario, de EduCaaS."
---

Todos estos meses en el desarrollo del proyecto nos han ayudado a comprender **la relevancia de tener un discurso sencillo** en relación a la pertinencia de la soberanía tecnlógica, especialemente cuando nuestros clientes (responsables de instituciones educativas y de proyectos más o menos "digitalizados") y nuestros usuarios no están en absoluto familiarizados con algunos de los procesos que EduCaaS aborda: **aprovisionamiento, despliegue, escalado**... Son palabras que resuenan con total naturalidad en el discurso de un administrador de sistemas que funcione con las tecnologías actuales (ni siquiera en uno que lleve 5 o más años fuera del mercado) pero que, debido fundamentalmente a la voluntad de aquellos que gobiernan las principales plataformas digitales, son totalmente extrañas para el usuario medio. Podríamos decir que son extrañas **porque carecen de interés**, e incluso que son extrañas **porque son procesos muy complejos** que no son abordables sin una formación técnica básica e incluso avanzada, en el caso de algunos de ellos. Ambas explicaciones son ciertas, pero ello no debe ser así. Carecen de interés no porque "no sean interesantes" sino porque **hay una clara voluntad por parte de algunos agentes del ámbito tecnológico en que el usuario no se interese por ello**. La dificultad técnica que entrañan esos procesos era una barrera insalvable antes de que existieran tecnologías que permiten ejecutar esas tareas desde una interfaz gráfica sencilla y con pocos conocimientos técnicos.

Fruto de esta inquietud por ofrecer un discurso sencillo hemos rediseñado la [**interfaz de EduCaaS**](http://wip.educaas.io) para que fuese lo más limpia y simple posible. Basándonos en la UI de [Rancher](https://rancher.com), el proyecto en el que se basa el orquestador de [**EduCaaS**](http://educaas.io), hemos procedido a despojarlo de todos aquello elementos innecesarios para el usuario final, hasta conseguir un resultado que hoy os presentamos:

![panel de control](../images/dashboard_educaas.png)

En el menu de aplicaciones nos encontramos con grandes tarjetas que representan a cada una de las aplicaciones desplegadas en nuestro entorno. En este caso:

- Aplicación para apoyo a procesos de diseño colaborativo: http://canvas.educaas.io

- Edición colaborativa de documentos en PADS: http://pad.educaas.io

- Repositorio de proyectos GIT: http://git.educaas.io

- Plataforma de comunicación instantánea: http://chat.educaas.io

- Alojamiento de archivos en la nube sincronizado con nuestros dispositivos: http://files.educaas.io

- Gestor de proyectos con metodologías ágiles: http://agile.educaas.io

- Blog y aplicaciones web integradas en Wordpress: http://blog.educaas.io

Todas estas aplicaciones se pueden añadir directamente desde el catálogo que hemos diseñado basado en las necesidades básicas de cualquier **equipo que aprende** (en el primer post hacíamos mención a este concepto). El catálogo de EduCaaS está disponible en nuestro repositorio público: https://github.com/EduCaaS/catalog. El trabajo que hemos hecho consiste básicamente en la contenerización de las aplicaciones y en su adaptación para que de manera nativa soporten las características que hemos incorporado en EduCaaS: autenticación centralizada, API RestFUL, escalado ágil...

## Autenticación centralizada

Los usuarios de EduCaaS podrán utilizar las mismas credenciales para acceder a todas las aplicaciones desplegadas en su entorno. En este entorno de ejemplo hemos creado unas credenciales de prueba para que cualquiera pueda probar las aplicaciones. Estas son:

- usuario: "usuario"
- contraseña: "password"

Estas credenciales son además válidas para acceder a EduCaaS, desde la URL http://wip.educaas.io

Todos los usuarios están registrados en un directorio basado en el estándard OpenLDAP que hemos alojado en un [servidor independiente](https://is.educaas.io:9443), basado en el proyecto [WSO2IS](http://wso2.com/products/identity-server/) pero que también
se puede instalar desde el propio [catálogo](http://wip.educaas.io/env/1a5/catalog?catalogId=EduCaaS).
