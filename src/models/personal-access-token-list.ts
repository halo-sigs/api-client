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

import { PersonalAccessToken } from './personal-access-token'

/**
 *
 * @export
 * @interface PersonalAccessTokenList
 */
export interface PersonalAccessTokenList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof PersonalAccessTokenList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof PersonalAccessTokenList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof PersonalAccessTokenList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<PersonalAccessToken>}
   * @memberof PersonalAccessTokenList
   */
  items: Array<PersonalAccessToken>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof PersonalAccessTokenList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof PersonalAccessTokenList
   */
  last: boolean
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof PersonalAccessTokenList
   */
  totalPages: number
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof PersonalAccessTokenList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof PersonalAccessTokenList
   */
  hasPrevious: boolean
}
