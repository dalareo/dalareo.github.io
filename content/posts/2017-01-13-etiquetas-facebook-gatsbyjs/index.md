---
title: "Mostrar las etiquetas de Facebook correctamente con GatsbyJS"
date: "2017-01-13"
template: post
draft: false
slug: "etiquetas-facebook-gatsbyjs"
category: "desarrollo web"
description: "Este blog está construido con GatsbyJS, un framework basado en ReactJS para producir sitios estáticos. Alojado en Github directamente su velocidad y eficiencia es brutal, pero ha habido que hacer algunos hackeos para que tuviera las mismas características que otro hecho con Jekyll u otro framework con una trayectoria mayor y una comunidad de usuarios produciendo plugins y complementos. Aquí explico como incluí las meta etiquetas de Facebook en cada post."
---
Al compartir el contenido del blog en las redes sociales éstas (Facebook sobre todo pero también Linkedin y otras) basan los "_snippets_" en las etiquetas que contiene tu contenido en la cabecera del documento HTML. [GatsbyJs](https://github.com/gatsbyjs/gatsby) por defecto usaba la librería https://github.com/gaearon/react-document-title y yo la he sustituido por otra más potente, https://github.com/nfl/react-helmet.

El proceso ha sido sencillo, y además está documentado en una _issue_ del repositorio de **GatsbyJS**: https://github.com/gatsbyjs/gatsby/issues/488

Así se queda el código del _wrapper_ que transforma el documento en formato _Markdown_ que contiene el contenido del post en HTML:

````
        return (
            <div>
              <Helmet
                title={ `${post.title} - ${config.siteTitle}` }
                meta={[
                    {property: "og:title", content: post.title },
                    {property: "og:description", content: post.description },
                ]}
              />
              { template }
            </div>
);
````
