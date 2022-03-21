import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import Container from "@mui/material/Container";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Alert from "./components/Alert/Alert";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (msg, type) => {
    setalert({ message: msg, type: type });

    setTimeout(() => {
      setalert(null);
    }, 1800);
  };
  return (
    <BrowserRouter>
      <Header />

      <div className="app">
        <Alert alert={alert} />
        <Container>
          <Switch>
            <Route path="/" component={Movies} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/search" component={Search} />
            <Route path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route path="/register" component={Register}>
              <Register showAlert={showAlert} />
            </Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
