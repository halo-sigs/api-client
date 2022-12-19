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
import { ListedReplyList } from '../models'
/**
 * ApiConsoleHaloRunV1alpha1ReplyApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ReplyApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * List replies.
     * @param {string} [commentName] Replies filtered by commentName.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReplies: async (
      commentName?: string,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/replies`
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

      if (commentName !== undefined) {
        localVarQueryParameter['commentName'] = commentName
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (labelSelector) {
        localVarQueryParameter['labelSelector'] = labelSelector
      }

      if (fieldSelector) {
        localVarQueryParameter['fieldSelector'] = fieldSelector
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
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
 * ApiConsoleHaloRunV1alpha1ReplyApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ReplyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1ReplyApiAxiosParamCreator(configuration)
  return {
    /**
     * List replies.
     * @param {string} [commentName] Replies filtered by commentName.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listReplies(
      commentName?: string,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedReplyList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listReplies(
        commentName,
        size,
        labelSelector,
        fieldSelector,
        page,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1ReplyApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ReplyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1ReplyApiFp(configuration)
  return {
    /**
     * List replies.
     * @param {string} [commentName] Replies filtered by commentName.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listReplies(
      commentName?: string,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: any,
    ): AxiosPromise<ListedReplyList> {
      return localVarFp
        .listReplies(commentName, size, labelSelector, fieldSelector, page, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for listReplies operation in ApiConsoleHaloRunV1alpha1ReplyApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ReplyApiListRepliesRequest
 */
export interface ApiConsoleHaloRunV1alpha1ReplyApiListRepliesRequest {
  /**
   * Replies filtered by commentName.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApiListReplies
   */
  readonly commentName?: string

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApiListReplies
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApiListReplies
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApiListReplies
   */
  readonly fieldSelector?: Array<string>

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApiListReplies
   */
  readonly page?: number
}

/**
 * ApiConsoleHaloRunV1alpha1ReplyApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1ReplyApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1ReplyApi extends BaseAPI {
  /**
   * List replies.
   * @param {ApiConsoleHaloRunV1alpha1ReplyApiListRepliesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ReplyApi
   */
  public listReplies(
    requestParameters: ApiConsoleHaloRunV1alpha1ReplyApiListRepliesRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ReplyApiFp(this.configuration)
      .listReplies(
        requestParameters.commentName,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }
}
