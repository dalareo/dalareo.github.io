---
title: "Comentarios y compartir en redes sociales en Gatsby"
date: "2016-12-11"
template: post
draft: false
slug: "comentarios-y-compartir-en-redes-sociales-en-gatsby"
category: "desarrollo web"
description: "Recientemente cambié mi sitio web anterior construido con HarpJS por uno nuevo basado en Gatsby, un framework para diseñar sitios web estáticos basado en ReactJS. Sin embargo, los sitios estáticos, pese a su rapidez y a lo sencillo que resulta su alojamiento en Github Pagees, carecen de funcionalidades basadas en servidor como los comentarios, los formularios y otros."
---
Recientemente cambié mi sitio web anterior construido con [**HarpJS**](https://harpjs.com/) por uno nuevo basado en [**Gatsby**](https://github.com/gatsbyjs), un framework para diseñar sitios web estáticos basado en [**ReactJS**](https://facebook.github.io/react/), una librería Javascript para diseñar interfaces de usuario, proyecto liderado por Facebook. Sin embargo, los sitios estáticos, pese a la rapidez y a lo sencillo que resulta su alojamiento en Github Pages o Amazon S3, carecen de funcionalidades basadas en servidor como los comentarios, los formularios y otras.

## Comentarios en un sitio estático

En mi caso opté por utilizar [**Disqus**](https://disqus.com/) para integrar los comentarios y ayudar a la creación de una comunidad y una audiencia más amplia alrededor de los contenidos de mi sitio web. **Disqus** proporciona plugins y soluciones ya listas para usar sin apenas conocimientos de programación si utilizas una plataforma como **Wordpress, Ghost, Drupal**, etc. En el caso de GatsbyJS aún no proporciona una solución propia pero ha resultado sencillo integrar el sistema de comentarios gracias a un componente open source llamado [**react-disqus-thread**](https://github.com/mzabriskie/react-disqus-thread). La integración ha sido super sencilla:

1. Incorporamos el paquete NPM en nuestro archivo **package.json**. Puedes comprobar el mío [**aquí**](https://raw.githubusercontent.com/dalareo/dalareo.github.io/develop/package.json)

2. En el archivo que establece el estilo de los **posts** (en mi caso [**este**](https://raw.githubusercontent.com/dalareo/dalareo.github.io/develop/components/SitePost/index.jsx)) importo la librería con el comando `const DisqusThread = require('react-disqus-thread')`

3. Inserto el código que cargará el módulo de comentarios con:

````javascript
<DisqusThread
  shortname="dalareo"
  title={post.title}
  url={`https://dalareo.github.io${this.props.location.pathname}`}
/>
````

## Botones para compartir en las redes sociales

Los botones para compartir en Twitter y Facebook los diseñé utilizando http://sharingbuttons.io/, un servicio que no utiliza Javascript y por lo tanto es mucho más rápido y no exige crear aplicaciones en las plataformas. El único **problemilla** que me encontré fue adaptar la sintaxis de los snippets a **ReactJS** y sustituir la propiedad **class** por **className**, así como codificar las URL para poder compartirlas directamente, utilizando las variables que ya me proporcionaba mi plantilla de  **GatsbyJS**. Incorporo el código **CSS** que me proporcionan en http://sharingbuttons.io en uno de los archivos CSS que ya está usando mi sitio web y listo. Aquí tenéis el código que he insertado:

````html
<a className="resp-sharing-button__link" href= {`https://facebook.com/sharer/sharer.php?u=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Facebook">
  <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
  </div>Share on Facebook</div>
</a>
<a className="resp-sharing-button__link" href= {`https://twitter.com/intent/tweet/?text=${ post.title };url=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Twitter">
  <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
  </div>Share on Twitter</div>
</a>
````

¡Eso es todo! Ya tengo mi sitio web corriendo con dos nuevas funcionalidades y puedo avanzar en mi estrategia **POSSE** (que son las siglas de Publish on your Own Site and Syndicate Everywhere) , que contaré en un futuro post.
