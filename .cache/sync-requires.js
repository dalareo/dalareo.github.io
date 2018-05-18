// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/usuario/Software/dalareo.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/templates/post-template.jsx")),
  "component---src-templates-category-template-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/templates/category-template.jsx")),
  "component---src-templates-page-template-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/templates/page-template.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/usuario/Software/dalareo.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/pages/404.jsx")),
  "component---src-pages-categories-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/pages/categories.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/usuario/Software/dalareo.github.io/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/layout-index.json"),
  "aplicaciones-html-5.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/aplicaciones-html-5.json"),
  "categories-desarrollo-web.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/categories-desarrollo-web.json"),
  "el-ano-de-sofia.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/el-ano-de-sofia.json"),
  "categories-pensamiento.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/categories-pensamiento.json"),
  "crea-tu-propia-red-de-wordpress.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/crea-tu-propia-red-de-wordpress.json"),
  "je-suis-andreas.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/je-suis-andreas.json"),
  "categories-actualidad.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/categories-actualidad.json"),
  "working-class-heroes.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/working-class-heroes.json"),
  "categories-memorias.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/categories-memorias.json"),
  "docker-compose-y-wordpress-juntos-pero-no-revueltos.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/docker-compose-y-wordpress-juntos-pero-no-revueltos.json"),
  "gaiteira.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/gaiteira.json"),
  "ponte-las-pilas-con-el-software-libre.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/ponte-las-pilas-con-el-software-libre.json"),
  "anadir-ssl-a-tu-aplicacion-web-dockerizada.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/anadir-ssl-a-tu-aplicacion-web-dockerizada.json"),
  "comentarios-y-compartir-en-redes-sociales-en-gatsby.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/comentarios-y-compartir-en-redes-sociales-en-gatsby.json"),
  "actualizando-educaas-rancher-nueva-version.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/actualizando-educaas-rancher-nueva-version.json"),
  "guarda-contenido-web-wallabag.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/guarda-contenido-web-wallabag.json"),
  "wordpress-ldap-docker.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/wordpress-ldap-docker.json"),
  "educaas-soberania-digital-1.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/educaas-soberania-digital-1.json"),
  "etiquetas-facebook-gatsbyjs.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/etiquetas-facebook-gatsbyjs.json"),
  "imagenes-docker-actualizadas-automaticamente.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/imagenes-docker-actualizadas-automaticamente.json"),
  "educaas-soberania-digital-3.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/educaas-soberania-digital-3.json"),
  "educaas-soberania-digital-4.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/educaas-soberania-digital-4.json"),
  "documentar-para-compartir.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/documentar-para-compartir.json"),
  "about.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/about.json"),
  "projects.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/projects.json"),
  "openedx-contenedores-docker.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/openedx-contenedores-docker.json"),
  "educaas-soberania-digital-2.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/educaas-soberania-digital-2.json"),
  "lo-complejo-lo-emergente-lo-diferente-que-viene.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/lo-complejo-lo-emergente-lo-diferente-que-viene.json"),
  "dev-404-page.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/404.json"),
  "categories.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/categories.json"),
  "index.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/index.json"),
  "404-html.json": require("/home/usuario/Software/dalareo.github.io/.cache/json/404-html.json")
}