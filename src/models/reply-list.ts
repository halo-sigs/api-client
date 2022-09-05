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

import { Reply } from './reply'

/**
 *
 * @export
 * @interface ReplyList
 */
export interface ReplyList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ReplyList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ReplyList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof ReplyList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<Reply>}
   * @memberof ReplyList
   */
  items: Array<Reply>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof ReplyList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof ReplyList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ReplyList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ReplyList
   */
  hasPrevious: boolean
}
