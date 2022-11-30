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

import { CommentVo } from './comment-vo'

/**
 *
 * @export
 * @interface CommentVoList
 */
export interface CommentVoList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof CommentVoList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof CommentVoList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof CommentVoList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<CommentVo>}
   * @memberof CommentVoList
   */
  items: Array<CommentVo>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof CommentVoList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof CommentVoList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof CommentVoList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof CommentVoList
   */
  hasPrevious: boolean
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof CommentVoList
   */
  totalPages: number
}
