/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Post } from './post'

/**
 *
 * @export
 * @interface PostList
 */
export interface PostList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof PostList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof PostList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof PostList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<Post>}
   * @memberof PostList
   */
  items: Array<Post>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof PostList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof PostList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof PostList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof PostList
   */
  hasPrevious: boolean
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof PostList
   */
  totalPages: number
}
