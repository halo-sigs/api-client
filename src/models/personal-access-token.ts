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
import { PersonalAccessTokenSpec } from './personal-access-token-spec'

/**
 *
 * @export
 * @interface PersonalAccessToken
 */
export interface PersonalAccessToken {
  /**
   *
   * @type {PersonalAccessTokenSpec}
   * @memberof PersonalAccessToken
   */
  spec?: PersonalAccessTokenSpec
  /**
   *
   * @type {string}
   * @memberof PersonalAccessToken
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof PersonalAccessToken
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof PersonalAccessToken
   */
  metadata: Metadata
}
