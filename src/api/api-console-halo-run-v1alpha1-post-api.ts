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
import { ListedPostList } from '../models'
// @ts-ignore
import { Post } from '../models'
// @ts-ignore
import { PostRequest } from '../models'
/**
 * ApiConsoleHaloRunV1alpha1PostApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1PostApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Draft a post.
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftPost: async (postRequest: PostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'postRequest' is not null or undefined
      assertParamExists('draftPost', 'postRequest', postRequest)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/posts`
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
      localVarRequestOptions.data = serializeDataIfNeeded(postRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List posts.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] Post collation.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [category]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {Array<string>} [contributor]
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {Array<string>} [tag]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts: async (
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      category?: Array<string>,
      sortOrder?: boolean,
      contributor?: Array<string>,
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      tag?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/posts`
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

      if (publishPhase !== undefined) {
        localVarQueryParameter['publishPhase'] = publishPhase
      }

      if (category) {
        localVarQueryParameter['category'] = Array.from(category)
      }

      if (sortOrder !== undefined) {
        localVarQueryParameter['sortOrder'] = sortOrder
      }

      if (contributor) {
        localVarQueryParameter['contributor'] = Array.from(contributor)
      }

      if (keyword !== undefined) {
        localVarQueryParameter['keyword'] = keyword
      }

      if (visible !== undefined) {
        localVarQueryParameter['visible'] = visible
      }

      if (tag) {
        localVarQueryParameter['tag'] = Array.from(tag)
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
    /**
     * Publish a post.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishPost: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('publishPost', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/posts/{name}/publish`.replace(
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
     * Update a post.
     * @param {string} name
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftPost: async (
      name: string,
      postRequest: PostRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updateDraftPost', 'name', name)
      // verify required parameter 'postRequest' is not null or undefined
      assertParamExists('updateDraftPost', 'postRequest', postRequest)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/posts/{name}`.replace(
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
      localVarRequestOptions.data = serializeDataIfNeeded(postRequest, localVarRequestOptions, configuration)

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1PostApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1PostApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1PostApiAxiosParamCreator(configuration)
  return {
    /**
     * Draft a post.
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async draftPost(
      postRequest: PostRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.draftPost(postRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List posts.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] Post collation.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [category]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {Array<string>} [contributor]
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {Array<string>} [tag]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPosts(
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      category?: Array<string>,
      sortOrder?: boolean,
      contributor?: Array<string>,
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      tag?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedPostList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listPosts(
        sort,
        publishPhase,
        category,
        sortOrder,
        contributor,
        keyword,
        visible,
        tag,
        size,
        labelSelector,
        fieldSelector,
        page,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Publish a post.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async publishPost(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.publishPost(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update a post.
     * @param {string} name
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDraftPost(
      name: string,
      postRequest: PostRequest,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Post>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDraftPost(name, postRequest, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1PostApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1PostApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1PostApiFp(configuration)
  return {
    /**
     * Draft a post.
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftPost(postRequest: PostRequest, options?: any): AxiosPromise<Post> {
      return localVarFp.draftPost(postRequest, options).then((request) => request(axios, basePath))
    },
    /**
     * List posts.
     * @param {'PUBLISH_TIME' | 'CREATE_TIME'} [sort] Post collation.
     * @param {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'} [publishPhase]
     * @param {Array<string>} [category]
     * @param {boolean} [sortOrder] ascending order If it is true; otherwise, it is in descending order.
     * @param {Array<string>} [contributor]
     * @param {string} [keyword] Posts filtered by keyword.
     * @param {'PUBLIC' | 'INTERNAL' | 'PRIVATE'} [visible]
     * @param {Array<string>} [tag]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts(
      sort?: 'PUBLISH_TIME' | 'CREATE_TIME',
      publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED',
      category?: Array<string>,
      sortOrder?: boolean,
      contributor?: Array<string>,
      keyword?: string,
      visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE',
      tag?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: any,
    ): AxiosPromise<ListedPostList> {
      return localVarFp
        .listPosts(
          sort,
          publishPhase,
          category,
          sortOrder,
          contributor,
          keyword,
          visible,
          tag,
          size,
          labelSelector,
          fieldSelector,
          page,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Publish a post.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishPost(name: string, options?: any): AxiosPromise<Post> {
      return localVarFp.publishPost(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Update a post.
     * @param {string} name
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDraftPost(name: string, postRequest: PostRequest, options?: any): AxiosPromise<Post> {
      return localVarFp.updateDraftPost(name, postRequest, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for draftPost operation in ApiConsoleHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1PostApiDraftPostRequest
 */
