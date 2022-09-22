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

import { Condition } from './condition'

/**
 *
 * @export
 * @interface SinglePageStatus
 */
export interface SinglePageStatus {
  /**
   *
   * @type {string}
   * @memberof SinglePageStatus
   */
  phase: string
  /**
   *
   * @type {Array<Condition>}
   * @memberof SinglePageStatus
   */
  conditions?: Array<Condition>
  /**
   *
   * @type {string}
   * @memberof SinglePageStatus
   */
  permalink?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageStatus
   */
  excerpt?: string
  /**
   *
   * @type {boolean}
   * @memberof SinglePageStatus
   */
  inProgress?: boolean
  /**
   *
   * @type {Array<string>}
   * @memberof SinglePageStatus
   */
  contributors?: Array<string>
}
