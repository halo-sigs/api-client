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
import { User } from '../models'
// @ts-ignore
import { UserList } from '../models'
/**
 * V1alpha1UserApi - axios parameter creator
 * @export
 */
export const V1alpha1UserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Create v1alpha1/User
     * @param {User} [user] Fresh user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1User: async (user?: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/users`
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
      localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Delete v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1User: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('deletev1alpha1User', 'name', name)
      const localVarPath = `/api/v1alpha1/users/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
     * Get v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1User: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getv1alpha1User', 'name', name)
      const localVarPath = `/api/v1alpha1/users/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
     * List v1alpha1/User
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1User: async (
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/users`
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
     * Update v1alpha1/User
     * @param {string} name Name of user
     * @param {User} [user] Updated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1User: async (name: string, user?: User, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updatev1alpha1User', 'name', name)
      const localVarPath = `/api/v1alpha1/users/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * V1alpha1UserApi - functional programming interface
 * @export
 */
export const V1alpha1UserApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = V1alpha1UserApiAxiosParamCreator(configuration)
  return {
    /**
     * Create v1alpha1/User
     * @param {User} [user] Fresh user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createv1alpha1User(
      user?: User,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createv1alpha1User(user, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Delete v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletev1alpha1User(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deletev1alpha1User(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Get v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getv1alpha1User(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getv1alpha1User(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List v1alpha1/User
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listv1alpha1User(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listv1alpha1User(
        page,
        size,
        labelSelector,
        fieldSelector,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update v1alpha1/User
     * @param {string} name Name of user
     * @param {User} [user] Updated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatev1alpha1User(
      name: string,
      user?: User,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updatev1alpha1User(name, user, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * V1alpha1UserApi - factory interface
 * @export
 */
export const V1alpha1UserApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = V1alpha1UserApiFp(configuration)
  return {
    /**
     * Create v1alpha1/User
     * @param {User} [user] Fresh user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1User(user?: User, options?: any): AxiosPromise<User> {
      return localVarFp.createv1alpha1User(user, options).then((request) => request(axios, basePath))
    },
    /**
     * Delete v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1User(name: string, options?: any): AxiosPromise<void> {
      return localVarFp.deletev1alpha1User(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Get v1alpha1/User
     * @param {string} name Name of user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1User(name: string, options?: any): AxiosPromise<User> {
      return localVarFp.getv1alpha1User(name, options).then((request) => request(axios, basePath))
    },
    /**
     * List v1alpha1/User
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1User(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: any,
    ): AxiosPromise<UserList> {
      return localVarFp
        .listv1alpha1User(page, size, labelSelector, fieldSelector, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Update v1alpha1/User
     * @param {string} name Name of user
     * @param {User} [user] Updated user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1User(name: string, user?: User, options?: any): AxiosPromise<User> {
      return localVarFp.updatev1alpha1User(name, user, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for createv1alpha1User operation in V1alpha1UserApi.
 * @export
 * @interface V1alpha1UserApiCreatev1alpha1UserRequest
 */
export interface V1alpha1UserApiCreatev1alpha1UserRequest {
  /**
   * Fresh user
   * @type {User}
   * @memberof V1alpha1UserApiCreatev1alpha1User
   */
  readonly user?: User
}

/**
 * Request parameters for deletev1alpha1User operation in V1alpha1UserApi.
 * @export
 * @interface V1alpha1UserApiDeletev1alpha1UserRequest
 */
export interface V1alpha1UserApiDeletev1alpha1UserRequest {
  /**
   * Name of user
   * @type {string}
   * @memberof V1alpha1UserApiDeletev1alpha1User
   */
  readonly name: string
}

/**
 * Request parameters for getv1alpha1User operation in V1alpha1UserApi.
 * @export
 * @interface V1alpha1UserApiGetv1alpha1UserRequest
 */
export interface V1alpha1UserApiGetv1alpha1UserRequest {
  /**
   * Name of user
   * @type {string}
   * @memberof V1alpha1UserApiGetv1alpha1User
   */
  readonly name: string
}

/**
 * Request parameters for listv1alpha1User operation in V1alpha1UserApi.
 * @export
 * @interface V1alpha1UserApiListv1alpha1UserRequest
 */
export interface V1alpha1UserApiListv1alpha1UserRequest {
  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof V1alpha1UserApiListv1alpha1User
   */
  readonly page?: number

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof V1alpha1UserApiListv1alpha1User
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1UserApiListv1alpha1User
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1UserApiListv1alpha1User
   */
  readonly fieldSelector?: Array<string>
}

/**
 * Request parameters for updatev1alpha1User operation in V1alpha1UserApi.
 * @export
 * @interface V1alpha1UserApiUpdatev1alpha1UserRequest
 */
export interface V1alpha1UserApiUpdatev1alpha1UserRequest {
  /**
   * Name of user
   * @type {string}
   * @memberof V1alpha1UserApiUpdatev1alpha1User
   */
  readonly name: string

  /**
   * Updated user
   * @type {User}
   * @memberof V1alpha1UserApiUpdatev1alpha1User
   */
  readonly user?: User
}

/**
 * V1alpha1UserApi - object-oriented interface
 * @export
 * @class V1alpha1UserApi
 * @extends {BaseAPI}
 */
export class V1alpha1UserApi extends BaseAPI {
  /**
   * Create v1alpha1/User
   * @param {V1alpha1UserApiCreatev1alpha1UserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1UserApi
   */
  public createv1alpha1User(
    requestParameters: V1alpha1UserApiCreatev1alpha1UserRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1UserApiFp(this.configuration)
      .createv1alpha1User(requestParameters.user, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Delete v1alpha1/User
   * @param {V1alpha1UserApiDeletev1alpha1UserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1UserApi
   */
  public deletev1alpha1User(requestParameters: V1alpha1UserApiDeletev1alpha1UserRequest, options?: AxiosRequestConfig) {
    return V1alpha1UserApiFp(this.configuration)
      .deletev1alpha1User(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get v1alpha1/User
   * @param {V1alpha1UserApiGetv1alpha1UserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1UserApi
   */
  public getv1alpha1User(requestParameters: V1alpha1UserApiGetv1alpha1UserRequest, options?: AxiosRequestConfig) {
    return V1alpha1UserApiFp(this.configuration)
      .getv1alpha1User(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List v1alpha1/User
   * @param {V1alpha1UserApiListv1alpha1UserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1UserApi
   */
  public listv1alpha1User(
    requestParameters: V1alpha1UserApiListv1alpha1UserRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1UserApiFp(this.configuration)
      .listv1alpha1User(
        requestParameters.page,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update v1alpha1/User
   * @param {V1alpha1UserApiUpdatev1alpha1UserRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1UserApi
   */
  public updatev1alpha1User(requestParameters: V1alpha1UserApiUpdatev1alpha1UserRequest, options?: AxiosRequestConfig) {
    return V1alpha1UserApiFp(this.configuration)
      .updatev1alpha1User(requestParameters.name, requestParameters.user, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
