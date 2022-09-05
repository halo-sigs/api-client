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

import { ConfigMap } from './config-map'

/**
 *
 * @export
 * @interface ConfigMapList
 */
export interface ConfigMapList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ConfigMapList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ConfigMapList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof ConfigMapList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<ConfigMap>}
   * @memberof ConfigMapList
   */
  items: Array<ConfigMap>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof ConfigMapList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof ConfigMapList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ConfigMapList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ConfigMapList
   */
  hasPrevious: boolean
}
