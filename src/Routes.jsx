import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Home from "./components/home/HomeRoute";
import About from "./components/about/AboutRoute";
import MusicWriting from "./components/music-writing/MusicWritingRoute";
import Photography from "./components/photography/PhotographyRoute";

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route path="/">
      <NavBar />
      {Home}
      {About}
      {MusicWriting}
      {Photography}
    </Route>
  </BrowserRouter>
);

export default Routes;
