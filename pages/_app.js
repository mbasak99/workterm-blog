import "../styles/globals.css";
import SiteLayout from "./components/layout";
import ErrorPage from "./error/404";
// import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const [darkTheme, setDarkTheme] = useState(true);

  /* useEffect(() => {
    darkTheme
      ? require("antd/dist/antd.dark.css")
      : require("antd/dist/antd.css");
  }); */

  return pageProps.statusCode != 404 ? (
    <SiteLayout>
      <Component
        {...pageProps}
        /* darkTheme={darkTheme}
        setDarkTheme={setDarkTheme} */
      />
    </SiteLayout>
  ) : (
    <ErrorPage statusCode={pageProps.statusCode} />
  );
}

export default MyApp;
