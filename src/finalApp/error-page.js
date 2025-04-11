import { useRouteError } from 'react-router-dom';
import errorPage from './lables_fa';

export default function ErrorPage() {
  //  provides the error that was thrown
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>(:</h1>
      <p>{errorPage.errorOcurred}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
