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

import { Group } from './group'

/**
 *
 * @export
 * @interface GroupList
 */
export interface GroupList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof GroupList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof GroupList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof GroupList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<Group>}
   * @memberof GroupList
   */
  items: Array<Group>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof GroupList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof GroupList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof GroupList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof GroupList
   */
  hasPrevious: boolean
}