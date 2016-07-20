var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;


describe('[LIONS]', function(){
  //beforeEach
  // scope
  // Mock

  // GET
  it('gets all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  // POST
  it('creates a lion data', function(){
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, response){
        expect(response.body).to.be.an('object')
        done();
      })
  });

  // PUT: POST 실행 후, PUT
  it('updates a lion data', function(){
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      })
      .set('Accept', 'application/json')
      .end(function(err, response){
        var lion = response.body;
        request(app)
          .put('/lions' + lion.id)
          .send({
            name: 'new name'
          })
          .end(function(err, response){
            expect(response.body.name).to.equal('new name');
            done();
          })
      })  
  });

  // DELETE: POST 후에 삭제
  it('deletes a lion data', function(){
    request(app)
      .post('/lions')
      .send({
        name: 'Mufasa',
        age: 100,
        pride: 'Evil lions',
        gender:'male'
      })
      .set('Accept', 'application/json')
      .end(function(err, response){
        var lion = response.body;
        request(app)
          .delete('/lions' + lion.id)
          .end(function(err, response){
            expect(response.body).to.equal(lion);
            done();
          })
      })
  });

  // GET: POST 후에 GET
  it('returns a lion data', function(){
    request(app)
      .post('/lions')
        .send({
          name: 'Mufasa',
          age: 100,
          pride: 'Evil lions',
          gender:'male'
        })
        .set('Accept', 'application/json')
        .end(function(err, response){
          var lion = response.lion;
          request(app)
            .get('/lions' + lion.id)
            .end(function(err, response){
              expect(response.body).to.equal(lion);
              done();
          })
      })
  })
});
