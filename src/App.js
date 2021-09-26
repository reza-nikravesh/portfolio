import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import { Route, Switch } from "react-router";
import { MovieDetails } from "./Pages/MovieDetails";
import MovieState from "./Data/MovieState";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Switch>
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
    </div>
  );
}

export default App;
