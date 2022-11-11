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
import { SearchEngineSpec } from './search-engine-spec'

/**
 *
 * @export
 * @interface SearchEngine
 */
export interface SearchEngine {
  /**
   *
   * @type {SearchEngineSpec}
   * @memberof SearchEngine
   */
  spec: SearchEngineSpec
  /**
   *
   * @type {string}
   * @memberof SearchEngine
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof SearchEngine
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof SearchEngine
   */
  metadata: Metadata
}
