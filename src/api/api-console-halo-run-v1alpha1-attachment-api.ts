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
import { Attachment } from '../models'
// @ts-ignore
import { AttachmentList } from '../models'
/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     *
     * @param {string} [group] Name of group
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [uploadedBy] Name of user who uploaded the attachment
     * @param {string} [policy] Name of policy
     * @param {Array<string>} [sort] Sort property and direction of the list result. Supported fields: creationTimestamp, size
     * @param {string} [displayName] Display name of attachment
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAttachments: async (
      group?: string,
      ungrouped?: boolean,
      uploadedBy?: string,
      policy?: string,
      sort?: Array<string>,
      displayName?: string,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      size?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/attachments`
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

      if (group !== undefined) {
        localVarQueryParameter['group'] = group
      }

      if (ungrouped !== undefined) {
        localVarQueryParameter['ungrouped'] = ungrouped
      }

      if (uploadedBy !== undefined) {
        localVarQueryParameter['uploadedBy'] = uploadedBy
      }

      if (policy !== undefined) {
        localVarQueryParameter['policy'] = policy
      }

      if (sort) {
        localVarQueryParameter['sort'] = Array.from(sort)
      }

      if (displayName !== undefined) {
        localVarQueryParameter['displayName'] = displayName
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

      if (size !== undefined) {
        localVarQueryParameter['size'] = size
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
     *
     * @param {string} policyName Storage policy name
     * @param {any} file
     * @param {string} [groupName] The name of the group to which the attachment belongs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAttachment: async (
      policyName: string,
      file: any,
      groupName?: string,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'policyName' is not null or undefined
      assertParamExists('uploadAttachment', 'policyName', policyName)
      // verify required parameter 'file' is not null or undefined
      assertParamExists('uploadAttachment', 'file', file)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/attachments/upload`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any
      const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)()

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration)

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (policyName !== undefined) {
        localVarFormParams.append('policyName', policyName as any)
      }

      if (groupName !== undefined) {
        localVarFormParams.append('groupName', groupName as any)
      }

      if (file !== undefined) {
        localVarFormParams.append('file', file as any)
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers }
      localVarRequestOptions.data = localVarFormParams

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1AttachmentApiAxiosParamCreator(configuration)
  return {
    /**
     *
     * @param {string} [group] Name of group
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [uploadedBy] Name of user who uploaded the attachment
     * @param {string} [policy] Name of policy
     * @param {Array<string>} [sort] Sort property and direction of the list result. Supported fields: creationTimestamp, size
     * @param {string} [displayName] Display name of attachment
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchAttachments(
      group?: string,
      ungrouped?: boolean,
      uploadedBy?: string,
      policy?: string,
      sort?: Array<string>,
      displayName?: string,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      size?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.searchAttachments(
        group,
        ungrouped,
        uploadedBy,
        policy,
        sort,
        displayName,
        page,
        labelSelector,
        fieldSelector,
        size,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     *
     * @param {string} policyName Storage policy name
     * @param {any} file
     * @param {string} [groupName] The name of the group to which the attachment belongs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadAttachment(
      policyName: string,
      file: any,
      groupName?: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Attachment>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAttachment(policyName, file, groupName, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1AttachmentApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1AttachmentApiFp(configuration)
  return {
    /**
     *
     * @param {string} [group] Name of group
     * @param {boolean} [ungrouped] Filter attachments without group. This parameter will ignore group parameter.
     * @param {string} [uploadedBy] Name of user who uploaded the attachment
     * @param {string} [policy] Name of policy
     * @param {Array<string>} [sort] Sort property and direction of the list result. Supported fields: creationTimestamp, size
     * @param {string} [displayName] Display name of attachment
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchAttachments(
      group?: string,
      ungrouped?: boolean,
      uploadedBy?: string,
      policy?: string,
      sort?: Array<string>,
      displayName?: string,
      page?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      size?: number,
      options?: any,
    ): AxiosPromise<AttachmentList> {
      return localVarFp
        .searchAttachments(
          group,
          ungrouped,
          uploadedBy,
          policy,
          sort,
          displayName,
          page,
          labelSelector,
          fieldSelector,
          size,
          options,
        )
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @param {string} policyName Storage policy name
     * @param {any} file
     * @param {string} [groupName] The name of the group to which the attachment belongs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAttachment(policyName: string, file: any, groupName?: string, options?: any): AxiosPromise<Attachment> {
      return localVarFp
        .uploadAttachment(policyName, file, groupName, options)
        .then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for searchAttachments operation in ApiConsoleHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest
 */
export interface ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest {
  /**
   * Name of group
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly group?: string

  /**
   * Filter attachments without group. This parameter will ignore group parameter.
   * @type {boolean}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly ungrouped?: boolean

  /**
   * Name of user who uploaded the attachment
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly uploadedBy?: string

  /**
   * Name of policy
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly policy?: string

  /**
   * Sort property and direction of the list result. Supported fields: creationTimestamp, size
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly sort?: Array<string>

  /**
   * Display name of attachment
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly displayName?: string

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly page?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly fieldSelector?: Array<string>

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachments
   */
  readonly size?: number
}

/**
 * Request parameters for uploadAttachment operation in ApiConsoleHaloRunV1alpha1AttachmentApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest
 */
export interface ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest {
  /**
   * Storage policy name
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
   */
  readonly policyName: string

  /**
   *
   * @type {any}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
   */
  readonly file: any

  /**
   * The name of the group to which the attachment belongs
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachment
   */
  readonly groupName?: string
}

/**
 * ApiConsoleHaloRunV1alpha1AttachmentApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1AttachmentApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1AttachmentApi extends BaseAPI {
  /**
   *
   * @param {ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApi
   */
  public searchAttachments(
    requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiSearchAttachmentsRequest = {},
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .searchAttachments(
        requestParameters.group,
        requestParameters.ungrouped,
        requestParameters.uploadedBy,
        requestParameters.policy,
        requestParameters.sort,
        requestParameters.displayName,
        requestParameters.page,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        requestParameters.size,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @param {ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1AttachmentApi
   */
  public uploadAttachment(
    requestParameters: ApiConsoleHaloRunV1alpha1AttachmentApiUploadAttachmentRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1AttachmentApiFp(this.configuration)
      .uploadAttachment(requestParameters.policyName, requestParameters.file, requestParameters.groupName, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
