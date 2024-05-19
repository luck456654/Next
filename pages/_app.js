// pages/_app.js
import { wrapper } from '../store';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);