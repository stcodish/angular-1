import {
  ComponentRef,
  coreLoadAndBootstrap,
  ReflectiveInjector,
  PlatformRef,
  getPlatform,
  createPlatform,
  assertPlatform
} from '@angular/core';

import {Type, isPresent, isBlank} from './src/facade/lang';
import {BROWSER_APP_COMMON_PROVIDERS, BROWSER_PROVIDERS, BROWSER_PLATFORM_MARKER} from './browser_common';
export {BrowserPlatformLocation} from './src/browser/location/browser_platform_location';

export {
  BROWSER_PROVIDERS,
  By,
  Title,
  enableDebugTools,
  disableDebugTools,
} from './browser_common';

/**
 * An array of providers that should be passed into `application()` when bootstrapping a component
 * when all templates
 * have been precompiled offline.
 */
export const BROWSER_APP_PROVIDERS: Array<any /*Type | Provider | any[]*/> =
    BROWSER_APP_COMMON_PROVIDERS;

export function browserStaticPlatform(): PlatformRef {
  if (isBlank(getPlatform())) {
    createPlatform(ReflectiveInjector.resolveAndCreate(BROWSER_PROVIDERS));
  }
  return assertPlatform(BROWSER_PLATFORM_MARKER);
}

/**
 * See {@link bootstrap} for more information.
 */
export function bootstrapStatic(appComponentType: Type,
                                customProviders?: Array<any /*Type | Provider | any[]*/>,
                                initReflector?: Function): Promise<ComponentRef> {
  if (isPresent(initReflector)) {
    initReflector();
  }

  let appProviders =
      isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
  var appInjector =
      ReflectiveInjector.resolveAndCreate(appProviders, browserStaticPlatform().injector);
  return coreLoadAndBootstrap(appInjector, appComponentType);
}
