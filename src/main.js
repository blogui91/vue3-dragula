import VueDragula from './vue-dragula'

function plugin (app, options = {}) {
  if (plugin.installed) {
    console.warn('[vue-dragula] already installed.')
  }

  VueDragula(app)
}

plugin.version = '2.0.0'

export default plugin