import { ID } from '../post';
import { IContent } from '../schema.base';

/**
 * The object used to describe post list elements. Ie the home screen, ...
 */
export interface IPrevPost {
  /**
   * The id of the post
   */
  id: ID;

  /**
   * The image conetnt
   */
  content: IContent;
}
