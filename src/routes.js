import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "./modules/shared/Loading/Loading";

const Home = React.lazy(() => import("./modules/Home/Home"));
const ContactUs = React.lazy(() => import("./modules/Contact/Contact"));
const About = React.lazy(() => import("./modules/About/About"));
const ErrorBoundaries = React.lazy(() =>
  import("./modules/ErrorBoundaries/ErrorBoundaries")
);
const ErrorBoundary = React.lazy(() =>
  import("./modules/shared/ErrorBoundary/ErrorBoundary")
);
const Portals = React.lazy(() => import("./modules/Portals/Portals"));
const UseReducerHook = React.lazy(() =>
  import("./modules/UseReducerHook/UseReducerHook")
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </Route>
      <Route path="/portals">
        <Suspense fallback={<Loading />}>
          <Portals />
        </Suspense>
      </Route>
      <Route path="/contact-us">
        <Suspense fallback={<Loading />}>
          <ContactUs />
        </Suspense>
      </Route>
      <Route path="/use-reducer-hook">
        <Suspense fallback={<Loading />}>
          <UseReducerHook />
        </Suspense>
      </Route>
      <Route path="/error-boundary">
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            <ErrorBoundaries />
          </ErrorBoundary>
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </Route>
    </Switch>
  );
}
