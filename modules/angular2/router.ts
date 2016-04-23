/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */

export {Router} from './router/src/router';
export {RouterOutlet} from 'router/src/directives/router_outlet';
export {RouterLink} from 'router/src/directives/router_link';
export {RouteParams, RouteData} from './router/src/instruction';
export {RouteRegistry, ROUTER_PRIMARY_COMPONENT} from './router/src/route_registry';
export * from 'router/src/route_config/route_config_decorator';
export * from './router/src/route_definition';
export {OnActivate, OnDeactivate, OnReuse, CanDeactivate, CanReuse} from './router/src/interfaces';
export {CanActivate} from 'router/src/lifecycle/lifecycle_annotations';
export {Instruction, ComponentInstruction} from './router/src/instruction';
export {OpaqueToken} from 'angular2/core';
export {ROUTER_PROVIDERS_COMMON} from 'router/src/router_providers_common';
export {ROUTER_PROVIDERS, ROUTER_BINDINGS} from 'router/src/router_providers';

import {RouterOutlet} from 'router/src/directives/router_outlet';
import {RouterLink} from 'router/src/directives/router_link';
import {CONST_EXPR} from './facade/lang';

/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
 * component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
export const ROUTER_DIRECTIVES: any[] = CONST_EXPR([RouterOutlet, RouterLink]);
