import { GlobalStyle, StyledContainer }   from "./GlobalStyle";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navigation } from "./navigation";

function App() {
  return (
    <>
      <GlobalStyle/>
        <HashRouter>
          <Navigation/>
          <StyledContainer>
            <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="/gallery"
                  element={<Gallery />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
            </Routes>
          </StyledContainer>
        </HashRouter>
    </>
  );
}

export default App;
