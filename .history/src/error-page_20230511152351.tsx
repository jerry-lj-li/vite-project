import React from 'react';
import { useRouteError } from 'react-router-dom';

export interface IError {
  statusText: string;
  message: string;
}
export default function ErrorPage() {
  const error = useRouteError<IError>();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
