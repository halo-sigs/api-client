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
import { Plugin } from '../models'
/**
 * ApiHaloRunV1alpha1PluginApi - axios parameter creator
 * @export
 */
export const ApiHaloRunV1alpha1PluginApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Install a plugin by uploading a Jar file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPlugin: async (file: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'file' is not null or undefined
      assertParamExists('installPlugin', 'file', file)
      const localVarPath = `/apis/api.halo.run/v1alpha1/plugins/install`
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
 * ApiHaloRunV1alpha1PluginApi - functional programming interface
 * @export
 */
export const ApiHaloRunV1alpha1PluginApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiHaloRunV1alpha1PluginApiAxiosParamCreator(configuration)
  return {
    /**
     * Install a plugin by uploading a Jar file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installPlugin(
      file: any,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Plugin>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.installPlugin(file, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiHaloRunV1alpha1PluginApi - factory interface
 * @export
 */
export const ApiHaloRunV1alpha1PluginApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiHaloRunV1alpha1PluginApiFp(configuration)
  return {
    /**
     * Install a plugin by uploading a Jar file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installPlugin(file: any, options?: any): AxiosPromise<Plugin> {
      return localVarFp.installPlugin(file, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for installPlugin operation in ApiHaloRunV1alpha1PluginApi.
 * @export
 * @interface ApiHaloRunV1alpha1PluginApiInstallPluginRequest
 */
export interface ApiHaloRunV1alpha1PluginApiInstallPluginRequest {
  /**
   *
   * @type {any}
   * @memberof ApiHaloRunV1alpha1PluginApiInstallPlugin
   */
  readonly file: any
}

/**
 * ApiHaloRunV1alpha1PluginApi - object-oriented interface
 * @export
 * @class ApiHaloRunV1alpha1PluginApi
 * @extends {BaseAPI}
 */
export class ApiHaloRunV1alpha1PluginApi extends BaseAPI {
  /**
   * Install a plugin by uploading a Jar file.
   * @param {ApiHaloRunV1alpha1PluginApiInstallPluginRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiHaloRunV1alpha1PluginApi
   */
  public installPlugin(
    requestParameters: ApiHaloRunV1alpha1PluginApiInstallPluginRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiHaloRunV1alpha1PluginApiFp(this.configuration)
      .installPlugin(requestParameters.file, options)
      .then((request) => request(this.axios, this.basePath))
  }
}