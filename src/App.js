import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
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
