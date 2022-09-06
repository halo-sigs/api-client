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

import { Ref } from './ref'

/**
 * The spec of menu item.
 * @export
 * @interface MenuItemSpec
 */
export interface MenuItemSpec {
  /**
   * The display name of menu item.
   * @type {string}
   * @memberof MenuItemSpec
   */
  displayName?: string
  /**
   * The href of this menu item.
   * @type {string}
   * @memberof MenuItemSpec
   */
  href?: string
  /**
   * The priority is for ordering.
   * @type {number}
   * @memberof MenuItemSpec
   */
  priority?: number
  /**
   * Children of this menu item
   * @type {Array<string>}
   * @memberof MenuItemSpec
   */
  children?: Array<string>
  /**
   *
   * @type {Ref}
   * @memberof MenuItemSpec
   */
  categoryRef?: Ref
  /**
   *
   * @type {Ref}
   * @memberof MenuItemSpec
   */
  tagRef?: Ref
  /**
   *
   * @type {Ref}
   * @memberof MenuItemSpec
   */
  postRef?: Ref
  /**
   *
   * @type {Ref}
   * @memberof MenuItemSpec
   */
  pageRef?: Ref
}
