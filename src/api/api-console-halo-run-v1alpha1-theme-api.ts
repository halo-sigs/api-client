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
import { ConfigMap } from '../models'
// @ts-ignore
import { Setting } from '../models'
// @ts-ignore
import { Theme } from '../models'
// @ts-ignore
import { ThemeList } from '../models'
/**
 * ApiConsoleHaloRunV1alpha1ThemeApi - axios parameter creator
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ThemeApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchActivatedTheme: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/-/activation`
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
     * Fetch configMap of theme by configured configMapName.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeConfig: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('fetchThemeConfig', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/config`.replace(
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
     * Fetch setting of theme.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeSetting: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('fetchThemeSetting', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/setting`.replace(
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
     * Install a theme by uploading a zip file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installTheme: async (file: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'file' is not null or undefined
      assertParamExists('installTheme', 'file', file)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/install`
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
    /**
     * List themes.
     * @param {boolean} uninstalled
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThemes: async (
      uninstalled: boolean,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'uninstalled' is not null or undefined
      assertParamExists('listThemes', 'uninstalled', uninstalled)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes`
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

      if (uninstalled !== undefined) {
        localVarQueryParameter['uninstalled'] = uninstalled
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
     * Reload theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reload: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('reload', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/reload`.replace(
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
     * Reset the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetThemeConfig: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('resetThemeConfig', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/reset-config`.replace(
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
     * Update the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThemeConfig: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('updateThemeConfig', 'name', name)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/config`.replace(
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
     * Upgrade theme
     * @param {string} name
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeTheme: async (name: string, file: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('upgradeTheme', 'name', name)
      // verify required parameter 'file' is not null or undefined
      assertParamExists('upgradeTheme', 'file', file)
      const localVarPath = `/apis/api.console.halo.run/v1alpha1/themes/{name}/upgrade`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name)),
      )
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
 * ApiConsoleHaloRunV1alpha1ThemeApi - functional programming interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ThemeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ApiConsoleHaloRunV1alpha1ThemeApiAxiosParamCreator(configuration)
  return {
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchActivatedTheme(
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.fetchActivatedTheme(options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Fetch configMap of theme by configured configMapName.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchThemeConfig(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.fetchThemeConfig(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Fetch setting of theme.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async fetchThemeSetting(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Setting>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.fetchThemeSetting(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Install a theme by uploading a zip file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async installTheme(
      file: any,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.installTheme(file, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * List themes.
     * @param {boolean} uninstalled
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listThemes(
      uninstalled: boolean,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThemeList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listThemes(
        uninstalled,
        size,
        labelSelector,
        fieldSelector,
        page,
        options,
      )
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Reload theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async reload(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Theme>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.reload(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Reset the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async resetThemeConfig(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.resetThemeConfig(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Update the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateThemeConfig(
      name: string,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateThemeConfig(name, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
    /**
     * Upgrade theme
     * @param {string} name
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async upgradeTheme(
      name: string,
      file: any,
      options?: AxiosRequestConfig,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.upgradeTheme(name, file, options)
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)
    },
  }
}

/**
 * ApiConsoleHaloRunV1alpha1ThemeApi - factory interface
 * @export
 */
export const ApiConsoleHaloRunV1alpha1ThemeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ApiConsoleHaloRunV1alpha1ThemeApiFp(configuration)
  return {
    /**
     * Fetch the activated theme.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchActivatedTheme(options?: any): AxiosPromise<Theme> {
      return localVarFp.fetchActivatedTheme(options).then((request) => request(axios, basePath))
    },
    /**
     * Fetch configMap of theme by configured configMapName.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeConfig(name: string, options?: any): AxiosPromise<ConfigMap> {
      return localVarFp.fetchThemeConfig(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Fetch setting of theme.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fetchThemeSetting(name: string, options?: any): AxiosPromise<Setting> {
      return localVarFp.fetchThemeSetting(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Install a theme by uploading a zip file.
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    installTheme(file: any, options?: any): AxiosPromise<Theme> {
      return localVarFp.installTheme(file, options).then((request) => request(axios, basePath))
    },
    /**
     * List themes.
     * @param {boolean} uninstalled
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listThemes(
      uninstalled: boolean,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      page?: number,
      options?: any,
    ): AxiosPromise<ThemeList> {
      return localVarFp
        .listThemes(uninstalled, size, labelSelector, fieldSelector, page, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Reload theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reload(name: string, options?: any): AxiosPromise<Theme> {
      return localVarFp.reload(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Reset the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetThemeConfig(name: string, options?: any): AxiosPromise<ConfigMap> {
      return localVarFp.resetThemeConfig(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Update the configMap of theme setting.
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateThemeConfig(name: string, options?: any): AxiosPromise<ConfigMap> {
      return localVarFp.updateThemeConfig(name, options).then((request) => request(axios, basePath))
    },
    /**
     * Upgrade theme
     * @param {string} name
     * @param {any} file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    upgradeTheme(name: string, file: any, options?: any): AxiosPromise<void> {
      return localVarFp.upgradeTheme(name, file, options).then((request) => request(axios, basePath))
    },
  }
}

/**
 * Request parameters for fetchThemeConfig operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeConfigRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeConfigRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeConfig
   */
  readonly name: string
}

