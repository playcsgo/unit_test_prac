const { expect } = require('chai')
const sum = require('../src/sum')

describe('Sum Function', () => {
  it('should add 1 and 2 to return 3', () => {
    expect(sum(1, 2)).to.equal(3)
  })

  it('should add -1 and -2 to return -3', () => {
    expect(sum(-1, -2)).to.equal(-3)
  })
})
