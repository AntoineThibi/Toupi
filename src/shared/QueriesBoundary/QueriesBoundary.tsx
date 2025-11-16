import { QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorView } from "#shared/QueriesBoundary/ErrorView";
import { LoaderView } from "#shared/QueriesBoundary/LoaderView";

type ErrorFallbackProps = FallbackProps;

type Props = {
  children: React.ReactNode;
  ErrorFallback?: React.FC<ErrorFallbackProps> | undefined;
  LoaderFallback?: React.FC | undefined;
};

export const QueriesBoundary = ({
  children,
  ErrorFallback,
  LoaderFallback,
}: Props) => {
  return (
    <QueryErrorBoundary ErrorFallback={ErrorFallback}>
      <React.Suspense
        fallback={LoaderFallback ? <LoaderFallback /> : <LoaderView />}
      >
        {children}
      </React.Suspense>
    </QueryErrorBoundary>
  );
};

type ErrorProps = {
  children: React.ReactNode;
  ErrorFallback?: React.FC<ErrorFallbackProps> | undefined;
};

const QueryErrorBoundary = ({ children, ErrorFallback }: ErrorProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ErrorFallback ?? ErrorBoundaryView}
          >
            {children}
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
};

const ErrorBoundaryView = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  return <ErrorView onRetry={resetErrorBoundary} />;
};
