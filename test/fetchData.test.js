const { expect } = require('chai')
const sinon = require('sinon')
const axios = require('axios')
const fetchData = require('../src/fetchData')

describe('fechData function', () => {
  // 每次測試後, sinon創建的模擬 stubs
  afterEach(() => {
    sinon.restore()
  })

  it('should fetchData from API', async () => {
    // 創建一個假響應數據
    const fakeResponse = { data: 'test data' }

    // 創建一個函數模擬（stub），用於替代 axios.get。
    // 設置模擬的 axios.get 函數返回一個成功解析的 Promise
    const axiosStub = sinon.stub(axios, 'get').resolves({ data: fakeResponse })

    const data = await fetchData('httP://fakeapi.com/data')
    // deep：用於深度比較對象或數組，確保它們的所有屬性都相同
    expect(data).to.deep.equal(fakeResponse)

    // 檢查模擬函數是否被調用一次
    expect(axiosStub.calledOnce).to.be.true

    // 斷言 axios.get 函數應該使用 'http://fakeapi.com/data' 作為參數被調用
    expect(axiosStub.calledWith()).to.be.true
  })

  it('should handle error response', async () => {
    const axiosStub = sinon
      .stub(axios, 'get')
      .rejects(new Error('Network Error'))

    try {
      await fetchData('httP://fakeapi.com/data')
    } catch (err) {
      expect(err.message).to.equal('Network Error')
    }
    expect(axiosStub.calledOnce).to.be.true
  })
})
