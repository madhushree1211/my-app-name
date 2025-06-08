import '../styles/globals.css'; // ✅ Only in _app.js

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;


