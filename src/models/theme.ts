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
import { ThemeSpec } from './theme-spec'

/**
 *
 * @export
 * @interface Theme
 */
export interface Theme {
  /**
   *
   * @type {ThemeSpec}
   * @memberof Theme
   */
  spec: ThemeSpec
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof Theme
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof Theme
   */
  metadata: Metadata
}
