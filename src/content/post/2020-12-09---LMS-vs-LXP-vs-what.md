---
title: 'LMS vs LXP vs... ¿qué? Baile de siglas en el e-learning'
publishDate: 2020-12-09T00:00:00Z
template: post
draft: false
slug: 'LMS-vs-LXP-vs-what'
category: 'desarrollo web'
tags:
  - 'desarrollo web'
excerpt: 'El sector de la educación a distancia, al igual que otros muchos, tiene la costumbre de usar siglas para referirse a la tipología de productos digitales que utiliza. Durante años LMS ha sido la más utilizada cuando se trataba de aplicaciones web orientadas a la educación. Desde hace unos años ha surgido una alternativa o evolución de los LMS que se han denominado LXP, siglas de Learning Experience Platforms. La diferencia fundamental con el LMS reside en las necesidades que resuelve uno y el otro.'
---

El sector de la educación a distancia, al igual que otros muchos, tiene la costumbre de usar siglas para referirse a la tipología de productos digitales que utiliza. Durante años **LMS** ha sido la más utilizada cuando se trataba de aplicaciones web orientadas a la educación. [Moodle](https://moodle.org) ha sido la referencia durante años, y otros muchos, entre los que actualmente destaca [CanvasLMS](https://www.instructure.com/canvas/es-es/educacion-superior) diseñado por Instructure, le han ido a la zaga. Ambos son productos open source, de código abierto, pero mientras que Moodle responde al modelo más tradicional de proyecto de código abierto -con su comunidad, sus procesos abiertos de colaboración, etc-, Instructure mantiene CanvasLMS más como un producto privado recurriendo a servicios de pago y consultoría para solucionar los problemas reales de implementación, adaptación, instalación...

Simplemente visitando las webs de ambos productos nos encontramos ya con distintas enunciaciones del mismo producto. Moodle abandona el nombre **LMS** y usa el más genérico de **Learning Platform**, además de otro muy confuso como es el de **Course Management System**, cuyas siglas, **CMS**, son las mismas que **Content Management System**. En Instructure siguen apostando por LMS en su denominación (Learning Management System).

Desde hace unos años ha surgido una alternativa o evolución de los LMS que se han denominado **LXP**, siglas de **Learning Experience Platforms**. La diferencia fundamental con el **LMS** reside en las necesidades que resuelve uno y el otro. Los LMS están diseñados por las instituciones, educativas en su mayor parte pero también corporaciones privadas o públicas que precisan de una plataforma digital para formar a sus empleados, y atienden principalmente las necesidades de éstas relativas a la gestión de los estudiantes, la gestión de los currículos y la obtención de certificados. Por el contrario los LXP están diseñados para atender a las necesidades del usuario que aprende.

Mientras que los **LMS** se han enfocado fundamentalmente en la “formación reglada y formal”, entendida en un sentido convencional (bachillerato, grado, carreras profesionales, posgrado…), los **LXP** nacen con la voluntad de ocuparse de todos los modelos de aprendizaje online, desde los proyectos de formación contínua a las microformaciones o cualquier otro formato no necesariamente vinculado a un currículo formal cerrado. Desde este punto de vista, mientras que en los LMS los contenidos “están ahí” para ser consumidos y poder obtener un certificado “oficial” tras finalizar el itinerario prediseñado, los LXP son espacios en los que los usuarios también generan contenidos, integrando de esta manera distintas fuentes (en principio cualquiera susceptible de ser vinculada por una URL), generando espacios informales de conversación y aprendizaje entre pares y, por lo tanto, respondiendo de una manera más flexible a las necesidades actuales de la educación online.

## LMS, LXP, CMS

Para aclarar un poco más la “guerra de siglas del sector” nos gustaría también abordar el papel que juegan los **CMS**, siglas de “Content Management System”, aunque ya hemos visto que también se utilizan para hacer referencia a "Course Management System".

Un CMS es una de las piezas más usadas en la web. Drupal es un CMS, Wordpress es un CMS, por lo que podríamos afirmar sin temor a equivocarnos que alrededor de la mitad de los sitios web que se usan son CMS.

Un CMS históricamente se ha dedicado a gestionar el contenido -como bien indica su nombre- permitiendo a los usuarios y administradores de los sitios web almacenarlo, editarlo, compartirlo y por su puesto mostrarlo a través de un navegador web. El almacenamiento de manera tradicional se ha venido haciendo en bases de datos relacionales y es por ello que el stack **LAMP** -Linux Apache MySql Php- es el más común en los CMS que hasta ahora hemos visto.

Desde la explosión de las APIs públicas y la existencia de APIs RESTful, que admiten un elevado volumen de peticiones, son muchos los CMS que han comenzado a publicar el contenido a través de un endpoint accesible públicamente -o de manera privada mediante autenticación- y la funcionalidad de “mostrar” el contenido ha quedado delegada a otros componentes, que podrían ser otros CMS o simplemente aplicaciones web basadas en el cliente -sin backend- para presentar dichos contenidos de una manera dinámica a través de elementos visuales como tablas, paneles, gráficos dinámicos o cualquier elemento susceptible de mostrarse mediante código HTML.

En el ámbito educativo los LMS han _ejercido_ muchas veces de **CMS**, permitiendo no solamente la gestión de dichos contenidos sino también la creación con herramientas de authoring integradas. Sin embargo también se han utilizado otros CMS o incluso **ECM** -un invitado más a esta batalla de siglas, **Enterprise Content Management**- con [Alfresco](https://www.alfresco.com) o [Nuxeo](https://www.nuxeo.com/es/) como principales representantes, y cuya finalidad es simplemente el almacenamiento y la gestión de documentos.

Con la efervescencia de servicios en la nube y el uso masivo del almacenamiento basado en objetos -Amazon S3 como principal representante- el papel de los ECM se ha ido poco a poco desplazando a algunas industrias y administraciones públicas, vinculado a la gestión de recursos empresariales.

No sé si este repaso de las siglas asociadas a los productos digitales que se usan en el sector de la educación online ha servido para aclarar un poco el escenario. Es significativo también que en los últimos meses, también por las demanda que la COVID19 ha generado, estas tipologías se han difuminado. Y ahora nos podemos encontrar con dispositivos digitales que ejercen todas estas funcionalidades esperadas en un LMS pero además tienen la capacidad de servir contenido de manera masiva a millones de usuarios. Incluso la presencia de los **LXP** está diluyéndose o desapareciendo y dando lugar a otras concepciones más genéricas como **plataforma educativa** y otras similares. Quizá en otro post tenga la oportunidad de abordar con más detalle todos los retos que la COVID19 ha presentado al sector y la respuesta más o menos acertada de los principales agentes.