const superagent = require('supertest');
const app = require('./app');
function request () {
  return superagent(app.listen());
}
describe('Node 接口测试', ()=>{
  it('test 接口测试',(done) => {
    request()
      .get('/test')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) { done(err) }
        if (res.body.data == "Hello Jerry") {
          done();
        } else {
          done(new Error('接口数据异常'))
        }
      })
  })
})