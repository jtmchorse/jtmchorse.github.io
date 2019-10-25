const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/jt/Documents/Gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/home/jt/Documents/Gatsby/src/pages/about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/jt/Documents/Gatsby/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jt/Documents/Gatsby/src/pages/index.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/jt/Documents/Gatsby/src/pages/contact.js")))
}

