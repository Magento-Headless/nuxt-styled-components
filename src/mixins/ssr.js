import collectRules from '../constructors/collectRules'

export default {
  head () {
    if (typeof window === 'undefined') {
      const css = collectRules()
        .map((rule) => rule.cssText)
        .join('')

      if (css) {
        return {
          style: [{ innerHTML: css, once: true, type: 'text/css', pbody: true }],
          __dangerouslyDisableSanitizers: ['style']
        }
      }
    }
  }
}
