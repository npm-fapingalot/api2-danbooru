import API from '..';
import parse from './parser';

export default class ListAPI {
  constructor(private api: API) { }

  async home(page = 0) { return parse(await this.api.cheerio(`/posts?page=${page + 1}`)); }
  async tag(tags: string, page = 0) { return parse(await this.api.cheerio(`/posts?page=${page + 1}&tags=${tags}`)); }
}

export * from './schema';
