import {camelCase} from './pattern'
import {capitalize} from './batman'

export const getField = key => {
  return {
    key,
    name: capitalize(key.replace(camelCase, '$1 $2'))
  }
}
