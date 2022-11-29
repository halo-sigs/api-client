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

import { Role } from './role'

/**
 *
 * @export
 * @interface RoleList
 */
export interface RoleList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof RoleList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof RoleList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof RoleList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<Role>}
   * @memberof RoleList
   */
  items: Array<Role>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof RoleList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof RoleList
   */
  last: boolean
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof RoleList
   */
  totalPages: number
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof RoleList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof RoleList
   */
  hasPrevious: boolean
}
