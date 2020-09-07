import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "./modules/shared/Loading/Loading";
const Home = React.lazy(() => import("./modules/Home/Home"));
const ContactUs = React.lazy(() => import("./modules/Contact/Contact"));

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <About />
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

function About() {
  return <h2>About</h2>;
}
