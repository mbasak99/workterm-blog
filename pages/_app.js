import "../styles/globals.css";
import SiteLayout from "./components/layout";
import ErrorPage from "./error/404";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return pageProps.statusCode != 404 ? (
    <AnimatePresence exitBeforeEnter>
      <SiteLayout key={router.route}>
        <Component {...pageProps} />
      </SiteLayout>
    </AnimatePresence>
  ) : (
    <ErrorPage statusCode={pageProps.statusCode} />
  );
}

export default MyApp;
