webpackJsonp([0x6778f63f9eab],{411:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2017-01-09-wordpress-con-ldap-en-docker/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://wordpress.org">Wordpress</a> no necesita presentación. Actualmente más del 25% de todos los sitios web funcionan con Wordpress. Su comunidad, su flexibilidad y su infinidad de plugins la han convertido en la plataforma web preferida para los que se inician en el desarrollo web y también para muchos otros proyectos de gran envergadura.</p>\n<p>En <a href="http://educaas.io">EduCaaS</a> usamos Wordpress como pasarela de entrada para nuestro catálogo de aplicaciones y estamos integrando el catálogo de EduCaaS en Wordpress para que nuestros usuarios puedan hacer los despliegues desde un entorno familiar que puedan personalizar y adaptar a sus necesidades.</p>\n<p>Una de las características que nos ha hecho optar por <strong>Wordpress</strong> es la cantidad de plugins disponibles para ampliar sus funcionalidades. Poder utilizar un directorio de usuarios común para todas las aplicaciones web es una funcionalidad básica para nosotros, así que utilizamos un plugin de <strong>Wordpress</strong> que nos permita integrar sus usuarios con el directorio LDAP que nos proporciona nuestra solución de gestión de identidades digitales, <a href="http://wso2.com/products/identity-server/">WSO2is</a>, para la que hemos creado una solución dockerizada que puedes encontrar en nuestro catálogo de apps, <a href="https://github.com/EduCaaS/catalog">https://github.com/EduCaaS/catalog</a>.</p>\n<h2>LDAP en Wordpress</h2>\n<p>Pero nos hemos encontrado con que la versión oficial de <strong>Wordpress en Docker</strong> no soporta LDAP, por lo que hemos construido una plantilla nueva que está disponible en nuestro <a href="https://hub.docker.com/u/dalareo/">registro público</a>, así como en el catálogo de <strong>EduCaaS</strong>.</p>\n<p>Los cambios que hemos hecho en la imagen original, que siguen las indicaciones de <a href="https://github.com/docker-library/wordpress/issues/37">https://github.com/docker-library/wordpress/issues/37</a>, son los siguientes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">RUN \\\n    apt-get update &amp;&amp; \\\n    apt-get install libldap2-dev -y &amp;&amp; \\\n    rm -rf /var/lib/apt/lists/* &amp;&amp; \\\n    docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ &amp;&amp; \\\n    docker-php-ext-install ldap</code></pre>\n      </div>\n<p>De esta manera ya puedes instalar cualquier plugin que le proporcione a tu Wordpress la posibilidad de funcionar como cliente de un directorio de usuarios en LDAP.</p>',frontmatter:{title:"Wordpress con LDAP en Docker",date:"2017-01-09",description:"Si alguna vez has intentado activar algún plugin para la autenticación de tus usuarios en Wordpress con LDAP y tu instalación de Wordpress corre con Docker te habrás encontrado con un error de PHP que te impide ejecutar consultas LDAP. Hemos modificado la imagen oficial de Wordpress para que incluya de manera nativa soporte para LDAP. Aquí te lo cuento:"}}},pathContext:{slug:"/wordpress-ldap-docker/"}}}});
//# sourceMappingURL=path---wordpress-ldap-docker-ba248d689151c1f566e1.js.map