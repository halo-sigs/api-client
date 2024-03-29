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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios'
import { Configuration } from '../configuration'
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common'
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base'
// @ts-ignore
import { PostHits } from '../models'
/**
 * ApiHaloRunV1alpha1PostApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1PostApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Search posts with fuzzy query
     * @param {string} keyword
     * @param {string} [highlightPreTag]
     * @param {string} [highlightPostTag]
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchPost: async (
      keyword: string,
      highlightPreTag?: string,
      highlightPostTag?: string,
      limit?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'keyword' is not null or undefined
      assertParamExists('searchPost', 'keyword', keyword)
      const localVarPath = `/apis/api.halo.run/v1alpha1/indices/post`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (highlightPreTag !== undefined) {
        localVarQueryParameter['highlightPreTag'] = highlightPreTag
      }

      if (highlightPostTag !== undefined) {
        localVarQueryParameter['highlightPostTag'] = highlightPostTag
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (keyword !== undefined) {
        localVarQueryParameter['keyword'] = keyword
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ApiHaloRunV1alpha1PostApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1PostApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiHaloRunV1alpha1PostApiAxiosParamCreator(configuration)
  return {
    /**
     * Search posts with fuzzy query
     * @param {string} keyword
     * @param {string} [highlightPreTag]
     * @param {string} [highlightPostTag]
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchPost(
      keyword: string,
      highlightPreTag?: string,
      highlightPostTag?: string,
      limit?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostHits>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.searchPost(
        keyword,
        highlightPreTag,
        highlightPostTag,
        limit,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiHaloRunV1alpha1PostApi - factory interface
 * @export
 */
export const ApiHaloRunV1alpha1PostApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiHaloRunV1alpha1PostApiFp(configuration)
  return {
    /**
     * Search posts with fuzzy query
     * @param {string} keyword
     * @param {string} [highlightPreTag]
     * @param {string} [highlightPostTag]
     * @param {number} [limit]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchPost(
      keyword: string,
      highlightPreTag?: string,
      highlightPostTag?: string,
      limit?: number,
      options?: any,
    ): AxiosPromise<PostHits> {
      return localVarFp
        .searchPost(keyword, highlightPreTag, highlightPostTag, limit, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for searchPost operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiSearchPostRequest
 */
export interface ApiHaloRunV1alpha1PostApiSearchPostRequest {
  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiSearchPost
   */
  readonly keyword: string

  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiSearchPost
   */
  readonly highlightPreTag?: string

  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiSearchPost
   */
  readonly highlightPostTag?: string

  /**
   *
   * @type {number}
   * @memberof ApiHaloRunV1alpha1PostApiSearchPost
   */
  readonly limit?: number
}

/**
 * ApiHaloRunV1alpha1PostApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1PostApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1PostApi extends BaseAPI {
  /**
   * Search posts with fuzzy query
   * @param {ApiHaloRunV1alpha1PostApiSearchPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public searchPost(requestParameters: ApiHaloRunV1alpha1PostApiSearchPostRequest, options?: AxiosRequestConfig) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .searchPost(
        requestParameters.keyword,
        requestParameters.highlightPreTag,
        requestParameters.highlightPostTag,
        requestParameters.limit,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
