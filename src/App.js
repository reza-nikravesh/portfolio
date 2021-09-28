import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Pages from "./Data/Pages";
function App() {
  const location = useLocation();
  const [pages, setPages] = useState(Pages());
  const [currentPage, setCurrentPage] = useState(
    pages.filter((item) => item.active === true)[0]
  );
  useEffect(() => {
    setCurrentPage(pages.filter((item) => item.url === location.pathname)[0]);
  });
  return (
    <div className="App">
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch Location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
