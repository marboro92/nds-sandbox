import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NDSProvider, BrandedNavBar, theme, ApplicationFrame } from "@nulogy/components";
import { primaryMenu, secondaryMenu, search } from "./data/menuData.js";
import { Pages } from "./pages/index";

const App = () => {
  return (
    <Router>
      <NDSProvider theme={theme}>
        <ApplicationFrame navBar={<BrandedNavBar menuData={{ primaryMenu, secondaryMenu, search }} />}>
          <Pages />
        </ApplicationFrame>
      </NDSProvider>
    </Router>
  );
};

export default App;
