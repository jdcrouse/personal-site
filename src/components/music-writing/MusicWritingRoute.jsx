import { Route } from "react-router-dom";
import MusicWritingPage from "./MusicWritingPage";

const MusicWritingRoute = (
  <Route
    path={process.env.PUBLIC_URL + "/music-writing"}
    component={MusicWritingPage}
  />
);

export default MusicWritingRoute;