/**
 * Request parameters for fetchThemeSetting operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeSettingRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeSettingRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeSetting
   */
  readonly name: string
}

/**
 * Request parameters for installTheme operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiInstallThemeRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiInstallThemeRequest {
  /**
   *
   * @type {any}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiInstallTheme
   */
  readonly file: any
}

/**
 * Request parameters for listThemes operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiListThemesRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiListThemesRequest {
  /**
   *
   * @type {boolean}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiListThemes
   */
  readonly uninstalled: boolean

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiListThemes
   */
  readonly size?: number

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiListThemes
   */
  readonly labelSelector?: Array<string>

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiListThemes
   */
  readonly fieldSelector?: Array<string>

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiListThemes
   */
  readonly page?: number
}

/**
 * Request parameters for reload operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiReloadRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiReloadRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiReload
   */
  readonly name: string
}

/**
 * Request parameters for resetThemeConfig operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiResetThemeConfigRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiResetThemeConfigRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiResetThemeConfig
   */
  readonly name: string
}

/**
 * Request parameters for updateThemeConfig operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiUpdateThemeConfigRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiUpdateThemeConfigRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiUpdateThemeConfig
   */
  readonly name: string
}

/**
 * Request parameters for upgradeTheme operation in ApiConsoleHaloRunV1alpha1ThemeApi.
 * @export
 * @interface ApiConsoleHaloRunV1alpha1ThemeApiUpgradeThemeRequest
 */
export interface ApiConsoleHaloRunV1alpha1ThemeApiUpgradeThemeRequest {
  /**
   *
   * @type {string}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiUpgradeTheme
   */
  readonly name: string

  /**
   *
   * @type {any}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApiUpgradeTheme
   */
  readonly file: any
}

/**
 * ApiConsoleHaloRunV1alpha1ThemeApi - object-oriented interface
 * @export
 * @class ApiConsoleHaloRunV1alpha1ThemeApi
 * @extends {BaseAPI}
 */
export class ApiConsoleHaloRunV1alpha1ThemeApi extends BaseAPI {
  /**
   * Fetch the activated theme.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public fetchActivatedTheme(options?: AxiosRequestConfig) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .fetchActivatedTheme(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Fetch configMap of theme by configured configMapName.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public fetchThemeConfig(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeConfigRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .fetchThemeConfig(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Fetch setting of theme.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeSettingRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public fetchThemeSetting(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiFetchThemeSettingRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .fetchThemeSetting(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Install a theme by uploading a zip file.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiInstallThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public installTheme(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiInstallThemeRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .installTheme(requestParameters.file, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List themes.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiListThemesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public listThemes(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiListThemesRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .listThemes(
        requestParameters.uninstalled,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Reload theme setting.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiReloadRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public reload(requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiReloadRequest, options?: AxiosRequestConfig) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .reload(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Reset the configMap of theme setting.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiResetThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public resetThemeConfig(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiResetThemeConfigRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .resetThemeConfig(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Update the configMap of theme setting.
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiUpdateThemeConfigRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public updateThemeConfig(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiUpdateThemeConfigRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .updateThemeConfig(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Upgrade theme
   * @param {ApiConsoleHaloRunV1alpha1ThemeApiUpgradeThemeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ApiConsoleHaloRunV1alpha1ThemeApi
   */
  public upgradeTheme(
    requestParameters: ApiConsoleHaloRunV1alpha1ThemeApiUpgradeThemeRequest,
    options?: AxiosRequestConfig,
  ) {
    return ApiConsoleHaloRunV1alpha1ThemeApiFp(this.configuration)
      .upgradeTheme(requestParameters.name, requestParameters.file, options)
      .then((request) => request(this.axios, this.basePath))
  }
}
