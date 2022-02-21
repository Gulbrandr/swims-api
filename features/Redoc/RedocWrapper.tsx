import * as React from 'react';

import {
  ErrorBoundary,
  StoreBuilder,
  RedocRawOptions,
  RedocNormalizedOptions,
  argValueToBoolean,
  Loading,
} from 'redoc';

import Redoc from './Redoc';

export interface RedocStandaloneProps {
  spec?: object;
  specUrl?: string;
  options?: RedocRawOptions;
  onLoaded?: (e?: Error) => any;
}

export const RedocWrapper = function (props: RedocStandaloneProps) {
  const { spec, specUrl, options = {}, onLoaded } = props;
  const hideLoading = argValueToBoolean(options.hideLoading, false);

  const normalizedOpts = new RedocNormalizedOptions(options);

  return (
    <ErrorBoundary>
      <StoreBuilder
        spec={spec}
        specUrl={specUrl}
        options={options}
        onLoaded={onLoaded}
      >
        {({ loading, store }) =>
          !loading ? (
            <Redoc store={store!} />
          ) : hideLoading ? null : (
            <Loading color={normalizedOpts.theme.colors.primary.main} />
          )
        }
      </StoreBuilder>
    </ErrorBoundary>
  );
};
