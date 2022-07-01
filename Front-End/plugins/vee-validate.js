import { extend, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach((key) => {
  // const rule = rules[key]
  extend(key, {
    ...rules[key],
  })
})

extend('url', (value) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // validate fragment locator
  if (urlPattern.test(value)) {
    return true
  }
  return 'This value must be a url'
})

localize('en', en)
