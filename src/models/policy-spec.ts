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

/**
 *
 * @export
 * @interface PolicySpec
 */
export interface PolicySpec {
  /**
   * Display name of policy
   * @type {string}
   * @memberof PolicySpec
   */
  displayName: string
  /**
   * Reference name of PolicyTemplate
   * @type {string}
   * @memberof PolicySpec
   */
  templateName: string
  /**
   * Reference name of ConfigMap extension
   * @type {string}
   * @memberof PolicySpec
   */
  configMapName?: string
}