export interface ApiConsoleHaloRunV1alpha1PostApiDraftPostRequest {
  /**
   *
   * @type {PostRequest}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiDraftPost
   */
  readonly postRequest: PostRequest
}

/**
 * Request parameters for listPosts operation in ApiConsoleHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1PostApiListPostsRequest
 */
export interface ApiConsoleHaloRunV1alpha1PostApiListPostsRequest {
  /**
   * Post collation.
   * @type {'PUBLISH_TIME' | 'CREATE_TIME'}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly sort?: 'PUBLISH_TIME' | 'CREATE_TIME'

  /**
   *
   * @type {'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly publishPhase?: 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED'

  /**
   *
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly category?: Array<string>

  /**
   * ascending order If it is true; otherwise, it is in descending order.
   * @type {boolean}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly sortOrder?: boolean

  /**
   *
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly contributor?: Array<string>

  /**
   * Posts filtered by keyword.
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly keyword?: string

  /**
   *
   * @type {'PUBLIC' | 'INTERNAL' | 'PRIVATE'}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly visible?: 'PUBLIC' | 'INTERNAL' | 'PRIVATE'

  /**
   *
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly tag?: Array<string>

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly fieldSelector?: Array<string>

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiListPosts
   */
  readonly page?: number
}

/**
 * Request parameters for publishPost operation in ApiConsoleHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1PostApiPublishPostRequest
 */
export interface ApiConsoleHaloRunV1alpha1PostApiPublishPostRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiPublishPost
   */
  readonly name: string
}

/**
 * Request parameters for updateDraftPost operation in ApiConsoleHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPostRequest
 */
export interface ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPostRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPost
   */
  readonly name: string

  /**
   *
   * @type {PostRequest}
   * @memberof ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPost
   */
  readonly postRequest: PostRequest
}

/**
 * ApiConsoleHaloRunV1alpha1PostApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1PostApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1PostApi extends BaseAPI {
  /**
   * Draft a post.
   * @param {ApiConsoleHaloRunV1alpha1PostApiDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1PostApi
   */
  public draftPost(requestParameters: ApiConsoleHaloRunV1alpha1PostApiDraftPostRequest, options?: AxiosRequestConfig) {
    return ApiConsoleHaloRunV1alpha1PostApiFp(this.configuration)
      .draftPost(requestParameters.postRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List posts.
   * @param {ApiConsoleHaloRunV1alpha1PostApiListPostsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1PostApi
   */
  public listPosts(
    requestParameters: ApiConsoleHaloRunV1alpha1PostApiListPostsRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1PostApiFp(this.configuration)
      .listPosts(
        requestParameters.sort,
        requestParameters.publishPhase,
        requestParameters.category,
        requestParameters.sortOrder,
        requestParameters.contributor,
        requestParameters.keyword,
        requestParameters.visible,
        requestParameters.tag,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Publish a post.
   * @param {ApiConsoleHaloRunV1alpha1PostApiPublishPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1PostApi
   */
  public publishPost(
    requestParameters: ApiConsoleHaloRunV1alpha1PostApiPublishPostRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1PostApiFp(this.configuration)
      .publishPost(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update a post.
   * @param {ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1PostApi
   */
  public updateDraftPost(
    requestParameters: ApiConsoleHaloRunV1alpha1PostApiUpdateDraftPostRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1PostApiFp(this.configuration)
      .updateDraftPost(requestParameters.name, requestParameters.postRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
