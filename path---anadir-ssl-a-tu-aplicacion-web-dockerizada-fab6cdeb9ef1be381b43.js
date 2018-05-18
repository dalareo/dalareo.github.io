webpackJsonp([0xb18cf072b4b3],{384:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2016-12-06-añadir-SSL-a-tu-aplicacion-web-dockerizada/index.md absPath of file >>> MarkdownRemark",html:'<p>Cada vez parece más claro que Google comenzará a <a href="https://moz.com/blog/https-tops-30-how-google-is-winning-the-long-war">penalizar aquellos sitios que no tengan una conexión segura</a>. Por otro lado, la aparición de Lets Encrypt ha facilitado la configuración de un certificado SSL para tu sitio web, incorporando instalaciones automatizadas para los principales servidores web. Pero, ¿y si nuestra app está ya funcionando con Docker?</p>\n<p>Ese ha sido el caso de la app que hemos desarrollado en <a href="https://fricolab.com">Fricolab</a> para el Concello da Coruña, en el contexto del proyecto <a href="http://colab.coruna.gal">Co-Lab</a>.</p>\n<p>Para gestionar la documentación del proyecto creamos una aplicación web, la <a href="https://forxa.colab.coruna.gal">Forja</a> basada en <a href="https://gogs.io/">Gogs</a> que permita ir generando la documentación del proyecto de una manera abierta y colaborativa. Al principio fueron muchos los que pensaron (yo mismo en los “momentos grises”) que no iba a funcionar, pues poner a personas que no pertenecen al ámbito tecnológico a trabajar usando Git y además haciéndolo a través de un cliente web no parecía algo fácil. Sin embargo, tanto el equipo del Co-Lab (formado por profesores universitarios de materias no tecnológicas, sociólogos, mediadoras, etc) como los participantes en el Obradoiro que sirvió como pistoletazo de salida al proyecto, han sido bastante activos en la aplicación web y hemos recibido numerosas muestras de agradecimiento y admiración por esa “original” forma de gestionar la documentación de un proyecto que nace para ser de “código abierto”. Digo “original” pues Git es la herramienta standard en la gestión de contenidos en el ámbito del software libre y pienso que debería aspirar a extenderse a otros proyectos afines que comparten una misma necesidad y voluntad de apertura y transparencia.</p>\n<p>El despliegue de nuestra aplicación lo hemos hecho utilizando en un servidor virtual de <a href="https://www.digitalocean.com/">DigitalOcean</a>. La aplicación está compuesta de dos microservicios que se ejecutan en <a href="https://www.docker.com/">Docker</a> y cuyo archivo de configuración se puede consultar en el repositorio de la aplicación: <a href="https://github.com/ForxaCoLab/forxacolab/blob/master/docker-compose.yml">https://github.com/ForxaCoLab/forxacolab/blob/master/docker-compose.yml</a></p>\n<p>Inicialmente habíamos incluido solamente la aplicación y una base de datos MySql, reutilizando algunas plantillas que ya había por la web, pero más tarde añadimos un proxy con NGINX para poder servir la aplicación utilizando un certificado SSL proporcionado por <a href="https://letsencrypt.org/">Lets Encrypt</a>. Lets Encrypt permite desde hace un año, aproximadamente, asegurar los sitios web de manera gratuita y prácticamente automatizada, proporcionando scripts para los principales sistemas operativos y servidores web.</p>\n<p>Así que pasamos de la configuración inicial de docker-compose:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">gogs:\nimage: dalareo/forxacolab:latest\nports:\n- &quot;80:3000&quot;\n- &quot;10022:22&quot;\nlinks:\n- mysql:db\nvolumes:\n- ./data:/data\n\nmysql:\nimage: mysql:latest\nports:\n- &quot;3306:3306&quot;\nenvironment:\nMYSQL_ROOT_PASSWORD: password\nMYSQL_DATABASE: database</code></pre>\n      </div>\n<p>a otra más compleja en la que introducimos dos elementos muy interesantes y fáciles de configurar. Se trata de <a href="https://github.com/jwilder/nginx-proxy">https://github.com/jwilder/nginx-proxy</a> que incorpora un proxy que permite modificar la configuración de manera automática a medida que se arrancan los contenedores, y de <a href="https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion">https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion</a>, un proyecto diseñado para acompañar al anterior y que nos proporciona un certificado SSL a través de Lets Encrypt y se encarga además de la renovación automática del mismo.</p>\n<p>El docker-compose.yml definitivo será pues algo similar a:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">nginx-proxy:\n    image: jwilder/nginx-proxy\n    container_name: nginx-proxy\n    ports:\n      - &quot;80:80&quot;\n      - &quot;443:443&quot;\n    volumes:\n      - /etc/nginx/vhost.d\n      - /usr/share/nginx/html\n      - /var/run/docker.sock:/tmp/docker.sock:ro\n\nletsencrypt-nginx-proxy-companion:\n    image: jrcs/letsencrypt-nginx-proxy-companion\n    volumes_from:\n      - nginx-proxy\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n\ngogs:\n    image: dalareo/forxacolab:latest\n    expose:\n        - &quot;3000&quot;\n    ports:\n        - &quot;10022:22&quot;\n    links:\n        - mysql:db\n    volumes:\n        - ./data:/data\n    environment:\n        - VIRTUAL_HOST=hostname\n        - VIRTUAL_PORT=3000\n        - LETSENCRYPT_HOST=hostname\n        - LETSENCRYPT_EMAIL=user@domain.com\nmysql:\n    image: mysql:latest\n    environment:\n        MYSQL_ROOT_PASSWORD: password\nMYSQL_DATABASE: database</code></pre>\n      </div>\n<p>La clave para poder configurar bien nuestra aplicación en Go ha sido incluir las variables de entorno necesarias para que el proxy apunte al puerto que usa nuestra aplicación (el 3000 en nuestro caso) y exponer ese puerto en el contenedor.</p>\n<p>Otro aspecto importante es especificar el nombre del dominio, tanto a través de la variable VIRTUAL<em>HOST para que la confituración de NGINX sea la correcta, como a través de la variable LETSENCRYPT</em>HOST, para que Lets Encrypt se encarge de registrar y renovar el dominio adecuado.</p>',frontmatter:{title:"Añadir SSL a tu aplicación web dockerizada",date:"2016-12-06",description:"Cada vez parece más claro que Google comenzará a penalizar aquellos sitios que no tengan una conexión segura. Por otro lado, la aparición de Lets Encrypt ha facilitado la configuración de un certificado SSL para tu sitio web, incorporando instalaciones automatizadas para los principales servidores web. Pero, ¿y si nuestra app está ya funcionando con Docker?"}}},pathContext:{slug:"/anadir-SSL-a-tu-aplicacion-web-dockerizada/"}}}});
//# sourceMappingURL=path---anadir-ssl-a-tu-aplicacion-web-dockerizada-fab6cdeb9ef1be381b43.js.map