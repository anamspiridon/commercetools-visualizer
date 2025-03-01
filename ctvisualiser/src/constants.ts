// Make sure to import the helper functions from the `ssr` entry point.
import { entryPointUriPathToPermissionKeys } from '@commercetools-frontend/application-shell/ssr';

declare const window: Window &
  typeof globalThis & {
    app: { entryPointUriPath: string };
  };

export const entryPointUriPath =
  typeof window === 'undefined'
    ? process.env.ENTRY_POINT_URI_PATH || 'ctvisualiser'
    : window.app.entryPointUriPath || 'ctvisualiser';

export const PERMISSIONS = entryPointUriPathToPermissionKeys(entryPointUriPath);

export const PRECISION_TYPES = {
  highPrecision: 'highPrecision',
  centPrecision: 'centPrecision',
};

export const DISCOUNT_VALUE_TYPES = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  DIRECT: 'direct-discount',
};

export enum SHORT_ADDRESS_TYPE {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

export const INVENTORY_MODES = {
  NONE: 'None',
};
