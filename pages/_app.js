import "../styles/globals.css";
import SiteLayout from "./components/layout";
import ErrorPage from "./error/404";

function MyApp({ Component, pageProps }) {
  return pageProps.statusCode != 404 ? (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  ) : (
    <ErrorPage statusCode={pageProps.statusCode} />
  );
}

export default MyApp;
