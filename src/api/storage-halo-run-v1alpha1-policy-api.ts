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
import { Policy } from '../models'
// @ts-ignore
import { PolicyList } from '../models'
/**
 * StorageHaloRunV1alpha1PolicyApi - axios parameter creator
 * @export
 */
export const StorageHaloRunV1alpha1PolicyApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Create storage.halo.run/v1alpha1/Policy
     * @param {Policy} [policy] Fresh policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Policy: async (
      policy?: Policy,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/policies`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(policy, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Delete storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Policy: async (
      name: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('deletestorageHaloRunV1alpha1Policy', 'name', name)
      const localVarPath = `/apis/storage.halo.run/v1alpha1/policies/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Policy: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getstorageHaloRunV1alpha1Policy', 'name', name)
      const localVarPath = `/apis/storage.halo.run/v1alpha1/policies/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name)),
      )
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

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List storage.halo.run/v1alpha1/Policy
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Policy: async (
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/storage.halo.run/v1alpha1/policies`
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

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
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

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Update storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {Policy} [policy] Updated policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Policy: async (
      name: string,
      policy?: Policy,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updatestorageHaloRunV1alpha1Policy', 'name', name)
      const localVarPath = `/apis/storage.halo.run/v1alpha1/policies/{name}`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name)),
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = serializeDataIfNeeded(policy, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * StorageHaloRunV1alpha1PolicyApi - functional programming interface
 * @export
 */
export const StorageHaloRunV1alpha1PolicyApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = StorageHaloRunV1alpha1PolicyApiAxiosParamCreator(configuration)
  return {
    /**
     * Create storage.halo.run/v1alpha1/Policy
     * @param {Policy} [policy] Fresh policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createstorageHaloRunV1alpha1Policy(
      policy?: Policy,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Policy>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createstorageHaloRunV1alpha1Policy(policy, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Delete storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletestorageHaloRunV1alpha1Policy(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deletestorageHaloRunV1alpha1Policy(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Get storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getstorageHaloRunV1alpha1Policy(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Policy>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getstorageHaloRunV1alpha1Policy(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List storage.halo.run/v1alpha1/Policy
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async liststorageHaloRunV1alpha1Policy(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicyList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.liststorageHaloRunV1alpha1Policy(
        page,
        size,
        labelSelector,
        fieldSelector,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {Policy} [policy] Updated policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatestorageHaloRunV1alpha1Policy(
      name: string,
      policy?: Policy,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Policy>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updatestorageHaloRunV1alpha1Policy(
        name,
        policy,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * StorageHaloRunV1alpha1PolicyApi - factory interface
 * @export
 */
export const StorageHaloRunV1alpha1PolicyApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = StorageHaloRunV1alpha1PolicyApiFp(configuration)
  return {
    /**
     * Create storage.halo.run/v1alpha1/Policy
     * @param {Policy} [policy] Fresh policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createstorageHaloRunV1alpha1Policy(policy?: Policy, options?: any): AxiosPromise<Policy> {
      return localVarFp.createstorageHaloRunV1alpha1Policy(policy, options).then((request) => request(axios, basePath))
    },
    /**
     * Delete storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletestorageHaloRunV1alpha1Policy(name: string, options?: any): AxiosPromise<void> {
      return localVarFp.deletestorageHaloRunV1alpha1Policy(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Get storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getstorageHaloRunV1alpha1Policy(name: string, options?: any): AxiosPromise<Policy> {
      return localVarFp.getstorageHaloRunV1alpha1Policy(name, options).then((request) => request(axios, basePath))
    },
    /**
     * List storage.halo.run/v1alpha1/Policy
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    liststorageHaloRunV1alpha1Policy(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: any,
    ): AxiosPromise<PolicyList> {
      return localVarFp
        .liststorageHaloRunV1alpha1Policy(page, size, labelSelector, fieldSelector, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Update storage.halo.run/v1alpha1/Policy
     * @param {string} name Name of policy
     * @param {Policy} [policy] Updated policy
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatestorageHaloRunV1alpha1Policy(name: string, policy?: Policy, options?: any): AxiosPromise<Policy> {
      return localVarFp
        .updatestorageHaloRunV1alpha1Policy(name, policy, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for createstorageHaloRunV1alpha1Policy operation in StorageHaloRunV1alpha1PolicyApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyApiCreatestorageHaloRunV1alpha1PolicyRequest
 */
export interface StorageHaloRunV1alpha1PolicyApiCreatestorageHaloRunV1alpha1PolicyRequest {
  /**
   * Fresh policy
   * @type {Policy}
   * @memberof StorageHaloRunV1alpha1PolicyApiCreatestorageHaloRunV1alpha1Policy
   */
  readonly policy?: Policy
}

/**
 * Request parameters for deletestorageHaloRunV1alpha1Policy operation in StorageHaloRunV1alpha1PolicyApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyApiDeletestorageHaloRunV1alpha1PolicyRequest
 */
export interface StorageHaloRunV1alpha1PolicyApiDeletestorageHaloRunV1alpha1PolicyRequest {
  /**
   * Name of policy
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyApiDeletestorageHaloRunV1alpha1Policy
   */
  readonly name: string
}

/**
 * Request parameters for getstorageHaloRunV1alpha1Policy operation in StorageHaloRunV1alpha1PolicyApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyApiGetstorageHaloRunV1alpha1PolicyRequest
 */
export interface StorageHaloRunV1alpha1PolicyApiGetstorageHaloRunV1alpha1PolicyRequest {
  /**
   * Name of policy
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyApiGetstorageHaloRunV1alpha1Policy
   */
  readonly name: string
}

/**
 * Request parameters for liststorageHaloRunV1alpha1Policy operation in StorageHaloRunV1alpha1PolicyApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1PolicyRequest
 */
export interface StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1PolicyRequest {
  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1Policy
   */
  readonly page?: number

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1Policy
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1Policy
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1Policy
   */
  readonly fieldSelector?: Array<string>
}

/**
 * Request parameters for updatestorageHaloRunV1alpha1Policy operation in StorageHaloRunV1alpha1PolicyApi.
 * @export
 * @interface StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1PolicyRequest
 */
export interface StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1PolicyRequest {
  /**
   * Name of policy
   * @type {string}
   * @memberof StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1Policy
   */
  readonly name: string

  /**
   * Updated policy
   * @type {Policy}
   * @memberof StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1Policy
   */
  readonly policy?: Policy
}

/**
 * StorageHaloRunV1alpha1PolicyApi - object-oriented interface
 * @export
 * @class StorageHaloRunV1alpha1PolicyApi
 * @extends {BaseAPI}
 */
export class StorageHaloRunV1alpha1PolicyApi extends BaseAPI {
  /**
   * Create storage.halo.run/v1alpha1/Policy
   * @param {StorageHaloRunV1alpha1PolicyApiCreatestorageHaloRunV1alpha1PolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyApi
   */
  public createstorageHaloRunV1alpha1Policy(
    requestParameters: StorageHaloRunV1alpha1PolicyApiCreatestorageHaloRunV1alpha1PolicyRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return StorageHaloRunV1alpha1PolicyApiFp(this.configuration)
      .createstorageHaloRunV1alpha1Policy(requestParameters.policy, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Delete storage.halo.run/v1alpha1/Policy
   * @param {StorageHaloRunV1alpha1PolicyApiDeletestorageHaloRunV1alpha1PolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyApi
   */
  public deletestorageHaloRunV1alpha1Policy(
    requestParameters: StorageHaloRunV1alpha1PolicyApiDeletestorageHaloRunV1alpha1PolicyRequest,
    options?: AxiosRequestConfig,
  ) {
    return StorageHaloRunV1alpha1PolicyApiFp(this.configuration)
      .deletestorageHaloRunV1alpha1Policy(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get storage.halo.run/v1alpha1/Policy
   * @param {StorageHaloRunV1alpha1PolicyApiGetstorageHaloRunV1alpha1PolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyApi
   */
  public getstorageHaloRunV1alpha1Policy(
    requestParameters: StorageHaloRunV1alpha1PolicyApiGetstorageHaloRunV1alpha1PolicyRequest,
    options?: AxiosRequestConfig,
  ) {
    return StorageHaloRunV1alpha1PolicyApiFp(this.configuration)
      .getstorageHaloRunV1alpha1Policy(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List storage.halo.run/v1alpha1/Policy
   * @param {StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1PolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyApi
   */
  public liststorageHaloRunV1alpha1Policy(
    requestParameters: StorageHaloRunV1alpha1PolicyApiListstorageHaloRunV1alpha1PolicyRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return StorageHaloRunV1alpha1PolicyApiFp(this.configuration)
      .liststorageHaloRunV1alpha1Policy(
        requestParameters.page,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update storage.halo.run/v1alpha1/Policy
   * @param {StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1PolicyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StorageHaloRunV1alpha1PolicyApi
   */
  public updatestorageHaloRunV1alpha1Policy(
    requestParameters: StorageHaloRunV1alpha1PolicyApiUpdatestorageHaloRunV1alpha1PolicyRequest,
    options?: AxiosRequestConfig,
  ) {
    return StorageHaloRunV1alpha1PolicyApiFp(this.configuration)
      .updatestorageHaloRunV1alpha1Policy(requestParameters.name, requestParameters.policy, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
