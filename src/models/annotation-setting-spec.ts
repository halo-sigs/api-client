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

import { GroupKind } from './group-kind'

/**
 *
 * @export
 * @interface AnnotationSettingSpec
 */
export interface AnnotationSettingSpec {
  /**
   *
   * @type {GroupKind}
   * @memberof AnnotationSettingSpec
   */
  targetRef?: GroupKind
  /**
   *
   * @type {Array<object>}
   * @memberof AnnotationSettingSpec
   */
  formSchema?: Array<object>
}
