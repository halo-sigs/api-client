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

import { Contributor } from './contributor'
import { SinglePage } from './single-page'

/**
 * A chunk of items.
 * @export
 * @interface ListedSinglePage
 */
export interface ListedSinglePage {
  /**
   *
   * @type {SinglePage}
   * @memberof ListedSinglePage
   */
  page: SinglePage
  /**
   *
   * @type {Array<Contributor>}
   * @memberof ListedSinglePage
   */
  contributors: Array<Contributor>
}
