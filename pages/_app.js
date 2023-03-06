import '../styles/globals.css';
import {Amplify} from '@aws-amplify/core';
import config from '../src/aws-exports';
Amplify.configure(config);

import {AmplifyProvider} from '@aws-amplify/ui-react';
import {studioTheme} from '../src/ui-components';
import '@aws-amplify/ui-react/styles.css';
function MyApp({Component, pageProps}) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;
