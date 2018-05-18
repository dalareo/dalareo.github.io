webpackJsonp([2744319813989],{391:function(a,s){a.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"dalareo",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2016-12-11-comentarios-y-compartir-en-redes-sociales-en-gatsby/index.md absPath of file >>> MarkdownRemark",html:'<p>Recientemente cambié mi sitio web anterior construido con <a href="https://harpjs.com/"><strong>HarpJS</strong></a> por uno nuevo basado en <a href="https://github.com/gatsbyjs"><strong>Gatsby</strong></a>, un framework para diseñar sitios web estáticos basado en <a href="https://facebook.github.io/react/"><strong>ReactJS</strong></a>, una librería Javascript para diseñar interfaces de usuario, proyecto liderado por Facebook. Sin embargo, los sitios estáticos, pese a la rapidez y a lo sencillo que resulta su alojamiento en Github Pages o Amazon S3, carecen de funcionalidades basadas en servidor como los comentarios, los formularios y otras.</p>\n<h2>Comentarios en un sitio estático</h2>\n<p>En mi caso opté por utilizar <a href="https://disqus.com/"><strong>Disqus</strong></a> para integrar los comentarios y ayudar a la creación de una comunidad y una audiencia más amplia alrededor de los contenidos de mi sitio web. <strong>Disqus</strong> proporciona plugins y soluciones ya listas para usar sin apenas conocimientos de programación si utilizas una plataforma como <strong>Wordpress, Ghost, Drupal</strong>, etc. En el caso de GatsbyJS aún no proporciona una solución propia pero ha resultado sencillo integrar el sistema de comentarios gracias a un componente open source llamado <a href="https://github.com/mzabriskie/react-disqus-thread"><strong>react-disqus-thread</strong></a>. La integración ha sido super sencilla:</p>\n<ol>\n<li>\n<p>Incorporamos el paquete NPM en nuestro archivo <strong>package.json</strong>. Puedes comprobar el mío <a href="https://raw.githubusercontent.com/dalareo/dalareo.github.io/develop/package.json"><strong>aquí</strong></a></p>\n</li>\n<li>\n<p>En el archivo que establece el estilo de los <strong>posts</strong> (en mi caso <a href="https://raw.githubusercontent.com/dalareo/dalareo.github.io/develop/components/SitePost/index.jsx"><strong>este</strong></a>) importo la librería con el comando <code class="language-text">const DisqusThread = require(&#39;react-disqus-thread&#39;)</code></p>\n</li>\n<li>\n<p>Inserto el código que cargará el módulo de comentarios con:</p>\n</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">&lt;</span>DisqusThread\n  shortname<span class="token operator">=</span><span class="token string">"dalareo"</span>\n  title<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n  url<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`https://dalareo.github.io</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<h2>Botones para compartir en las redes sociales</h2>\n<p>Los botones para compartir en Twitter y Facebook los diseñé utilizando <a href="http://sharingbuttons.io/">http://sharingbuttons.io/</a>, un servicio que no utiliza Javascript y por lo tanto es mucho más rápido y no exige crear aplicaciones en las plataformas. El único <strong>problemilla</strong> que me encontré fue adaptar la sintaxis de los snippets a <strong>ReactJS</strong> y sustituir la propiedad <strong>class</strong> por <strong>className</strong>, así como codificar las URL para poder compartirlas directamente, utilizando las variables que ya me proporcionaba mi plantilla de  <strong>GatsbyJS</strong>. Incorporo el código <strong>CSS</strong> que me proporcionan en <a href="http://sharingbuttons.io">http://sharingbuttons.io</a> en uno de los archivos CSS que ya está usando mi sitio web y listo. Aquí tenéis el código que he insertado:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">&lt;a className="resp-sharing-button__link" href= {`https://facebook.com/sharer/sharer.php?u=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Facebook">\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resp-sharing-button__icon resp-sharing-button__icon--solid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>Share on Facebook<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n&lt;a className="resp-sharing-button__link" href= {`https://twitter.com/intent/tweet/?text=${ post.title };url=https://dalareo.github.io${this.props.location.pathname}`} target="_blank" aria-label="Share on Twitter">\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resp-sharing-button__icon resp-sharing-button__icon--solid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0 0 24 24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>Share on Twitter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>¡Eso es todo! Ya tengo mi sitio web corriendo con dos nuevas funcionalidades y puedo avanzar en mi estrategia <strong>POSSE</strong> (que son las siglas de Publish on your Own Site and Syndicate Everywhere) , que contaré en un futuro post.</p>',frontmatter:{title:"Comentarios y compartir en redes sociales en Gatsby",date:"2016-12-11",description:"Recientemente cambié mi sitio web anterior construido con HarpJS por uno nuevo basado en Gatsby, un framework para diseñar sitios web estáticos basado en ReactJS. Sin embargo, los sitios estáticos, pese a su rapidez y a lo sencillo que resulta su alojamiento en Github Pagees, carecen de funcionalidades basadas en servidor como los comentarios, los formularios y otros."}}},pathContext:{slug:"/comentarios-y-compartir-en-redes-sociales-en-gatsby/"}}}});
//# sourceMappingURL=path---comentarios-y-compartir-en-redes-sociales-en-gatsby-981772d62d4cfaf35156.js.map