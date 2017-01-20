import request from 'supertest';
import server from './../src/index';

const app = server.listen();
const req = request(app);

describe('Check API', () => {
  it('Method Get url /api', async () => {
    await req.get('/api').expect(200).expect({ version: 1 });
  });

  it('Method Get url /api/protected', async () => {
    await req.get('/api/protected').expect(401);
  });

  afterAll(() => {
    app.close();
  });
});
