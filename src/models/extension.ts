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

import { Metadata } from './metadata'

/**
 *
 * @export
 * @interface Extension
 */
export interface Extension {
  /**
   *
   * @type {Metadata}
   * @memberof Extension
   */
  metadata: Metadata
  /**
   *
   * @type {string}
   * @memberof Extension
   */
  kind: string
  /**
   *
   * @type {string}
   * @memberof Extension
   */
  apiVersion: string
}
