// request：從 supertest 中導入，用於發送 HTTP 請求並進行斷言。
const request = require('supertest')

// app：從上層目錄中的 app.js 文件導入 Express 應用。
// app.js 要export出來
const app = require('../src/app')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect } = require('chai')

describe('GET /user', () => {
  // done：一個回調函數，用於告訴 Mocha 當異步操作完成時測試應該結束。
  it('should return user details', (done) => {
    // request(app)：初始化一個對 app（Express 應用）的 supertest 請求。
    // .get('/user')：向 /user 端點發送一個 GET 請求。
    // .expect('Content-Type', /json/)：斷言響應的 Content-Type 頭信息應該包含 json。
    // .expect(200)：斷言 HTTP 狀態碼應該是 200（OK）。
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        try {
          expect(res.body.name).to.equal('John')
          expect(res.body.age).to.equal(30)
          done()
        } catch (err) {
          done(err)
        }
      })
  })
})
