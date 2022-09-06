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
import { ListedSinglePageList } from '../models'
// @ts-ignore
import { Post } from '../models'
// @ts-ignore
import { PostRequest } from '../models'
// @ts-ignore
import { SinglePage } from '../models'
// @ts-ignore
import { SinglePageRequest } from '../models'
/**
 * ApiHaloRunV1alpha1PostApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1PostApiAxiosParamCreator = function (configuration?: Configuration) {
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
      const localVarPath = `/apis/api.halo.run/v1alpha1/posts`
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
      const localVarPath = `/apis/api.halo.run/v1alpha1/singlepages`
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
     * List posts.
     * @param {Array<string>} [contributors]
     * @param {Array<string>} [categories]
     * @param {Array<string>} [tags]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts: async (
      contributors?: Array<string>,
      categories?: Array<string>,
      tags?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.halo.run/v1alpha1/posts`
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

      if (contributors) {
        localVarQueryParameter['contributors'] = Array.from(contributors)
      }

      if (categories) {
        localVarQueryParameter['categories'] = Array.from(categories)
      }

      if (tags) {
        localVarQueryParameter['tags'] = Array.from(tags)
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
     * List single pages.
     * @param {Array<string>} [contributors]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages: async (
      contributors?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.halo.run/v1alpha1/singlepages`
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

      if (contributors) {
        localVarQueryParameter['contributors'] = Array.from(contributors)
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
      const localVarPath = `/apis/api.halo.run/v1alpha1/posts/{name}/publish`.replace(
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
     * Publish a single page.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('publishSinglePage', 'name', name)
      const localVarPath = `/apis/api.halo.run/v1alpha1/singlepages/{name}/publish`.replace(
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
      const localVarPath = `/apis/api.halo.run/v1alpha1/posts/{name}`.replace(
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
      const localVarPath = `/apis/api.halo.run/v1alpha1/singlepages/{name}`.replace(
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
 * ApiHaloRunV1alpha1PostApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1PostApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiHaloRunV1alpha1PostApiAxiosParamCreator(configuration)
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
     * List posts.
     * @param {Array<string>} [contributors]
     * @param {Array<string>} [categories]
     * @param {Array<string>} [tags]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listPosts(
      contributors?: Array<string>,
      categories?: Array<string>,
      tags?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedPostList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listPosts(
        contributors,
        categories,
        tags,
        size,
        labelSelector,
        fieldSelector,
        page,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List single pages.
     * @param {Array<string>} [contributors]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSinglePages(
      contributors?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedSinglePageList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listSinglePages(
        contributors,
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
     * Draft a post.
     * @param {PostRequest} postRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    draftPost(postRequest: PostRequest, options?: any): AxiosPromise<Post> {
      return localVarFp.draftPost(postRequest, options).then((request) => request(axios, basePath))
    },
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
     * List posts.
     * @param {Array<string>} [contributors]
     * @param {Array<string>} [categories]
     * @param {Array<string>} [tags]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPosts(
      contributors?: Array<string>,
      categories?: Array<string>,
      tags?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: any,
    ): AxiosPromise<ListedPostList> {
      return localVarFp
        .listPosts(contributors, categories, tags, size, labelSelector, fieldSelector, page, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List single pages.
     * @param {Array<string>} [contributors]
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSinglePages(
      contributors?: Array<string>,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: any,
    ): AxiosPromise<ListedSinglePageList> {
      return localVarFp
        .listSinglePages(contributors, size, labelSelector, fieldSelector, page, options)
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
     * Publish a single page.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    publishSinglePage(name: string, options?: any): AxiosPromise<SinglePage> {
      return localVarFp.publishSinglePage(name, options).then((request) => request(axios, basePath))
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
 * Request parameters for draftPost operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiDraftPostRequest
 */
export interface ApiHaloRunV1alpha1PostApiDraftPostRequest {
  /**
   *
   * @type {PostRequest}
   * @memberof ApiHaloRunV1alpha1PostApiDraftPost
   */
  readonly postRequest: PostRequest
}

/**
 * Request parameters for draftSinglePage operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiDraftSinglePageRequest
 */
export interface ApiHaloRunV1alpha1PostApiDraftSinglePageRequest {
  /**
   *
   * @type {SinglePageRequest}
   * @memberof ApiHaloRunV1alpha1PostApiDraftSinglePage
   */
  readonly singlePageRequest: SinglePageRequest
}

/**
 * Request parameters for listPosts operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiListPostsRequest
 */
