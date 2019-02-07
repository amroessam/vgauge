import replaceSymbols from 'icss-replace-symbols'

export default class Parser {
  constructor(){
    this.exportTokens = {}
    this.translations = {}
  }

  extractExports = css => {
    css.each(node => {
      if (node.type == "rule" && node.selector == ":export") this.handleExport(node)
    })
  }

  handleExport = exportNode => {
    exportNode.each(decl => {
      if (decl.type == 'decl') {
        Object.keys(this.translations).forEach(translation => {
          decl.value = decl.value.replace(translation, this.translations[translation])
        })
        this.exportTokens[decl.prop] = decl.value
      }
    })
    exportNode.remove()
  }

  plugin = (css, result) => {
    replaceSymbols(css, this.translations)
    this.extractExports(css)
  }
}