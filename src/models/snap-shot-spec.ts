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
 *
 * @export
 * @interface SnapShotSpec
 */
export interface SnapShotSpec {
  /**
   *
   * @type {Ref}
   * @memberof SnapShotSpec
   */
  subjectRef: Ref
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  rawType: string
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  rawPatch?: string
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  contentPatch?: string
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  parentSnapshotName?: string
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  displayVersion: string
  /**
   *
   * @type {number}
   * @memberof SnapShotSpec
   */
  version: number
  /**
   *
   * @type {string}
   * @memberof SnapShotSpec
   */
  publishTime?: string
  /**
   *
   * @type {Array<string>}
   * @memberof SnapShotSpec
   */
  contributors?: Array<string>
}
