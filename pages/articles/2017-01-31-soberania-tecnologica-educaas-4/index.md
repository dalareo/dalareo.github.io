---
title: "EduCaaS y la soberanía tecnológica (4)"
date: "2017-02-04"
layout: post
path: "/educaas-soberania-digital-4/"
category: "desarrollo web"
description: "Reclamar soberanía digital implica reivindicar y garantizar para los usuarios una serie de libertades sobre sus datos y sus aplicaciones. Pero hay otro elemento relevante en juego cuando tratamos de garantizar la soberanía tecnológica: la seguridad. Tener un sitio web seguro es importante tanto en un contexto empresarial (protección de datos de nuestros usuarios y clientes), como en un contexto de colaboración, impidiendo ataques o intromisiones de terceros no deseadas en nuetros sitios web."
---

El año pasado, un proyecto formado por algunas de las principales empresas de internet lanzó una iniciativa para extender el uso de certificados SSL en los sitios web. Para ello crearon una serie de herramientas que, en algunos casos con un simple click, permiten disponer de servicios web seguros. Hablamos de [Let's Encrypt](https://letsencrypt.org/).

No se trata de un grupo de activistas defenciendo los derechos de los usuarios a la privacidad o la neutralidad de la red. En absoluto. Se trata de las principales empresas de internet: Google, Facebook, Mozilla.. proporcionando una tecnología que, de manera gratuita (aquí está la principal diferencia) permite tener un certificado para nuestros sitios web reconocido por los principales navegadores y autoridades de certificación. Sí, aunque algunas administraciones públicas no lo sepan, ahora es gratis tener un certificado SSL actualizado (sic), y no como las web de la [Xunta](https://xunta.es) y muchas otras.

Reclamar soberanía digital implica reivindicar y garantizar para los usuarios una serie de libertades sobre sus datos y sus aplicaciones. Pero hay otro elemento relevante en juego cuando tratamos de garantizar la soberanía tecnológica: la seguridad. Tener un sitio web seguro es importante tanto en un contexto empresarial (protección de datos de nuestros usuarios y clientes), como en un contexto de colaboración, impidiendo ataques o intromisiones de terceros no deseadas en nuetros sitios web.

En EduCaaS todas las aplicaciones incorporan un certificado SSL a través de Let's Encrypt, usando la aplicación que encontramos en el catálogo comunitario de RAncher: https://wip.educaas.io/env/1a5/catalog?catalogId=community

Una vez instalada la aplicación con los directorios que deseemos manejar podremos utilizar el certificado en el balanceador de carga para asignar a nuestras aplicaciones una URL que comience por HTTPS, esto es, un sitio seguro. Además también podremos redirigir el sitio no seguro (en el puerto 80) para que las personas que visiten el sitio HTTP vean en su navegador la página segura e impedir agujeros de seguridad.

Aqui comparto la configuración del balanceador de carga que actualmente está funcionando en el prototipo de EduCaaS que podéis usar en https://wip.educaas.io

![](../images/reglas_lb.png)

Como se puede observar, además de las reglas de redirección que hacen que cada uno de los subdominios apunte a un servicio diferente (pad.educaas.io al servicio de Pads, chat.educaas.io al chat, etc) existen dos líneas que nos ayudan, por un lado a [declarar los dominios que tenemos asociados al certificado de Lets Encrypt](https://github.com/janeczku/rancher-letsencrypt#http) y otra que redirige el tráfico no seguro a las URLs con SSL. Esto segundo [está siendo actualmente debatido](https://github.com/rancher/rancher/issues/3505) en el repositorio oficial de [Rancher](https://rancher.com) así que es posible que pronto tengamos una solución integrada en la UI.

Por lo tanto, cada vez que visitemos alguna de las apps de EduCaaS seremos automáticamente redirigidos al sitio seguro. Si por ejemplo intruducimos en nuestro navegador blog.educaas.io el navegador nos redirigirá al sitio seguro https://blog.educaas.io

Además también la plataforma está alojada en un sitio web seguro. Para ello utilizamos la configuración que proporciona este sencillo proyecto que, [con un solo contenedor](https://getcarina.com/blog/push-button-lets-encrypt/) nos permite tener un sitio seguro.

No dudes en visitar https://wip.educaas.io y prueba a crear tu propio entorno personal con las apps de [nuestro catálogo](https://wip.educaas.io/env/1a5/catalog?catalogId=EduCaaS).