export interface ApiHaloRunV1alpha1PostApiListPostsRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly contributors?: Array<string>

  /**
   *
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly categories?: Array<string>

  /**
   *
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly tags?: Array<string>

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly fieldSelector?: Array<string>

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiHaloRunV1alpha1PostApiListPosts
   */
  readonly page?: number
}

/**
 * Request parameters for listSinglePages operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiListSinglePagesRequest
 */
export interface ApiHaloRunV1alpha1PostApiListSinglePagesRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListSinglePages
   */
  readonly contributors?: Array<string>

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiHaloRunV1alpha1PostApiListSinglePages
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListSinglePages
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiHaloRunV1alpha1PostApiListSinglePages
   */
  readonly fieldSelector?: Array<string>

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiHaloRunV1alpha1PostApiListSinglePages
   */
  readonly page?: number
}

/**
 * Request parameters for publishPost operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiPublishPostRequest
 */
export interface ApiHaloRunV1alpha1PostApiPublishPostRequest {
  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiPublishPost
   */
  readonly name: string
}

/**
 * Request parameters for publishSinglePage operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiPublishSinglePageRequest
 */
export interface ApiHaloRunV1alpha1PostApiPublishSinglePageRequest {
  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiPublishSinglePage
   */
  readonly name: string
}

/**
 * Request parameters for updateDraftPost operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiUpdateDraftPostRequest
 */
export interface ApiHaloRunV1alpha1PostApiUpdateDraftPostRequest {
  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiUpdateDraftPost
   */
  readonly name: string

  /**
   *
   * @type {PostRequest}
   * @memberof ApiHaloRunV1alpha1PostApiUpdateDraftPost
   */
  readonly postRequest: PostRequest
}

/**
 * Request parameters for updateDraftSinglePage operation in ApiHaloRunV1alpha1PostApi.
 * @export
 * @interface ApiHaloRunV1alpha1PostApiUpdateDraftSinglePageRequest
 */
export interface ApiHaloRunV1alpha1PostApiUpdateDraftSinglePageRequest {
  /**
   *
   * @type {string}
   * @memberof ApiHaloRunV1alpha1PostApiUpdateDraftSinglePage
   */
  readonly name: string

  /**
   *
   * @type {SinglePageRequest}
   * @memberof ApiHaloRunV1alpha1PostApiUpdateDraftSinglePage
   */
  readonly singlePageRequest: SinglePageRequest
}

/**
 * ApiHaloRunV1alpha1PostApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1PostApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1PostApi extends BaseAPI {
  /**
   * Draft a post.
   * @param {ApiHaloRunV1alpha1PostApiDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public draftPost(requestParameters: ApiHaloRunV1alpha1PostApiDraftPostRequest, options?: AxiosRequestConfig) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .draftPost(requestParameters.postRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Draft a single page.
   * @param {ApiHaloRunV1alpha1PostApiDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public draftSinglePage(
    requestParameters: ApiHaloRunV1alpha1PostApiDraftSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .draftSinglePage(requestParameters.singlePageRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List posts.
   * @param {ApiHaloRunV1alpha1PostApiListPostsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public listPosts(requestParameters: ApiHaloRunV1alpha1PostApiListPostsRequest = {}, options?: AxiosRequestConfig) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .listPosts(
        requestParameters.contributors,
        requestParameters.categories,
        requestParameters.tags,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List single pages.
   * @param {ApiHaloRunV1alpha1PostApiListSinglePagesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public listSinglePages(
    requestParameters: ApiHaloRunV1alpha1PostApiListSinglePagesRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .listSinglePages(
        requestParameters.contributors,
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
   * @param {ApiHaloRunV1alpha1PostApiPublishPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public publishPost(requestParameters: ApiHaloRunV1alpha1PostApiPublishPostRequest, options?: AxiosRequestConfig) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .publishPost(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Publish a single page.
   * @param {ApiHaloRunV1alpha1PostApiPublishSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public publishSinglePage(
    requestParameters: ApiHaloRunV1alpha1PostApiPublishSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .publishSinglePage(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update a post.
   * @param {ApiHaloRunV1alpha1PostApiUpdateDraftPostRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public updateDraftPost(
    requestParameters: ApiHaloRunV1alpha1PostApiUpdateDraftPostRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .updateDraftPost(requestParameters.name, requestParameters.postRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update a single page.
   * @param {ApiHaloRunV1alpha1PostApiUpdateDraftSinglePageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PostApi
   */
  public updateDraftSinglePage(
    requestParameters: ApiHaloRunV1alpha1PostApiUpdateDraftSinglePageRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PostApiFp(this.configuration)
      .updateDraftSinglePage(requestParameters.name, requestParameters.singlePageRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
