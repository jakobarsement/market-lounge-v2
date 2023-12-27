import convertNumberToAbbreviation from './convertNumberToAbbreviation'

describe('convertNumberToAbbreviation', () => {
  it('should return "NaN" for null, undefined, or empty string', () => {
    expect(convertNumberToAbbreviation(null)).toBe('NaN')
    expect(convertNumberToAbbreviation(undefined)).toBe('NaN')
    expect(convertNumberToAbbreviation('')).toBe('NaN')
  })

  it('should convert numbers to abbreviations', () => {
    expect(convertNumberToAbbreviation(1000)).toBe('1K')
    expect(convertNumberToAbbreviation(1000000)).toBe('1M')
    expect(convertNumberToAbbreviation(1000000000)).toBe('1B')
    expect(convertNumberToAbbreviation(1000000000000)).toBe('1T')
  })

  it('should convert string numbers to abbreviations', () => {
    expect(convertNumberToAbbreviation('1000')).toBe('1K')
    expect(convertNumberToAbbreviation('1000000')).toBe('1M')
    expect(convertNumberToAbbreviation('1000000000')).toBe('1B')
    expect(convertNumberToAbbreviation('1000000000000')).toBe('1T')
  })
})
