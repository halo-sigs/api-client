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
import { ListedSinglePageList } from '../models'
// @ts-ignore
import { SinglePage } from '../models'
// @ts-ignore
import { SinglePageRequest } from '../models'
/**
 * ApiConsoleHaloRunV1alpha1SinglePageApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SinglePageApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Draft a single page.
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftSinglePage: async (
      singlePageRequest: SinglePageRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'singlePageRequest' is not null or undefined
      assertParamExists('draftSinglePage', 'singlePageRequest', singlePageRequest)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/singlepages`
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
      localVarRequestOptions.data = serializeDataIfNeeded(singlePageRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List single pages.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] SinglePage collation.
     * @param {string} [keyword] SinglePages filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [contributor]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages: async (
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      sortOrder?: boolean,
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      contributor?: Array<string>,
      size?: number,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/singlepages`
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

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (keyword !== undefined) {
        localVarQueryParameter['keyword'] = keyword
      }

      if (visible !== undefined) {
        localVarQueryParameter['visible'] = visible
      }

      if (sortOrder !== undefined) {
        localVarQueryParameter['sortOrder'] = sortOrder
      }

      if (publishPhase !== undefined) {
        localVarQueryParameter['publishPhase'] = publishPhase
      }

      if (contributor) {
        localVarQueryParameter['contributor'] = Array.from(contributor)
      }

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
      }

      if (page !== undefined) {
        localVarQueryParameter['page'] = page
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
     * Publish a single page.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('publishSinglePage', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/singlepages/{name}/publish`.replace(
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

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Update a single page.
     * @param {string} name
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftSinglePage: async (
      name: string,
      singlePageRequest: SinglePageRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updateDraftSinglePage', 'name', name)
      // verify required parameter 'singlePageRequest' is not null or undefined
      assertParamExists('updateDraftSinglePage', 'singlePageRequest', singlePageRequest)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/singlepages/{name}`.replace(
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
      localVarRequestOptions.data = serializeDataIfNeeded(singlePageRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1SinglePageApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SinglePageApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1SinglePageApiAxiosParamCreator(configuration)
  return {
    /**
     * Draft a single page.
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async draftSinglePage(
      singlePageRequest: SinglePageRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.draftSinglePage(singlePageRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List single pages.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] SinglePage collation.
     * @param {string} [keyword] SinglePages filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [contributor]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSinglePages(
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      sortOrder?: boolean,
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      contributor?: Array<string>,
      size?: number,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedSinglePageList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listSinglePages(
        sort,
        keyword,
        visible,
        sortOrder,
        publishPhase,
        contributor,
        size,
        page,
        labelSelector,
        fieldSelector,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Publish a single page.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishSinglePage(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.publishSinglePage(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update a single page.
     * @param {string} name
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDraftSinglePage(
      name: string,
      singlePageRequest: SinglePageRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SinglePage>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDraftSinglePage(name, singlePageRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1SinglePageApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1SinglePageApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1SinglePageApiFp(configuration)
  return {
    /**
     * Draft a single page.
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftSinglePage(singlePageRequest: SinglePageRequest, options?: any): AxiosPromise<SinglePage> {
      return localVarFp.draftSinglePage(singlePageRequest, options).then((request) => request(axios, basePath))
    },
    /**
     * List single pages.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] SinglePage collation.
     * @param {string} [keyword] SinglePages filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [contributor]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages(
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      sortOrder?: boolean,
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      contributor?: Array<string>,
      size?: number,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: any,
    ): AxiosPromise<ListedSinglePageList> {
      return localVarFp
        .listSinglePages(
          sort,
          keyword,
          visible,
          sortOrder,
          publishPhase,
          contributor,
          size,
          page,
          labelSelector,
          fieldSelector,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Publish a single page.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage(name: string, options?: any): AxiosPromise<SinglePage> {
      return localVarFp.publishSinglePage(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Update a single page.
     * @param {string} name
     * @param {SinglePageRequest} singlePageRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftSinglePage(name: string, singlePageRequest: SinglePageRequest, options?: any): AxiosPromise<SinglePage> {
      return localVarFp
        .updateDraftSinglePage(name, singlePageRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for draftSinglePage operation in ApiConsoleHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1SinglePageApiDraftSinglePageRequest
 */
export interface ApiConsoleHaloRunV1alpha1SinglePageApiDraftSinglePageRequest {
  /**
   *
   * @type {SinglePageRequest}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiDraftSinglePage
   */
  readonly singlePageRequest: SinglePageRequest
}

/**
 * Request parameters for listSinglePages operation in ApiConsoleHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePagesRequest
 */
export interface ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePagesRequest {
  /**
   * SinglePage collation.
   * @type {'PUBLISH_TIME' | 'CREATE_TIME'}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly sort?: 'PUBLISH_TIME' | 'CREATE_TIME'

  /**
   * SinglePages filtered by keyword.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly keyword?: string

  /**
   *
   * @type {'PUBLIC' | 'INTERNAL' | 'PRIVATE'}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE'

  /**
   * ascending order If it is true; otherwise, it is in descending order.
   * @type {boolean}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly sortOrder?: boolean

  /**
   *
   * @type {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'

  /**
   *
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly contributor?: Array<string>

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly size?: number

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly page?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePages
   */
  readonly fieldSelector?: Array<string>
}

/**
 * Request parameters for publishSinglePage operation in ApiConsoleHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1SinglePageApiPublishSinglePageRequest
 */
export interface ApiConsoleHaloRunV1alpha1SinglePageApiPublishSinglePageRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiPublishSinglePage
   */
  readonly name: string
}

/**
 * Request parameters for updateDraftSinglePage operation in ApiConsoleHaloRunV1alpha1SinglePageApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePageRequest
 */
export interface ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePageRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePage
   */
  readonly name: string

  /**
   *
   * @type {SinglePageRequest}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePage
   */
  readonly singlePageRequest: SinglePageRequest
}

/**
 * ApiConsoleHaloRunV1alpha1SinglePageApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1SinglePageApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1SinglePageApi extends BaseAPI {
  /**
   * Draft a single page.
   * @param {ApiConsoleHaloRunV1alpha1SinglePageApiDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApi
   */
  public draftSinglePage(
    requestParameters: ApiConsoleHaloRunV1alpha1SinglePageApiDraftSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1SinglePageApiFp(this.configuration)
      .draftSinglePage(requestParameters.singlePageRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List single pages.
   * @param {ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePagesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApi
   */
  public listSinglePages(
    requestParameters: ApiConsoleHaloRunV1alpha1SinglePageApiListSinglePagesRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1SinglePageApiFp(this.configuration)
      .listSinglePages(
        requestParameters.sort,
        requestParameters.keyword,
        requestParameters.visible,
        requestParameters.sortOrder,
        requestParameters.publishPhase,
        requestParameters.contributor,
        requestParameters.size,
        requestParameters.page,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Publish a single page.
   * @param {ApiConsoleHaloRunV1alpha1SinglePageApiPublishSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApi
   */
  public publishSinglePage(
    requestParameters: ApiConsoleHaloRunV1alpha1SinglePageApiPublishSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1SinglePageApiFp(this.configuration)
      .publishSinglePage(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update a single page.
   * @param {ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1SinglePageApi
   */
  public updateDraftSinglePage(
    requestParameters: ApiConsoleHaloRunV1alpha1SinglePageApiUpdateDraftSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1SinglePageApiFp(this.configuration)
      .updateDraftSinglePage(requestParameters.name, requestParameters.singlePageRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
