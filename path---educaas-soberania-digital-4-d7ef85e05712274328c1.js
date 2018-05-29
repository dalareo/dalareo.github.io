webpackJsonp([0x85f5a8865d0b],{399:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2017-01-31-soberania-tecnologica-educaas-4/index.md absPath of file >>> MarkdownRemark",html:'<p>El año pasado, un proyecto formado por algunas de las principales empresas de internet lanzó una iniciativa para extender el uso de certificados SSL en los sitios web. Para ello crearon una serie de herramientas que, en algunos casos con un simple click, permiten disponer de servicios web seguros. Hablamos de <a href="https://letsencrypt.org/">Let’s Encrypt</a>.</p>\n<p>No se trata de un grupo de activistas defenciendo los derechos de los usuarios a la privacidad o la neutralidad de la red. En absoluto. Se trata de las principales empresas de internet: Google, Facebook, Mozilla.. proporcionando una tecnología que, de manera gratuita (aquí está la principal diferencia) permite tener un certificado para nuestros sitios web reconocido por los principales navegadores y autoridades de certificación. Sí, aunque algunas administraciones públicas no lo sepan, ahora es gratis tener un certificado SSL actualizado (sic), y no como las web de la <a href="https://xunta.es">Xunta</a> y muchas otras.</p>\n<p>Reclamar soberanía digital implica reivindicar y garantizar para los usuarios una serie de libertades sobre sus datos y sus aplicaciones. Pero hay otro elemento relevante en juego cuando tratamos de garantizar la soberanía tecnológica: la seguridad. Tener un sitio web seguro es importante tanto en un contexto empresarial (protección de datos de nuestros usuarios y clientes), como en un contexto de colaboración, impidiendo ataques o intromisiones de terceros no deseadas en nuetros sitios web.</p>\n<p>En EduCaaS todas las aplicaciones incorporan un certificado SSL a través de Let’s Encrypt, usando la aplicación que encontramos en el catálogo comunitario de RAncher: <a href="https://wip.educaas.io/env/1a5/catalog?catalogId=community">https://wip.educaas.io/env/1a5/catalog?catalogId=community</a></p>\n<p>Una vez instalada la aplicación con los directorios que deseemos manejar podremos utilizar el certificado en el balanceador de carga para asignar a nuestras aplicaciones una URL que comience por HTTPS, esto es, un sitio seguro. Además también podremos redirigir el sitio no seguro (en el puerto 80) para que las personas que visiten el sitio HTTP vean en su navegador la página segura e impedir agujeros de seguridad.</p>\n<p>Aqui comparto la configuración del balanceador de carga que actualmente está funcionando en el prototipo de EduCaaS que podéis usar en <a href="https://wip.educaas.io">https://wip.educaas.io</a></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-4d692.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.624161073825505%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVQoz22S7U7FIAyGd/83pol6Af4yx/ORY9zONnego8Bq37IpM5I0ENo+fUtputEJxUUmYvnoJ+knMmuHu4wuSEiLYOWczbbzsiySUpKsO85Y7a2X5mtyEkIQ7xU0jOK8lxijeCK7n+fZEuGHYYXAwhzl7hCbrMA4Z7lcr9IMThMUwGqkEMAQAAgMBWCAwQ8fYuBjZt2jxJTl4cjydjhIc9P2AAzq9JoIVVtS3SaSZ/WhPfjiqtqgGvNyAfBdmn4DahtQghZrIJQAwlaQfs5FXWkXCp8UeDydK4WhKCT6H2gdUAWEyjXGgGeWtutqYBmMr97pL5Bor7DEJAM+X3bA8j7OOdsBwhR3wFAgv1PmncLHUyjAUaecdVIIIH2/eihpBZYCbCrx73j9FQZMReHrZ1H4DbyxvxlIdr5kAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="reglas lb"\n        title=""\n        src="/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-c83f1.png"\n        srcset="/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-569e3.png 240w,\n/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-93400.png 480w,\n/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-c83f1.png 960w,\n/static/reglas_lb-dc156a7f8641bd71cc5226be26066522-4d692.png 1341w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Como se puede observar, además de las reglas de redirección que hacen que cada uno de los subdominios apunte a un servicio diferente (pad.educaas.io al servicio de Pads, chat.educaas.io al chat, etc) existen dos líneas que nos ayudan, por un lado a <a href="https://github.com/janeczku/rancher-letsencrypt#http">declarar los dominios que tenemos asociados al certificado de Lets Encrypt</a> y otra que redirige el tráfico no seguro a las URLs con SSL. Esto segundo <a href="https://github.com/rancher/rancher/issues/3505">está siendo actualmente debatido</a> en el repositorio oficial de <a href="https://rancher.com">Rancher</a> así que es posible que pronto tengamos una solución integrada en la UI.</p>\n<p>Por lo tanto, cada vez que visitemos alguna de las apps de EduCaaS seremos automáticamente redirigidos al sitio seguro. Si por ejemplo intruducimos en nuestro navegador blog.educaas.io el navegador nos redirigirá al sitio seguro <a href="https://blog.educaas.io">https://blog.educaas.io</a></p>\n<p>Además también la plataforma está alojada en un sitio web seguro. Para ello utilizamos la configuración que proporciona este sencillo proyecto que, <a href="https://getcarina.com/blog/push-button-lets-encrypt/">con un solo contenedor</a> nos permite tener un sitio seguro.</p>\n<p>No dudes en visitar <a href="https://wip.educaas.io">https://wip.educaas.io</a> y prueba a crear tu propio entorno personal con las apps de <a href="https://wip.educaas.io/env/1a5/catalog?catalogId=EduCaaS">nuestro catálogo</a>.</p>',frontmatter:{title:"EduCaaS y la soberanía tecnológica (4)",date:"2017-02-04",description:"Reclamar soberanía digital implica reivindicar y garantizar para los usuarios una serie de libertades sobre sus datos y sus aplicaciones. Pero hay otro elemento relevante en juego cuando tratamos de garantizar la soberanía tecnológica: la seguridad. Tener un sitio web seguro es importante tanto en un contexto empresarial (protección de datos de nuestros usuarios y clientes), como en un contexto de colaboración, impidiendo ataques o intromisiones de terceros no deseadas en nuetros sitios web."}}},pathContext:{slug:"/educaas-soberania-digital-4/"}}}});
//# sourceMappingURL=path---educaas-soberania-digital-4-d7ef85e05712274328c1.js.map