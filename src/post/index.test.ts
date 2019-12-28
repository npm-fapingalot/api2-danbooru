import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#id', () => {
  test('Compatibility', async () => {
    const post = await api.id(3730432);

    expect(post).toBeDefined();
    expect(post).toHaveProperty('id', 3730432);
  }, 20000000);
});
