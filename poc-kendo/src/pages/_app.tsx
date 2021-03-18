// Import configuration from the theme builder
import '../styles/variables.scss';
import '@progress/kendo-theme-default/dist/all.scss';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
