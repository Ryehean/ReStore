import ThemeProvider  from "@mui/material/styles/ThemeProvider";
import { Container, CssBaseline } from "@mui/material";
import  createTheme  from "@mui/material/styles/createTheme";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palettetype = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palettetype,
      background: {
        default: palettetype === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer theme='colored' position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/catalog' component={Catalog}/>
          <Route path='/catalog/:id' component={ProductDetails}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/server-error' component={ServerError}/>
          <Route component={NotFound}/>
        </Switch>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
