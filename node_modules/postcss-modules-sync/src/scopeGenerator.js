import stringHash from 'string-hash'

const scopeGenerator = (name, filename, css) => {
  const i = css.indexOf(`.${ name }`)
  const lineNumber = css.substr(0, i).split(/[\r\n]/).length
  const hash = stringHash(css).toString(36).substr(0, 5)

  return `${name}_${hash}_${lineNumber}`
}

export default scopeGenerator