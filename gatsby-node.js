import fs from 'fs-extra-promise'
import sm from 'sitemap'

var rucksack = require('rucksack-css')
var lost = require("lost")
var cssnext = require("postcss-cssnext")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
            lost(),
            rucksack(),
            cssnext({
                browsers: ['>1%', 'last 2 versions']
            })
        ]
    })

    config.loader('svg', {
       test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: 'file-loader',
    })

    return config
};

function pagesToSitemap(pages) {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
};

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'https://dalareo.github.io',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
};

export function postBuild(pages, callback) {
  generateSiteMap(pages)
  callback()
};
