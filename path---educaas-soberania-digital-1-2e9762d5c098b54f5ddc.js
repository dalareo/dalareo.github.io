webpackJsonp([0x9a91225cd834],{396:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2017-01-11-soberania-tecnologica-educaas-1/index.md absPath of file >>> MarkdownRemark",html:'<p>El concepto de <a href="https://es.wikipedia.org/wiki/Soberan%C3%ADa_Tecnol%C3%B3gica">soberanía tecnológica</a> está detrás de muchas de las iniciativas de software y hardware libre que han estado funcionando en los últimos años: desde <a href="https://guifi.net/">https://guifi.net/</a> a la <strong>red N-1</strong> (anteriormente Lorea) hasta otros proyectos más ambiciosos como <a href="https://ipfs.io/">https://ipfs.io/</a> o <a href="https://www.ethereum.org/">Ethereum</a>. La redecentralización de la red es una exigencia desde hace ya algunos años en algunos sectores que recelan de la acumulación de poder que las pricipales plataformas tecnológicas han alcanzado. El movimiento <a href="http://platformcoop.net/">platform cooperativism</a> es una de las muchas iniciativas que busca construir alternativas en la web a las plataformas propietarias que solamente consiguen ser eficientes en un contexto de monopolio real y tienen el crecimiento infinito como su credo particular, como bien apunta Douglas Rushkoff en su último libro, <a href="http://www.rushkoff.com/books/throwing-rocks-at-the-google-bus/">Throwing Rocks at the Google Bus</a>.</p>\n<p>Desde hace algunos años estoy yo también enredado en esta tarea de democratizar la tecnología, de someterla a los intereses de las personas o, como indico en mi proyecto <a href="http://fricolab.com">FricolaB</a>, de diseñar software libre centrado en las personas (<em>People Oriented Open Source Software</em>).</p>\n<p>El proyecto al que actualmente le dedico más tiempo es <strong>EduCaaS</strong>. EduCaaS es un entorno digital de creación y aprendizaje en equipo. Vale. ¿Pero eso qué quiere decir? ¿Eso cómo me interesa a mí, usuario de servicios en la nube? Pues bien, EduCaaS nace desde la necesidad de una comunidad de emprendedores sociales (la red internacional <a href="http://mondragonteamacademy.com/">Mondragón Team Academy</a>) de disponer de una infraestructura digital propia y adecuada a los procesos de aprendizaje que allí se desarrollan. Existían además inicialmente diversos requisitos que han caracterizado la arquitectura de EduCaaS, como son:</p>\n<ul>\n<li>\n<p><strong>Agilidad</strong>: Las aplicaciones deben poder instalarse y desplegarse rápidamente y deben estar preparadas para soportar cambios repentinos en el tráfico.</p>\n</li>\n<li>\n<p><strong>Sencillez</strong>: Tanto la interfaz de usuario de EduCaaS como las aplicaciones del catálogo de EduCaaS deben evitar que los usuarios tengan que modificar de manera drástica sus habitos “digitales”, manteniendo altos estándares de usuabilidad.</p>\n</li>\n<li>\n<p><strong>Autonomía</strong>: Las aplicaciones y los datos generados deben permanecer absolutamente bajo el control de los usuarios.</p>\n</li>\n<li>\n<p><strong>Flexibilidad</strong>: El catálogo de aplicaciones disponible en EduCaaS debe poder modificarse, incluyendo nuevas aplicaciones si así fuera preciso y adaptando las ya existentes.</p>\n</li>\n</ul>\n<p>Todos estos elementos han ido dibujando la arquitectura del proyecto actual. Nos han ayudado a conseguir evolucionar hasta obtener un producto preparado para responder a las necesidades de un <strong>equipo que aprende</strong>. Ahora bien, ¿acaso un <strong>equipo que aprende</strong> no tiene las mismas necesidades que cualquier otro? Estas pueden ser, entre otras: un <strong>blog</strong> para crear y compartir contenido, un <strong>espacio en la web</strong> en el que <strong>alojar y sincronizar sus archivos</strong>, una herramienta de comunicación en grupo o <strong>chat</strong> en tiempo real, un <strong>editor de textos</strong>, un <strong>gestor de proyectos</strong> para organizar tareas pendientes o un <strong>repositorio</strong> para alojar código o documentos de manera abierta y colaborativa y compartir los avances en los proyectos, sean estos de software o no. Tanto <a href="http://juanfreire.com/la-transformacion-provocada-por-lo-digital/">Juan Freire</a>, mi compañero en este viaje, como yo pensamos que no hay gran diferencia y por eso consideramos que el modelo de EduCaaS es válido para cualquier equipo o usuario interesado en garantizar la soberanía tecnológica.</p>\n<p>Todas las funciones descritas en el anterior párrafo tienen actualmente una plataforma digital que las resuelve y que además acapara un porcentaje de usuarios cercano al 100%. Hablamos de <a href="https://www.dropbox.com/">Dropbox</a>, Google Drive, <a href="https://www.github.com">Github</a>, Whatsapp, <a href="https://slack.com/">Slack</a> o <a href="https://trello.com/">Trello</a>.</p>\n<p>Durante el último año he rastreado la web buscando soluciones de código abierto que resolvieran las necesidades que estas plataformas resuelven y que, además, permitieran que EduCaaS respondiera a los requisitos iniciales que hemos descrito antes. Con <strong>EduCaaS</strong> es posible disponer de todos los servicios mencionados en una infraestructura digital propia y además de la posibilidad de adaptarlos a nuestras necesidades, diseñar <strong>nuestro propio entorno personalizado</strong>.</p>\n<p>Pero las ventajas de <strong>EduCaaS</strong> frente a otras <em>suites digitales</em> o <em>soluciones integrales</em> se fundamentan precisamente en que cada una de las aplicaciones integradas en el catálogo, además de ser aplicaciones de código abierto, disponen de una <strong>API RestFUL</strong> que nos permitirá diseñar nuestras propias aplicaciones, remezclando los datos producidos y construyendo paneles de control y widgets a la medida de las necesidades de cada proyecto. Podremos hacer un seguimiento de los contenidos creados por los miembros de nuestro equipo o nuestro proyecto educativo, publicar los contenidos creados en EduCaaS en otras plataformas digitales, y mucho más. Para aquellas que no estéis familiarizadas con las APIs y sus implicaciones en nuestras libertades en la red os recomiendo seguir a <a href="https://twitter.com/kinlane">Kim Lane</a> o su proyecto <a href="https://apievangelist.com/blog/">https://apievangelist.com/blog/</a>.</p>\n<p><strong>EduCaaS</strong>, junto a otros proyectos que proporcionan soluciones similares como <a href="https://sandstorm.io/">https://sandstorm.io/</a> o <a href="https://indiehosters.net">https://indiehosters.net</a>, proporciona una infraestructura digital propia sin renunciar a las posibilidades del software que la comunidad diseña de manera colaborativamente en plataformas como <strong>Github</strong>. Respeta además la filosofía de proyectos como <a href="https://indieweb.org/">Indie Web</a>, que ha conseguido formular algunos principios interesantes como el de <a href="https://indieweb.org/POSSE">POSSE</a>, “Publish on your Own Site, and Syndicate Everywhere”, consistente en generar el contenido en espacios digitales que están bajo tu control pero permitir su consumo desde otros silos convencionales para facilitar su difusión.</p>',frontmatter:{title:"EduCaaS y la soberanía tecnológica (1)",date:"2017-01-09",description:"Casi todos los servicios que utilizamos en nuestro día a día (correo, editor de texto, chat) están en la nube. Pero la nube tiene propietarios, como cualquier otro espacio, y muchas veces los intereses de los propietarios no coinciden con los nuestros o, incluso aún, los propietarios de la nube pueden decidir que nuestros datos o nuestras aplicaciones no son importantes en su modelo de negocio y apagarlas de la noche a la mañana. Nos encontraremos un bonito texto legal que nunca habíamos leído pero sí habíamos aceptado como explicación. Lo que durante años exigió la democracia, el poder para la ciudadanía, es ahora pasado por alto constantemente con nuestro beneplácito o nuestra total ignorancia. La soberanía digital debe preocuparte, si es que no lo hace ya. Internet nació descentralizada y debe volver a serlo."}}},pathContext:{slug:"/educaas-soberania-digital-1/"}}}});
//# sourceMappingURL=path---educaas-soberania-digital-1-2e9762d5c098b54f5ddc.js.map