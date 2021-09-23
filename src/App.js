import AboutUs from "./Pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
