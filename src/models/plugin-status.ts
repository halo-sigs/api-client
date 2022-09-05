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
 * @interface PluginStatus
 */
export interface PluginStatus {
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  phase?: PluginStatusPhaseEnum
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  reason?: string
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  message?: string
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  lastStartTime?: string
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  lastTransitionTime?: string
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  entry?: string
  /**
   *
   * @type {string}
   * @memberof PluginStatus
   */
  stylesheet?: string
}

export const PluginStatusPhaseEnum = {
  Created: 'CREATED',
  Disabled: 'DISABLED',
  Resolved: 'RESOLVED',
  Started: 'STARTED',
  Stopped: 'STOPPED',
  Failed: 'FAILED',
} as const

export type PluginStatusPhaseEnum = typeof PluginStatusPhaseEnum[keyof typeof PluginStatusPhaseEnum]