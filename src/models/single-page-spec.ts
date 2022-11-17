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

import { Excerpt } from './excerpt'

/**
 *
 * @export
 * @interface SinglePageSpec
 */
export interface SinglePageSpec {
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  title: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  slug: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  releaseSnapshot?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  headSnapshot?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  baseSnapshot?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  owner?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  template?: string
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  cover?: string
  /**
   *
   * @type {boolean}
   * @memberof SinglePageSpec
   */
  deleted: boolean
  /**
   *
   * @type {boolean}
   * @memberof SinglePageSpec
   */
  publish: boolean
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  publishTime?: string
  /**
   *
   * @type {boolean}
   * @memberof SinglePageSpec
   */
  pinned: boolean
  /**
   *
   * @type {boolean}
   * @memberof SinglePageSpec
   */
  allowComment: boolean
  /**
   *
   * @type {string}
   * @memberof SinglePageSpec
   */
  visible: SinglePageSpecVisibleEnum
  /**
   *
   * @type {number}
   * @memberof SinglePageSpec
   */
  priority: number
  /**
   *
   * @type {Excerpt}
   * @memberof SinglePageSpec
   */
  excerpt: Excerpt
  /**
   *
   * @type {Array<{ [key: string]: string; }>}
   * @memberof SinglePageSpec
   */
  htmlMetas?: Array<{ [key: string]: string }>
}

export const SinglePageSpecVisibleEnum = {
  Public: 'PUBLIC',
  Internal: 'INTERNAL',
  Private: 'PRIVATE',
} as const

export type SinglePageSpecVisibleEnum = typeof SinglePageSpecVisibleEnum[keyof typeof SinglePageSpecVisibleEnum]
