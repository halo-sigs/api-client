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
import { PostSpec } from './post-spec'
import { PostStatus } from './post-status'

/**
 *
 * @export
 * @interface Post
 */
export interface Post {
  /**
   *
   * @type {PostSpec}
   * @memberof Post
   */
  spec: PostSpec
  /**
   *
   * @type {PostStatus}
   * @memberof Post
   */
  status?: PostStatus
  /**
   *
   * @type {string}
   * @memberof Post
   */
  apiVersion: string
  /**
   *
   * @type {string}
   * @memberof Post
   */
  kind: string
  /**
   *
   * @type {Metadata}
   * @memberof Post
   */
  metadata: Metadata
}