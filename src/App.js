import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Nav/NavBar/NavBar/NavBar";
import Home from "./Components/Pages/Home/HomeContent/HomeIndex/Home";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Partners from "./Components/Pages/Partners/Partners";
import LegalServices from "./Components/Pages/LegalServices/LegalServices";
import News from "./Components/Pages/News/News";
import Footer from "./Components/Nav/Footer/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LanguageContext from "./Components/Functions/Context/LanguageContext";
import TextBG from "./Text/TextBG.json";
import TextEN from "./Text/TextEN.json";
import Test from "./Components/Pages/Test/Test";

const initialState = TextBG.BG;
const reducer = (state, action) => {
  switch (action) {
    case `Bulgarian`:
      return TextBG.BG;
    case `English`:
      return TextEN.EN;
    default:
      return state;
  }
};

function App() {
  const theme = createMuiTheme({
    overrides: {
      MuiTypography: {
        colorPrimary: {
          color: `beige`,
        },
        colorSecondary: {
          color: `amber`,
        },
      },
    },
    App: {
      flex: `1 0 auto`,
      height: `100%`,
      width: `100%`,
      margin: `0px`,
      padding: `0px`,
    },
    displayContainer: {
      minHeight: `50vh`,
      textAlign: `center`,
    },
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  });
  // useContext() for Language switch

  const [language, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true} maxWidth={false} theme={theme.App}>
        <Router>
          <LanguageContext.Provider value={{ language, dispatch }}>
            <NavBar />

            <Container
              disableGutters={true}
              maxWidth={false}
              theme={theme.displayContainer}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Contacts" component={Contacts} />
                <Route path="/Partners" component={Partners} />
                <Route path="/LegalServices" component={LegalServices} />
                <Route path="/News" component={News} />
                <Route path="/Test" component={Test} />
              </Switch>
            </Container>
            <Footer />
          </LanguageContext.Provider>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
