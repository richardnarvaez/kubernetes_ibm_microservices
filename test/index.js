var supertest = require('supertest');
var should = require('should');

describe('users-service', () => {

  var api = supertest('http://localhost:3000');

  it('returns a 200 for a known user', (done) => {
    api.get('/about')
      .expect(200, done);
  });

});