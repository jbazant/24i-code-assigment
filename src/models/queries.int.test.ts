import { nockToCloud } from '../../jest/nockToCloud';
import { getHomeData } from './queries';

describe('queries', () => {
  describe('getHomeData', () => {
    it('should call correct API and return JSON data', async () => {
      const scope = nockToCloud()
        .get('/data.json')
        .replyWithFile(200, __dirname + '/../__fixtures__/data.json');

      const data = await getHomeData({
        queryKey: ['QUERY_KEY'],
        meta: undefined,
      });

      expect(data).toEqual({ carousels: expect.any(Array) });

      scope.done();
    });

    it('should throw on fetch error', async () => {
      const scope = nockToCloud()
        .get('/data.json')
        .reply(400, 'INVALID_REQUEST');

      await expect(() =>
        getHomeData({
          queryKey: ['QUERY_KEY'],
          meta: undefined,
        })
      ).rejects.toThrow();

      scope.done();
    });
  });
});
