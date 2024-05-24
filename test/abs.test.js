const { expect } = require('chai')
const abs = require('../src/abs')

describe('abs function', () => {
  it('should return 1 for input -1', () => {
    expect(abs(-1)).to.equal(1)
  })

  it('should return 0 for input 0', () => {
    expect(abs(0)).to.equal(0)
  })

  it('should return 4 for input 4', () => {
    expect(abs(4)).to.equal(4)
  })
})
