import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

export const testingQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error:
      process.env.NODE_ENV === 'test'
        ? () => {
            // do not log
          }
        : console.error,
  },
});

export function CommonProvidersForTests({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <QueryClientProvider client={testingQueryClient}>
        <NavigationContainer>{children}</NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
}
