import NHentaiAPI from '..';

const api = (new NHentaiAPI()).post;

describe('#hrefToID', () => {
  test('Working', async () => {
    expect(api.hrefToID('https://danbooru.donmai.net/posts/297045/')).toBe(null);

    expect(api.hrefToID('https://danbooru.donmai.us/posts/297045/')).toBe(297045);
    expect(api.hrefToID('/posts/297045/')).toBe(297045);
  }, 20000000);
});

describe('#isValidHref', () => {
  test('Working', async () => {
    expect(api.isValidHref('https://danbooru.donmai.net/posts/297045/')).toBe(false);

    expect(api.isValidHref('https://danbooru.donmai.us/posts/297045/')).toBe(true);
    expect(api.isValidHref('/posts/297045/')).toBe(true);
  }, 20000000);
});
