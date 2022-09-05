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
import { Setting } from '../models'
// @ts-ignore
import { SettingList } from '../models'
/**
 * V1alpha1SettingApi - axios parameter creator
 * @export
 */
export const V1alpha1SettingApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Create v1alpha1/Setting
     * @param {Setting} [setting] Fresh setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1Setting: async (setting?: Setting, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/settings`
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
      localVarRequestOptions.data = serializeDataIfNeeded(setting, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Delete v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1Setting: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('deletev1alpha1Setting', 'name', name)
      const localVarPath = `/api/v1alpha1/settings/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
     * Get v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1Setting: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getv1alpha1Setting', 'name', name)
      const localVarPath = `/api/v1alpha1/settings/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
     * List v1alpha1/Setting
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1Setting: async (
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/settings`
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
     * Update v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {Setting} [setting] Updated setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1Setting: async (
      name: string,
      setting?: Setting,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updatev1alpha1Setting', 'name', name)
      const localVarPath = `/api/v1alpha1/settings/{name}`.replace(`{${'name'}}`, encodeURIComponent(String(name)))
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
      localVarRequestOptions.data = serializeDataIfNeeded(setting, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * V1alpha1SettingApi - functional programming interface
 * @export
 */
export const V1alpha1SettingApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = V1alpha1SettingApiAxiosParamCreator(configuration)
  return {
    /**
     * Create v1alpha1/Setting
     * @param {Setting} [setting] Fresh setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createv1alpha1Setting(
      setting?: Setting,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Setting>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createv1alpha1Setting(setting, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Delete v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletev1alpha1Setting(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deletev1alpha1Setting(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Get v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getv1alpha1Setting(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Setting>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getv1alpha1Setting(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List v1alpha1/Setting
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listv1alpha1Setting(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SettingList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listv1alpha1Setting(
        page,
        size,
        labelSelector,
        fieldSelector,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {Setting} [setting] Updated setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatev1alpha1Setting(
      name: string,
      setting?: Setting,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Setting>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updatev1alpha1Setting(name, setting, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * V1alpha1SettingApi - factory interface
 * @export
 */
export const V1alpha1SettingApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = V1alpha1SettingApiFp(configuration)
  return {
    /**
     * Create v1alpha1/Setting
     * @param {Setting} [setting] Fresh setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1Setting(setting?: Setting, options?: any): AxiosPromise<Setting> {
      return localVarFp.createv1alpha1Setting(setting, options).then((request) => request(axios, basePath))
    },
    /**
     * Delete v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1Setting(name: string, options?: any): AxiosPromise<void> {
      return localVarFp.deletev1alpha1Setting(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Get v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1Setting(name: string, options?: any): AxiosPromise<Setting> {
      return localVarFp.getv1alpha1Setting(name, options).then((request) => request(axios, basePath))
    },
    /**
     * List v1alpha1/Setting
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1Setting(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: any,
    ): AxiosPromise<SettingList> {
      return localVarFp
        .listv1alpha1Setting(page, size, labelSelector, fieldSelector, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Update v1alpha1/Setting
     * @param {string} name Name of setting
     * @param {Setting} [setting] Updated setting
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1Setting(name: string, setting?: Setting, options?: any): AxiosPromise<Setting> {
      return localVarFp.updatev1alpha1Setting(name, setting, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for createv1alpha1Setting operation in V1alpha1SettingApi.
 * @export
 * @interface V1alpha1SettingApiCreatev1alpha1SettingRequest
 */
export interface V1alpha1SettingApiCreatev1alpha1SettingRequest {
  /**
   * Fresh setting
   * @type {Setting}
   * @memberof V1alpha1SettingApiCreatev1alpha1Setting
   */
  readonly setting?: Setting
}

/**
 * Request parameters for deletev1alpha1Setting operation in V1alpha1SettingApi.
 * @export
 * @interface V1alpha1SettingApiDeletev1alpha1SettingRequest
 */
export interface V1alpha1SettingApiDeletev1alpha1SettingRequest {
  /**
   * Name of setting
   * @type {string}
   * @memberof V1alpha1SettingApiDeletev1alpha1Setting
   */
  readonly name: string
}

/**
 * Request parameters for getv1alpha1Setting operation in V1alpha1SettingApi.
 * @export
 * @interface V1alpha1SettingApiGetv1alpha1SettingRequest
 */
export interface V1alpha1SettingApiGetv1alpha1SettingRequest {
  /**
   * Name of setting
   * @type {string}
   * @memberof V1alpha1SettingApiGetv1alpha1Setting
   */
  readonly name: string
}

/**
 * Request parameters for listv1alpha1Setting operation in V1alpha1SettingApi.
 * @export
 * @interface V1alpha1SettingApiListv1alpha1SettingRequest
 */
export interface V1alpha1SettingApiListv1alpha1SettingRequest {
  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof V1alpha1SettingApiListv1alpha1Setting
   */
  readonly page?: number

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof V1alpha1SettingApiListv1alpha1Setting
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1SettingApiListv1alpha1Setting
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1SettingApiListv1alpha1Setting
   */
  readonly fieldSelector?: Array<string>
}

/**
 * Request parameters for updatev1alpha1Setting operation in V1alpha1SettingApi.
 * @export
 * @interface V1alpha1SettingApiUpdatev1alpha1SettingRequest
 */
export interface V1alpha1SettingApiUpdatev1alpha1SettingRequest {
  /**
   * Name of setting
   * @type {string}
   * @memberof V1alpha1SettingApiUpdatev1alpha1Setting
   */
  readonly name: string

  /**
   * Updated setting
   * @type {Setting}
   * @memberof V1alpha1SettingApiUpdatev1alpha1Setting
   */
  readonly setting?: Setting
}

/**
 * V1alpha1SettingApi - object-oriented interface
 * @export
 * @class V1alpha1SettingApi
 * @extends {BaseAPI}
 */
export class V1alpha1SettingApi extends BaseAPI {
  /**
   * Create v1alpha1/Setting
   * @param {V1alpha1SettingApiCreatev1alpha1SettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SettingApi
   */
  public createv1alpha1Setting(
    requestParameters: V1alpha1SettingApiCreatev1alpha1SettingRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1SettingApiFp(this.configuration)
      .createv1alpha1Setting(requestParameters.setting, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Delete v1alpha1/Setting
   * @param {V1alpha1SettingApiDeletev1alpha1SettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SettingApi
   */
  public deletev1alpha1Setting(
    requestParameters: V1alpha1SettingApiDeletev1alpha1SettingRequest,
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1SettingApiFp(this.configuration)
      .deletev1alpha1Setting(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get v1alpha1/Setting
   * @param {V1alpha1SettingApiGetv1alpha1SettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SettingApi
   */
  public getv1alpha1Setting(
    requestParameters: V1alpha1SettingApiGetv1alpha1SettingRequest,
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1SettingApiFp(this.configuration)
      .getv1alpha1Setting(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List v1alpha1/Setting
   * @param {V1alpha1SettingApiListv1alpha1SettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SettingApi
   */
  public listv1alpha1Setting(
    requestParameters: V1alpha1SettingApiListv1alpha1SettingRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1SettingApiFp(this.configuration)
      .listv1alpha1Setting(
        requestParameters.page,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update v1alpha1/Setting
   * @param {V1alpha1SettingApiUpdatev1alpha1SettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1SettingApi
   */
  public updatev1alpha1Setting(
    requestParameters: V1alpha1SettingApiUpdatev1alpha1SettingRequest,
    options?: AxiosRequestConfig,
  ) {
    return V1alpha1SettingApiFp(this.configuration)
      .updatev1alpha1Setting(requestParameters.name, requestParameters.setting, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
