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
import ScrollToTop from "./Components/ScrollToTop";
import styled from "styled-components";

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
    <AppStyle>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <GlobalStyle />
      <ScrollToTop />
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
    </AppStyle>
  );
}

const AppStyle = styled.div`
  @media screen and (max-width: 460px) {
  }
`;
export default App;
