webpackJsonp([0xc08e7e6b015d],{397:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Blog de David A. Lareo",subtitle:"Sitio web personal: artículos, proyectos y material de autobombo",copyright:"GNU Affero General Public License",author:{name:"David A. Lareo",twitter:"dalareo"},disqusShortname:"",url:"https://dalareo.github.io"}},markdownRemark:{id:"/home/usuario/Software/dalareo.github.io/src/pages/articles/2017-01-31-soberania-tecnologica-educaas-3/index.md absPath of file >>> MarkdownRemark",html:'<p>Todos estos meses en el desarrollo del proyecto nos han ayudado a comprender <strong>la relevancia de tener un discurso sencillo</strong> en relación a la pertinencia de la soberanía tecnlógica, especialemente cuando nuestros clientes (responsables de instituciones educativas y de proyectos más o menos “digitalizados”) y nuestros usuarios no están en absoluto familiarizados con algunos de los procesos que EduCaaS aborda: <strong>aprovisionamiento, despliegue, escalado</strong>… Son palabras que resuenan con total naturalidad en el discurso de un administrador de sistemas que funcione con las tecnologías actuales (ni siquiera en uno que lleve 5 o más años fuera del mercado) pero que, debido fundamentalmente a la voluntad de aquellos que gobiernan las principales plataformas digitales, son totalmente extrañas para el usuario medio. Podríamos decir que son extrañas <strong>porque carecen de interés</strong>, e incluso que son extrañas <strong>porque son procesos muy complejos</strong> que no son abordables sin una formación técnica básica e incluso avanzada, en el caso de algunos de ellos. Ambas explicaciones son ciertas, pero ello no debe ser así. Carecen de interés no porque “no sean interesantes” sino porque <strong>hay una clara voluntad por parte de algunos agentes del ámbito tecnológico en que el usuario no se interese por ello</strong>. La dificultad técnica que entrañan esos procesos era una barrera insalvable antes de que existieran tecnologías que permiten ejecutar esas tareas desde una interfaz gráfica sencilla y con pocos conocimientos técnicos.</p>\n<p>Fruto de esta inquietud por ofrecer un discurso sencillo hemos rediseñado la <a href="https://wip.educaas.io"><strong>interfaz de EduCaaS</strong></a> para que fuese lo más limpia y simple posible. Basándonos en la UI de <a href="https://rancher.com">Rancher</a>, el proyecto en el que se basa el orquestador de <a href="http://educaas.io"><strong>EduCaaS</strong></a>, hemos procedido a despojarlo de todos aquello elementos innecesarios para el usuario final, hasta conseguir un resultado que hoy os presentamos:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-f31cf.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 46.48093841642229%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVQoz12RzW7UMBSF80pFVEA1SLwO78AO3oFF6RR1zw42hQ0SLIoqzQJRsWA642SmlEwSO7bjnziZw7WnI1AjHV1f/3z33Jvs8MV7PHj5GQevvmByUmJyJvFoyjF5y3F0yvGEdDRt8PS0xuOpwMOTO73hKR6SDo4Fnp0JPH/HkF3NGX78Yvh5neP79RqvLzi+zjlumxZsI5CXHDnvUCiPPOakopYoRJfWrNzdWf7huLyaIwt9ANc8qe97KGPhnIN3Fr13MCHArxjc7AL9MMDEM95AM4ZhCGiVRC0EBMVivUa23QIbXqGWDcZxi54A4zjCE3wggKPzPl9AffoAWsKSgSBaqAVLOZcKZcNRtxLLFQEtVWxVh46cGetgvYfqKO9sgnbWwhLYRjAViw4NOVd0N9B+AnLxD6hNB6UFNEG0MQnWGg1J0lREUi7aFmVZJlh8WJHDhmIjd+vN/8AQPEa1hKGH0VHsY3HD8G02Q/wCtV/kOT6en6e8vgPcVwIWKwIOcV40lzCkFmJbznkqYDDSgB2NIEoqhS3l0VkERGd77YH5zW9ksaWK/pLU3a5dirGVuK8I2mqdcqF0GskecB8Y421V4S8t15jNBZXS9wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="panel de control"\n        title=""\n        src="/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-c83f1.png"\n        srcset="/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-569e3.png 240w,\n/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-93400.png 480w,\n/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-c83f1.png 960w,\n/static/dashboard_educaas-8bc88b88c3e60eab7a6d9c4efd3b0cd6-f31cf.png 1364w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>En el menu de aplicaciones nos encontramos con grandes tarjetas que representan a cada una de las aplicaciones desplegadas en nuestro entorno. En este caso:</p>\n<ul>\n<li>\n<p>Aplicación para apoyo a procesos de diseño colaborativo: <a href="https://canvas.educaas.io">https://canvas.educaas.io</a></p>\n</li>\n<li>\n<p>Edición colaborativa de documentos en PADS: <a href="https://pad.educaas.io">https://pad.educaas.io</a></p>\n</li>\n<li>\n<p>Repositorio de proyectos GIT: <a href="https://git.educaas.io">https://git.educaas.io</a></p>\n</li>\n<li>\n<p>Plataforma de comunicación instantánea: <a href="https://chat.educaas.io">https://chat.educaas.io</a></p>\n</li>\n<li>\n<p>Alojamiento de archivos en la nube sincronizado con nuestros dispositivos: <a href="https://cloud.educaas.io">https://cloud.educaas.io</a></p>\n</li>\n<li>\n<p>Gestor de proyectos con metodologías ágiles: <a href="https://agile.educaas.io">https://agile.educaas.io</a></p>\n</li>\n<li>\n<p>Blog y aplicaciones web integradas en Wordpress: <a href="https://blog.educaas.io">https://blog.educaas.io</a></p>\n</li>\n</ul>\n<p>Todas estas aplicaciones se pueden añadir directamente desde el catálogo que hemos diseñado basado en las necesidades básicas de cualquier <strong>equipo que aprende</strong> (en el primer post hacíamos mención a este concepto). El catálogo de EduCaaS está disponible en nuestro repositorio público: <a href="https://github.com/EduCaaS/catalog">https://github.com/EduCaaS/catalog</a>. El trabajo que hemos hecho consiste básicamente en la contenerización de las aplicaciones y en su adaptación para que de manera nativa soporten las características que hemos incorporado en EduCaaS: autenticación centralizada, API RestFUL, escalado ágil…</p>\n<h2>Autenticación centralizada</h2>\n<p>Los usuarios de EduCaaS podrán utilizar las mismas credenciales para acceder a todas las aplicaciones desplegadas en su entorno. En este entorno de ejemplo hemos creado unas credenciales de prueba para que cualquiera pueda probar las aplicaciones. Estas son:</p>\n<ul>\n<li>usuario: “usuario”</li>\n<li>contraseña: “password”</li>\n</ul>\n<p>Todos los usuarios están registrados en un directorio basado en el estándard OpenLDAP que hemos alojado en un <a href="https://is.educaas.io:9443">servidor independiente</a>, basado en el proyecto <a href="http://wso2.com/products/identity-server/">WSO2IS</a> pero que también\nse puede instalar desde el propio <a href="https://wip.educaas.io/env/1a5/catalog?catalogId=EduCaaS">catálogo</a>.</p>',frontmatter:{title:"EduCaaS y la soberanía tecnológica (3)",date:"2017-01-31",description:"Este es el tercer post de usa serie en la que intento aclarar la relevancia de nuestro proyecto, EduCaaS, en el contexto de la soberanía tecnológica. En anteriores posts introduje la arquitectura del proyecto, su agilidad y sencillez a la hora de desplegar nuevas aplicaciones, así como aspectos relacionados con la tecnología en la que se basa. En este post explicaré, haciendo referencia al prototipo funcional que ya tenemos desplegado, algunas de las características, desde el punto de vista del usuario, de EduCaaS."}}},pathContext:{slug:"/educaas-soberania-digital-3/"}}}});
//# sourceMappingURL=path---educaas-soberania-digital-3-1ca82f2efcd339e07c3e.js.map