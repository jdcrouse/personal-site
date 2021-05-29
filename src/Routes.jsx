import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Home from "./components/home/HomeRoute";
import About from "./components/about/AboutRoute";
import MusicWriting from "./components/music-writing/MusicWritingRoute";
import Photography from "./components/photography/PhotographyRoute";

const Routes = () => (
  <Router>
    <Route path="/">
      <NavBar />
      {Home}
      {About}
      {MusicWriting}
      {Photography}
    </Route>
  </Router>
);

export default Routes;
