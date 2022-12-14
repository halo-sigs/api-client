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
import { RoleRef } from './role-ref'
import { Subject } from './subject'

/**
 *
 * @export
 * @interface RoleBinding
 */
export interface RoleBinding {
  /**
   *
   * @type {Array<Subject>}
   * @memberof RoleBinding
   */
  subjects?: Array<Subject>
  /**
   *
   * @type {RoleRef}
   * @memberof RoleBinding
   */
  roleRef?: RoleRef
  /**
   *
   * @type {string}
   * @memberof RoleBinding
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof RoleBinding
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof RoleBinding
   */
  metadata: Metadata
}
