import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "./modules/shared/Loading/Loading";
const Home = React.lazy(() => import("./modules/Home/Home"));
const ContactUs = React.lazy(() => import("./modules/Contact/Contact"));
const About = React.lazy(() => import("./modules/About/About"));

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      </Route>
      <Route path="/contact-us">
        <Suspense fallback={<Loading />}>
          <ContactUs />
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
