webpackJsonp([0x9c6b282a6736],{393:function(e,o){e.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2015-02-05-crea-tu-propia-red-de-wordpress/index.md absPath of file >>> MarkdownRemark",html:'<p>Desde la versión 3.0 <a href="https://wordpress.org/" title="Wordpress">WordPress</a>, <strong>el gestor de contenidos más popular en la web</strong> (alcanzando casi el 50% de todos los sitios web publicados <a href="http://trends.builtwith.com/cms" title="CMS Technologies Web Usage Statistics">http://trends.builtwith.com/cms</a>), nos permite configurar una <strong>red de blogs</strong>, una funcionalidad anteriormente disponible en <a href="https://mu.wordpress.org/" title="Multisite Wordrpess">WordPress Multisite</a>. Esta funcionalidad tiene especial interés si queremos construir <strong>una comunidad de sitios web similar a WordPress.com</strong>, asignando a cada uno de los sitios una URL personalizada, pero compartiendo todos ellos un mismo dominio. Imagina una <strong>web corporativa</strong> en la que queremos incluir distintos blogs, de temáticas diferentes, o de autores diferentes, identificados en la <strong>URL con subdominios diferentes</strong> pero todos ellos compartiendo el mismo dominio, algo así como:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">tecnología.dominio.com\nemprendimiento.dominio.com\nformacion.dominio.com`</code></pre>\n      </div>\n<p>Pues bien, para ello tendríamos que <strong>hacer que cada subdominio apuntase a un blog diferente</strong>, todos ellos relacionados y formando una única red que se podría administrar conjuntamente, especificando los plugins disponibles, los temas y otros elementos comunes.</p>\n<p>Si sabemos de antemano el número de blogs que vamos a crear tendremos que <strong>añadir a la configuración de Apache el nombre de los subdominios</strong>, como por ejemplo en:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">ServerName dominio.com\nServerAlias dominio.com subdominio1.domain.com\nsubdominio2.dominio.com\nDocumentRoot\n/var/www/directorio_en_el_que_está_instalado_wordpress`</code></pre>\n      </div>\n<p>Pero quizá <strong>querramos ir creando distintos blogs</strong>, o bien <strong>permitir que los usuarios creen su propio blog sin tener que estar modificando la configuración de nuestro servidor web</strong>. Para ello incluiremos un <strong>wildcard</strong> en el nombre del servidor, quedando la configuración de la siguiente manera:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">ServerName wordpress.dev\nServerAlias *.wordpress.dev\nServerAdmin webmaster@localhost\nDocumentRoot\n/var/www/html/directorio_en_el_que_está_instalado_wordpress`</code></pre>\n      </div>\n<p>Recuerda además de <strong>incluir las siguientes directivas</strong> en el directorio en el que quieres instalar WordPress:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&lt;Directory\n/var/www/html/directorio_en_el_que_está_instalado_wordpress&gt;\nAllowOverride Fileinfo Options\nAllowOverride All\n&lt;/Directory&gt;`</code></pre>\n      </div>\n<p>Ahora el siguiente paso será <strong>editar tu archivo wp-config.php</strong> para incluir lo siguiente:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">/* Multisite */\ndefine( &#39;WP_ALLOW_MULTISITE&#39;, true );\ndefine(&#39;MULTISITE&#39;, true);\ndefine(&#39;SUBDOMAIN_INSTALL&#39;, true);\ndefine(&#39;DOMAIN_CURRENT_SITE&#39;, &#39;dominio.com&#39;);\ndefine(&#39;PATH_CURRENT_SITE&#39;, &#39;/&#39;);\ndefine(&#39;SITE_ID_CURRENT_SITE&#39;, 1);\ndefine(&#39;BLOG_ID_CURRENT_SITE&#39;, 1);`</code></pre>\n      </div>\n<p>Eso es todo. Ya tenemos nuestra red de WordPress activa y cada uno de los distintos blogs asignado a un subdominio diferente.</p>',frontmatter:{title:"Crea tu propia red de WordPress",date:"2015-02-05",description:"Desde la versión 3.0 WordPress, el gestor de contenidos más popular en la web (alcanzando casi el 50% de todos los sitios web publicados)), nos permite configurar una red de blogs"}}},pathContext:{slug:"/crea-tu-propia-red-de-wordpress/"}}}});
//# sourceMappingURL=path---crea-tu-propia-red-de-wordpress-d6b5d1f602e3230fb2fe.js.map