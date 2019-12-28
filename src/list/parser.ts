import * as SELECTOR from './selectors';
import { getText, toInt, regexExtract, isEmpty } from '../parse.utils';
import { IPrevPost } from '.';
import { HREF_REGEX } from '../post';

// Parsers
export const getID = ($: Cheerio): number | null =>
  toInt(regexExtract($.find(SELECTOR.POST_LINK).attr('href'), HREF_REGEX));

// Main parsers
export default ($: CheerioStatic): IPrevPost[] => {
  return $(SELECTOR.POST).map((ignore, elRaw) => {
    const el = $(elRaw);

    const id = getID(el);
    if (!id) { throw new Error('Invalid id: ' + id); }

    return {
      id,
      content: {
        conetntURL: [
          el.attr('data-file-url'),
          el.attr('data-source'),
          el.attr('data-large-file-url'),
          el.attr('data-preview-file-url'),
        ].filter((url) => !isEmpty(url)) as string[]
      },
    } as IPrevPost;
  }).get();
};
