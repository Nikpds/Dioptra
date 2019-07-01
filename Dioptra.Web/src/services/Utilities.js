import { strings } from '../contexts/LocalizationProvider'

export const enumToLookup = _enum => {
  const map = []
  for (const n in _enum) {
    if (typeof _enum[n] === 'string') {
      map.push({ id: n, description: strings.enumerations[_enum[n]] })
    }
  }
  return map
}
